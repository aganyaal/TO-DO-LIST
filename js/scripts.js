// back end
function steve() {
    this.addClass("strike");
};


// front end
$(document).ready(function() {
    $("form#list").submit(function(event) {
        event.preventDefault();

        var list = $("input#stuff").val();

        $("ol#output").append("<li>" + list + "</li>");

        $("li").click(function(event) {
            $(this).addClass("strike");
        });
        $("li").dblclick(function(event) {
            $(this).removeClass("strike");
        });
    });
});
