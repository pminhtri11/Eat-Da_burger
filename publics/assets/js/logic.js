$(function () {
    $(".eatBurger").on("click", function () {
        event.preventDefault();
        var id = $(this).data("id");

        console.log(newState);
        
        var newState = 1;
        var newEatenState = {
            devoured: newState
        };

        console.log(newState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("Change Eaten Stage to ", newState);
                location.reload();
            }
        );

    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#ca").val()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})