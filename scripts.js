$(document).ready(function() {
    $.ajax({
        url: "https://api.printful.com/product-templates",
        type: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer "
        },
        success: function(result) {
            $.each(result.result, function(index, template) {
                $("#templates-list").append("<li>" + template.name + "</li>");
            });
        }
    });
});
