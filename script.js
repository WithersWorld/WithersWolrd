"use strict";
  window.onload = function () {
    lax.init()
    
    

    
    var now = new Date();
    var hours = now.getHours();
    var type = '';
    var ft = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    if (hours >= 5 && hours < 13) {
        type = 'Morning';
    };
    if (hours >= 13 && hours < 17) {
        type = 'Afternoon';
    };
    if (17 <= hours && hours < 21) {
        type = 'Evening';
    };
    if (21 <= hours && hours < 5) {
        type = 'Night';
    };
    document.getElementById("good").innerHTML = `Good ${type}`;


    // Animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    lax.addElements('#findEase', {
        scrollY: {
            translateX: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 'screenWidth/2', 'screenWidth'],
            ]
        }
    })
    
  };
  $(function() {
    $('#notif').slideDown();
    $('#closeNotif').click(function() {
        $('#notif').slideUp();
    });
  });