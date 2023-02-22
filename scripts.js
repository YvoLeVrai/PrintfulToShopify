const config = require('./config');

$(document).ready(function() {
    $.ajax({
        url: "https://api.printful.com/product-templates",
        type: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + config.printful.access_token
        },
        success: function(result) {
            $.each(result.result, function(index, template) {
                $("#templates-list").append("<li>" + template.name + "</li>");
            });
        }
    });
});
