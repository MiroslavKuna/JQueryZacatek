const placeholder = document.getElementById('placeholder');
let table = document.getElementById('table');
$.get('https://api.coingecko.com/api/v3/ping', function(data) {

    if (data.gecko_says == "(V3) To the Moon!") {
        console.log("Coingecko API is up and running!");
        $(table).css("display", "block");
    }
    else {
        console.log("Coingecko API is down!");
        $(placeholder).html("Coingecko API is down!");
        $(placeholder).css("color", "red");


        $(placeholder).after("<br> <button class='button'>Refresh</button>");
        $("#refresh").click(function() {
            location.reload();
        });
    }
});

