$(document).ready(function() {
    $.ajax({
        url: "https://api.printful.com/product-templates",
        type: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer abFh3kSd9bzQZ3eTbo6Mxf2S05Lqx7HqZfbKSMgB"
        },
        success: function(result) {
            $.each(result.result, function(index, template) {
                $("#templates-list").append("<li>" + template.name + "</li>");
            });
        }
    });
});
