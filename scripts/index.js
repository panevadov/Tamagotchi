var hambre = 100;
var sueño = 100;
var educacion = 100;
var diversion = 100;

function loop(time = 2){
    var total = hambre + sueño + educacion + diversion;

    if(hambre <=0 || sueño <=0 || educacion <=0 || diversion <=0){
        document.getElementById('pet').src="images/florkMuere.jpg";
        document.getElementById('pet').innerHTML = 'Mataste a Flork, refresca la página'
    }
}