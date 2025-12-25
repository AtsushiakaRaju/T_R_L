$(document).ready(function () {

    let selectedCount = 0;
    const maxSelect = 3;

    $(".topic").click(function () {

        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            selectedCount--;
        } else {
            if (selectedCount < maxSelect) {
                $(this).addClass("selected");
                selectedCount++;
            }
        }

        $(".counter").text(`${selectedCount} / 3 tuned`);

        if (selectedCount === maxSelect) {
            $(".enter-btn").addClass("active").prop("disabled", false);
        } else {
            $(".enter-btn").removeClass("active").prop("disabled", true);
        }
    });

    $(".enter-btn").click(function () {
        if ($(this).hasClass("active")) {
            window.location.href = "main.html";
            // next step: transition animation / fake loading screen
        }
    });

});