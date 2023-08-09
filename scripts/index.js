var hambre = 20;
var sueño = 20;
var educacion = 20;
var diversion = 20;
Loop();

function Loop(){
    var total = hambre + sueño + educacion + diversion;

    if(total ==0){
        document.getElementById('pet').src="images/FlorkFeliz.png";
    }else if(total>=400){
        document.getElementById('pet').src="images/florkMuere.jpg";
        document.getElementById('pet').innerHTML = 'Mataste a Flork, refresca la página'
    }else if(total>300){
        document.getElementById('pet').src="images/FlorkAntesDeMorir.jpg";
    }else if(total>200){
        document.getElementById('pet').src="images/FlorkMedioMolesto.png";
    }else if(total>100){
        document.getElementById('pet').src="images/FlorkCasiEnojado.jpg";
    }else if(total>0){
        document.getElementById('pet').src="images/FlorkCasiFeliz.png";
    }

    document.getElementById('hambre').innerHTML = hambre + '%';
    document.getElementById('hambre').style.width = hambre + 'px';
    document.getElementById('sueño').innerHTML = sueño + '%';
    document.getElementById('sueño').style.width = sueño + 'px';
    document.getElementById('educacion').innerHTML = educacion + '%';
    document.getElementById('educacion').style.width = educacion + 'px';
    document.getElementById('diversion').innerHTML = diversion + '%';
    document.getElementById('diversion').style.width = diversion + 'px';

}

function Start(){
    var temporizador = setInterval(Loop, 1000);
}

function Comer(){
    if(hambre > 0)
    {
        hambre = hambre - 10;
    }
    Loop();
}

function Dormir(){
    if(sueño > 0)
    {
        sueño = sueño - 10;
    }
    Loop();
}

function Estudiar(){
    if(educacion > 0)
    {
        educacion = educacion - 10;
    }
    Loop();
}

function Diversion(){
    if(diversion > 0)
    {
        diversion = diversion - 10;
    }
    Loop();
}


function NoComer(){
    if(hambre < 100)
    {
        hambre = hambre + 10;
    }
    Loop();
}

function NoDormir(){
    if(sueño < 100)
    {
        sueño = sueño + 10;
    }
    Loop();
}

function NoEstudiar(){
    if(educacion < 100)
    {
        educacion = educacion + 10;
    }
    Loop();
}

function NoDiversion(){
    if(diversion < 100)
    {
        diversion = diversion + 10;
    }
    Loop();
}


// Hacer esto en su lugar
setInterval(function() {
    AumentarParametros();
 }, 5000);

function AumentarParametros(){
    console.log('Aumento parámetros');
    NoComer();
    NoDormir();
    NoEstudiar();
    NoDiversion();
}