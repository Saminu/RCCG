/**
 * Created by simba on 17/01/15.
 */
$(document).ready(function () {

    $("#header").load("/templates/header.html");

    $("#footer").load("/templates/footer.html");


//    var $myCarousel = $("#carousel-example-generic");
//    $myCarousel.on("slide.bs.carousel", function (event) {
//        // Bootstrap carousel marks the current slide (the one we're exiting) with an 'active' class
//        var $currentSlide = $myCarousel.find(".active iframe");
//
//        // exit if there's no iframe, i.e. if this is just an image and not a video player
//        if (!$currentSlide.length) { return; }
//
//        // pass that iframe into Froogaloop, and call api("pause") on it.
//        var player = Froogaloop($currentSlide[0]);
//        player.api("pause");
//
//        if(player.api("pause")){
//            $myCarousel.on("slide.bs.carousel", function (event) {
//                player.api("play");
//            })
//        }
//    });

});

