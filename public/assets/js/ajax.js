
$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");
        console.log(isDevoured);

        var newDevouredState = {
            devoured: isDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", isDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $('.add-burger').on('click', function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#burger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers/', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('Added new burger')
                location.reload();
            }
        );
    });


});

