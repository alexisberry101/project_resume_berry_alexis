$(document).ready(function() {

    $.backstretch("img/resumebackground.jpg");
    var $easyzoom = $('.easyzoom').easyZoom();
});

//To count clicks on my heading div including my name, email and phone number together
$(document).ready(function() {

$( '#heading' ).on('click', function() {
  console.log('welcome to my resume site');
});
});
