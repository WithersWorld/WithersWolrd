let shop = `
    <div id="shopWelcome" style="text-align: center;">
                <div class="withers"><b>WithersShop</b></div>
    </div>
    <div id="shopItems">
        
    </div>
`
document.getElementById('shop').innerHTML = shop;
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