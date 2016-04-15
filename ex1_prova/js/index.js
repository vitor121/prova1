
var diceRoolContent = [
    '<p id="um">&bull;</p>',
    '<p id="dois">&bull; &nbsp; &bull;</p>',
    '<p id="tres">&bull; &bull; &bull;</p>',
    '<p id="quatro">&bull;&nbsp; &bull;</p><p id="quatro">&bull;&nbsp; &bull;</p>',
    '<p id="cinco">&bull;&nbsp; &bull;</p><p id="cinco" class="container">&bull;</p><p id="cinco">&bull;&nbsp; &bull;</p>',
    '<p id="seis">&bull;&nbsp; &bull;</p><p id="seis">&bull;&nbsp; &bull;</p><p id="seis">&bull;&nbsp; &bull;</p>'
];


function rollDado(){
    var number = Math.floor((Math.random() * 6)); 
    rollodado(); 
    console.log(number); 
    var el = document.getElementById("dado"); 
    el.innerHTML = diceRoolContent[number]; 
}


function rollodado() {
    for (var i = 0; i < 20; i++) {
        var listOfNumbers = Math.floor((Math.random() * 6));


        setTimeout( function(){''
            var element = document.getElementById("dado");
            element.innerHTML = diceRoolContent[listOfNumbers];
        }, (700)); 

        }
}