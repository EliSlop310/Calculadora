window.onload = function(){ //Acciones tras cargar la página
   
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.
num=0;

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
         
         if (x=="0" || xi==1  ) {	// inicializar un número, 
            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
             
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            
            xi=0 //el número está iniciado y podemos ampliarlo.

         }
function convertir(b){
num=x;
    if(b=='1'){
        num=num.toString(2); 
        pantalla.innerHTML=num;
        num=x;            
    }
    if(b=='2'){
       num=num.toString(8);
        pantalla.innerHTML=num;
        num=x;
                                 
    }
    if(b=='3'){
        num=num.toString(16);
        pantalla.innerHTML=num;
        num=x;             
    }
    
}



function operar(s) {
         igualar() //si hay operaciones pendientes se realizan primero
         ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }	
function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número	
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            
             pantalla.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        } 
function raizc() {
         x=Math.sqrt(x) //resolver raíz cuadrada.
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }
function logaritmoNatural(){
     x=Math.log(x);
     pantalla.innerHTML=x;
     op="no";
      xi=1;
}
function logaritmo(){
     x=Math.log(x)/Math.LN10;
     pantalla.innerHTML=x;
     op="no";
      xi=1;
}
function DeRadaGra(x){
    x=(x*180)/Math.PI;    
    return x;
}
function coseno(){
DeRadaGra(x);    
 x=Math.cos(x);
    pantalla.innerHTML=x;
     op="no";
      xi=1;    
}
function antilog(){
    x=Math.pow(10,x);
    pantalla.innerHTML=x;
     op="no";
      xi=1;  
}
function Arcocos(){
 DeRadaGra(x);    
 x=Math.acos(x);
    pantalla.innerHTML=x;
     op="no";
      xi=1;   
}
function seno(){
DeRadaGra(x);       
x=Math.sin(x);    
 pantalla.innerHTML=x;
     op="no";
      xi=1;    
}
function Arcosen(){
 DeRadaGra(x);       
x=Math.asin(x);    
 pantalla.innerHTML=x;
     op="no";
      xi=1;   
}
function tangente(){
DeRadaGra(x);       
    x=Math.tan(x);
   pantalla.innerHTML=x;
     op="no";
      xi=1;  
}
function Arcotan(){
DeRadaGra(x);       
    x=Math.atan(x);
   pantalla.innerHTML=x;
     op="no";
      xi=1;     
}
function pi(){
 var a="";
 var e=Math.PI;
 a=e+"";
return a;    
}
function factorial(){
    var f=1;
    	for(var i=1; i<=x; i++){
            f=f*i;
        }
    pantalla.innerHTML=f;
     op="no";
      xi=1;   
}
function alcuadrado(){
    x=Math.pow(x,2);
    pantalla.innerHTML=x;
      xi=1; 
}
function alogneperiano(){
    x=Math.pow(Math.E,x);
     pantalla.innerHTML=x;
     op="no";
      xi=1;
}
function potencia(){
    var a=0;
    a=prompt("Introduce la potencia"); 
    x=Math.pow(x,a);
    pantalla.innerHTML=x;
    op="no";
    xi=1;

} 
function raizvaria(){
    var a=0;
    a=prompt("Introduce la potencia"); 
    x=Math.sqrt(x,a); 
    pantalla.innerHTML=x;
    op="no";
    xi=1;
}
function porcent() { 
         x=x/100 //dividir por 100 el número
         pantalla.innerHTML=x; //mostrar en pantalla
         igualar() //resolver y mostrar operaciones pendientes
         xi=1 //reiniciar la pantalla
         }
function opuest() { 
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x; //mostrar en pantalla.
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);		 
         pantalla.innerHTML=x;
         xi=1; //reiniciar pantalla al pulsar otro número.
         }

function retro(){ //Borrar sólo el último número escrito.
         cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras) //describir último caracter
         x=x.substr(0,cifras-1) //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
         pantalla.innerHTML=x; //mostrar resultado en pantalla	 
         }
function borradoParcial() {
        pantalla.innerHTML=0; //Borrado de pantalla;
        x=0; //Borrado indicador número pantalla.
        coma=0;	//reiniciamos también la coma				
        }
function borradoTotal() {
         pantalla.innerHTML=0; //poner pantalla a 0
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal 
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
         }