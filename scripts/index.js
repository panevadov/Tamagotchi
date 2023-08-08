var hambre = 100;
var sueño = 100;
var educacion = 100;
var diversion = 100;
Loop();

function Loop(){
    var total = hambre + sueño + educacion + diversion;

    if(hambre <=0 || sueño <=0 || educacion <=0 || diversion <=0){
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

    // hambre = hambre - parseInt(time);
    // sueño = sueño - parseInt(time);
    // educacion = educacion - parseInt(time);
    // diversion = diversion - parseInt(time);

    document.getElementById('hambre').innerHTML = hambre + '%';
    document.getElementById('sueño').innerHTML = sueño + '%';
    document.getElementById('educacion').innerHTML = educacion + '%';
    document.getElementById('diversion').innerHTML = diversion + '%';

}

function Start(){
    var temporizador = setInterval(Loop, 1000);
}

function Comer(){
    if(hambre > 0)
    {
        hambre = hambre - 10;
        document.getElementById('hambre').innerHTML = hambre + '%'
        document.getElementById('hambre').style.width = hambre + 'px';
    }
    Loop();
}

function Dormir(){
    if(sueño > 0)
    {
        sueño = sueño - 10;
        document.getElementById('sueño').innerHTML = sueño + '%'
        document.getElementById('sueño').style.width = sueño + 'px';
    }
    Loop();
}

function Estudiar(){
    if(educacion > 0)
    {
        educacion = educacion - 10;
        document.getElementById('educacion').innerHTML = educacion + '%'
        document.getElementById('educacion').style.width = educacion + 'px';
    }
    Loop();
}

function Diversion(){
    if(diversion > 0)
    {
        diversion = diversion - 10;
        document.getElementById('diversion').innerHTML = diversion + '%'
        document.getElementById('diversion').style.width = diversion + 'px';
    }
    Loop();
}