$(document).ready(function(){

    var setSlide = true;

    //this adds a slide button to the top of the button div

   $("#button-container").prepend("<button id='slideButton'>Click for Note!</button>");

    $("#button-container").on("click", "#slideButton", function() {
        if (setSlide){
            $('#mainBody').slideUp(3000);
            setSlide=false;

        }else{
            $('#mainBody').slideDown(3000);
            setSlide=true;
        }
       $(".thankyou").show();

    });
});




