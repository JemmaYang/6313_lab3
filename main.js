var count = 0;

var foods = ['sushi', 'burger','salad','chicken','cake','fish','coffee','drinks'];
var calorieAmount = [100, 500,100,700,700,400,200,200];
var energyAmount = [200, 200,150,300,200,300,50,30];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//Variables modified by decisions made by the interactor
function drop02(ev) {   
    if (count <= 1) {
        count=count+1;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var pos = foods.indexOf(data);

        calorie +=calorieAmount[pos];
        energy = energy + energyAmount[pos];
        
        // visible variables
        document.getElementById("calorie").innerHTML = "Calorie: "+ calorie +".";
        document.getElementById("energy").innerHTML = "Energy: " + energy +".";

    }
    else{
       alert("You can only choose two foods!");
    }
    
}


