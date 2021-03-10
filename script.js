"use strict";
  window.onload = function () {
    lax.init()
    
    function shopItem(name, cost) {
        $('#shopItems').append(`<div class="itemShop"><div class="itemName">`+name+`</div>
                            <div class="itemCost"> Costs: $`+cost+`</div>
                            </div>`);
    }
    shopItem('cookie', 40);
    shopItem('Sweater', 150);
    shopItem('new', 30000);
    shopItem('mmm', 0);
    $('.itemShop').css({'background-color': '#808080',
                        'border': '2px #000000 solid',
                        'padding': '10px',
                        'width': '500px',
                        'height': '400px',
                        'font-size': '60px',
                        'display': 'flex',
                        'align-items': 'center',
                        'flex-direction': 'column'});
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

    if (window.innerWidth < "480") {
        
    }
    

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