document.addEventListener("DOMContentLoaded", function() {

    //////////////////////////// TINY SLIDER ////////////////////////////
    var slider = tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsText: ['','']
    });
    

    //////////////////////////// ACCORDION ////////////////////////////
    //chech for window width
    var windowWidth = window.innerWidth;
    
    //if it is less then 720 active the accordion
    if(windowWidth < 720){
        
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {

                this.classList.toggle("active");

                var panel = this.children[1];
                // console.log(panel)
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                }
            });
        }
    }

});