
const caras=["./img/DADO1.PNG","./img/DADO2.PNG","./img/DADO3.PNG","./img/DADO4.PNG","./img/DADO5.PNG","./img/DADO6.PNG",]

let dadojugador1 =0;
let dadojugador2 =0;
let contadorjugador1 =0;
let contadorjugador2 =0;
let intentoJugador1=0;
let intentoJugador2=0;
const dadocara1 = document.getElementById("dadouno");
const dadocara2 = document.getElementById("dadodos");
let repit 

function tirar1()
{ let mensaje 
  let quienGana
    var dado1 = Math.floor(Math.random() * 6)+1 ;
    dadocara1.src=caras[dado1-1];
   contadorjugador1=contadorjugador1+dado1
    intentoJugador1=intentoJugador1+1
  
   
     switch (dado1){
         case 1 :{
         contadorjugador1= contadorjugador1-1;
         mensaje= 'sacaste ' + dado1 + ' pierdes turno, llevas ' + contadorjugador1 + ' puntos.';
         break; 
        }  case 3 : {
          contadorjugador1 =0;
          mensaje = "Sacaste " + dado1 + " Se Reinician tus puntos" ;
          break;
        }  default:{
          mensaje= 'sacaste ' + dado1 + ' llevas ' + contadorjugador1 + ' puntos.';
          break;
        }
         }
      document.getElementById('resultado1').innerHTML = mensaje

      if(contadorjugador1==21 && contadorjugador2 !=21 && intentoJugador1<=intentoJugador2 || contadorjugador1<21 && contadorjugador2>21&& intentoJugador1<=intentoJugador2)
      {
       quienGana="Gana Jugador 1" + "   Gana Jugador 1"
      } else{
              if (contadorjugador2==21 && contadorjugador1 !=21 && intentoJugador2<=intentoJugador1 || contadorjugador2<21 && contadorjugador1>21 && intentoJugador2<=intentoJugador1){
              quienGana= "Gana Jugador 2" + "    Gana Jugador 2"
              }
              else {
                quienGana= "Tira Jugador 2"
              }
           }
           document.getElementById('intentoj1').innerHTML = 'Intento # ' +intentoJugador1  
           document.getElementById('ganador').innerHTML = quienGana      }

function tirar2()
{
   let mensaje
    var dado2 = Math.floor(Math.random() * 6)+1 ;
    dadocara2.src=caras[dado2-1];
   contadorjugador2=contadorjugador2+dado2
   intentoJugador2=intentoJugador2+1
 switch (dado2){
      case 1 :{
      contadorjugador2= contadorjugador2-1;
      mensaje= 'sacaste ' + dado2 + ' pierdes turno, llevas ' + contadorjugador2 + ' puntos.';
      break; 
     }  case 3 : {
       contadorjugador2 =0;
       mensaje = "Sacaste " + dado2 + " Se Reinician tus puntos" ;
       break;
     }default:{
       mensaje= 'sacaste ' + dado2 + ' llevas ' + contadorjugador2 + ' puntos.';
       break;
     }
    }
    document.getElementById('resultado2').innerHTML = mensaje
    
    if(contadorjugador1==21 && contadorjugador2 !=21 && intentoJugador1<=intentoJugador2 || contadorjugador1<21 && contadorjugador2>21&& intentoJugador1<=intentoJugador2)
    {
     quienGana="Gana Jugador 1" + "    Gana Jugador 1"
    } else{
            if (contadorjugador2==21 && contadorjugador1 !=21 && intentoJugador2<=intentoJugador1 || contadorjugador2<21 && contadorjugador1>21 && intentoJugador2<=intentoJugador1){
            quienGana= "Gana Jugador 2" + "    Gana Jugador 2"
            }
            else {
              quienGana= "Tira Jugador 1"
            }
         }
         document.getElementById('intentoj2').innerHTML = 'Intento # ' +intentoJugador2
         
         document.getElementById('ganador').innerHTML = quienGana

  }

    function DeNuevo()
    {
   // document.getElementById('denuevo').innerHTML= "De Nuevo"
    contadorjugador1=0
    contadorjugador2=0
    intentoJugador1=0
    intentoJugador2=0
    document.getElementById('ganador').innerHTML = "Juguemos de Nuevo"
    }