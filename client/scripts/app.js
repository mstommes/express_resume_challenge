$(document).ready(function(){

   $("#button-container").prepend("<button id='slideButton'>Please Click Here</button>");
        $("#button-container").on("click", "#slideButton", function(){
        $("#main-body").slideUp(2000);
        });

        $("#button-container").on("click", "#slideButton", function(){
                $("#main-body").slideDown(3000);
    });
});
