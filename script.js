$(document).ready(function () {
    //variables
    var clickedTab = $("tabs > .active");
    var tabWrapper = $(".tab-content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);

    $(".tabs > li").on("click", function() {
        // Remove class from active tab
        $(".tabs > li").removeClass("active");

        // Add class active to clicked tab
        $(this).addClass("active");

        // Update clickedTab variable
        clickedTab = $(".tabs .active");

        // fade out active tab
        activeTab.fadeOut(250, function (){
            // Remove active class all tabs
            $(".tab-content > li").removeClass("active");

            // Get index of clicked tab 
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".tab-content > li").eq(clickedTabIndex).addClass("active");

            //update new active tab
            activeTab = $(".tab-content > .active");

            // update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper
                .stop()
                .delay(50)
                .animate({
                    height: activeTabHeight
                },
                500,
                function () {
                    // Fade in active tab
                    activeTab.delay(50).fadeIn(250);
                });
        });
    });

    // Variables 
    var colorButton = $(".colors li");

    colorButton.on("click", function() {
        // Remove class from currently active button
        $(".colors > li").removeClass("active-color");

        // Add class active to clicked button
        $(this).addClass("active-color");

        // Get background color of clicked
        var newColor = $(this).attr("data-color");

        // Change background of everything with class .bg-color
        $(".bg-color").css("background-color", newColor);

        // Change color of everything with class .text-color
        $(".text-color").css("color", newColor);

        // Change background-color of body with class .text-color
        $("body").css("background-color", newColor);
    });
});