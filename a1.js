let div1 = document.getElementById('titulogrupo1');

 
for (var k = 1 ; k <= 35; k++) {

	div1.innerHTML += 
    '<div class="imagen"><img alt="" id="img'+k+'" width="100%" /></div>'+
	'<div class="nombregrupo"><a id="a'+k+'" width="auto"> </a></div>';  
 }   
  
 
  
  
var input = document.getElementById("nombre-input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
 
       var data = document.getElementById("nombre-input").value;
 		localStorage.setItem("minombre", data);
      
      //alert ("holasss");
    }
});
  
document.getElementById("nombre-input").value = localStorage.getItem("minombre");  
  
  
document.getElementById("img1").src="img/01.png";  
document.getElementById("a1").href="https://gve123.github.io/w1/g1.html";
document.getElementById("a1").text= "(g1) Diagramas y Circuitos Electrónicos";  
 
document.getElementById("img2").src="img/02.png"
document.getElementById("a2").href="https://gve123.github.io/w1/g2.html";
document.getElementById("a2").text= "(g2) El Mundo de la Electrónica";   
   
document.getElementById("img3").src= "img/03.png";
document.getElementById("a3").href="https://gve123.github.io/w1/g3.html";
document.getElementById("a3").text= "(g3) Electricidad Automotriz"; 

document.getElementById("img4").src= "img/04.png";
document.getElementById("a4").href="https://gve123.github.io/w1/g4.html";
document.getElementById("a4").text= "(g4) Saber Electronica";  
  
document.getElementById("img5").src= "img/05.png";
document.getElementById("a5").href="https://gve123.github.io/w1/g5.html";
document.getElementById("a5").text= "(g5) Aprenda Electricidad Básica Gratis";
  
document.getElementById("img6").src= "img/06.png";
document.getElementById("a6").href="https://gve123.github.io/w1/g6.html";
document.getElementById("a6").text= "(g6) Diagramas y Proyectos Electrónicos";  
  
document.getElementById("img7").src= "img/07.png";
document.getElementById("a7").href="https://gve123.github.io/w1/g7.html";
document.getElementById("a7").text= "(g7) EL MUNDO DE LA ELECTRÓNICA";  
  
document.getElementById("img8").src= "img/08.png";
document.getElementById("a8").href="https://gve123.github.io/w1/g8.html";
document.getElementById("a8").text= "(g8) Electricidad Básica"; 
  
document.getElementById("img9").src= "img/09.png";
document.getElementById("a9").href="https://gve123.github.io/w1/g9.html";
document.getElementById("a9").text= "(g9) Aprendiendo y enseñando electricidad";
  
document.getElementById("img10").src= "img/10.png";
document.getElementById("a10").href="https://gve123.github.io/w1/g10.html";
document.getElementById("a10").text= "(g10) Electricidad Residencial Básica";  
  
document.getElementById("img11").src= "img/11.png";
document.getElementById("a11").href="https://gve123.github.io/w1/g11.html";
document.getElementById("a11").text= "(g11) Electricidad Residencial";  
  
document.getElementById("img12").src= "img/12.png";
document.getElementById("a12").href="https://gve123.github.io/w1/g12.html";
document.getElementById("a12").text= "(g12) Electricidad y Electrónica Automotriz";  
  
document.getElementById("img13").src= "img/13.png";
document.getElementById("a13").href="https://gve123.github.io/w1/g13.html";
document.getElementById("a13").text= "(g13) Electronica Basica";  

document.getElementById("img14").src= "img/14.png";
document.getElementById("a14").href="https://gve123.github.io/w1/g14.html";
document.getElementById("a14").text= "(g14) Inventos y Curiosidades";  
  
document.getElementById("img15").src= "img/15.png";
document.getElementById("a15").href="https://gve123.github.io/w1/g15.html";
document.getElementById("a15").text= "(g15) Grupo Todo Inventos TV, el grupo de TODOS";  
  
document.getElementById("img16").src= "img/16.png";
document.getElementById("a16").href="https://gve123.github.io/w1/g16.html";
document.getElementById("a16").text= "(g16) Reparaciones Caseras";  
  
document.getElementById("img17").src= "img/17.png";
document.getElementById("a17").href="https://gve123.github.io/w1/g17.html";
document.getElementById("a17").text= "(g17) Inventos Caseros con Materiales Reciclados";
  
document.getElementById("img18").src= "img/18.png";
document.getElementById("a18").href="https://gve123.github.io/w1/g18.html";
document.getElementById("a18").text= "(g18) Proyectos de Electronica";  
  
document.getElementById("img19").src= "img/19.png";
document.getElementById("a19").href="https://gve123.github.io/w1/g19.html";
document.getElementById("a19").text= "(g19) Inventos Caseros";   
  
document.getElementById("img20").src= "img/20.png";
document.getElementById("a20").href="https://gve123.github.io/w1/g20.html";
document.getElementById("a20").text= "(g20) Saber Electronica!!!";   
  
document.getElementById("img21").src= "img/21.png";
document.getElementById("a21").href="https://gve123.github.io/w1/g21.html";
document.getElementById("a21").text= "(g21) Reparacion de equipos electricos"; 
  
document.getElementById("img22").src= "img/22.png";
document.getElementById("a22").href="https://gve123.github.io/w1/g22.html";
document.getElementById("a22").text= "(g22) Instalaciones Electricas";   
  
document.getElementById("img23").src= "img/23.png";
document.getElementById("a23").href="https://gve123.github.io/w1/g23.html";
document.getElementById("a23").text= "(g23) Herramientas Caseras";   
  
document.getElementById("img24").src= "img/24.png";
document.getElementById("a24").href="https://gve123.github.io/w1/g24.html";
document.getElementById("a24").text= "(g24) INVENTOS CASEROS Y UTILES IDEAS, compartir ideas y buscar soluciones.."; 
  
document.getElementById("img25").src= "img/25.png";
document.getElementById("a25").href="https://gve123.github.io/w1/g25.html";
document.getElementById("a25").text= "(g25) Tecnicos En Electricidad y Automatización";   
  
document.getElementById("img26").src= "img/26.png";
document.getElementById("a26").href="https://gve123.github.io/w1/g26.html";
document.getElementById("a26").text= "(g26) Electricista alta y baja tensión";   
  
document.getElementById("img27").src= "img/27.png";
document.getElementById("a27").href="https://gve123.github.io/w1/g27.html";
document.getElementById("a27").text= "(g27) EXPERIMENTOS ELECTRONICOS-TRABAJOS TECNICOS Y VENTAS DE INSUMOS";  
  
document.getElementById("img28").src= "img/28.png";
document.getElementById("a28").href="https://gve123.github.io/w1/g28.html";
document.getElementById("a28").text= "(g28) Tecnicos y estudiantes de electricidad,electronica y programacion.";  
  
document.getElementById("img29").src= "img/29.png";
document.getElementById("a29").href="https://gve123.github.io/w1/g29.html";
document.getElementById("a29").text= "(g29) ELECTRICIDAD";    
  
document.getElementById("img30").src= "img/30.png";
document.getElementById("a30").href="https://gve123.github.io/w1/g30.html";
document.getElementById("a30").text= "(g30) Electricidad, Electrónica y Refrigeración.";    
  

document.getElementById("img31").src= "img/31.png";
document.getElementById("a31").href="https://gve123.github.io/w1/g31.html";
document.getElementById("a31").text= "(g31) manuales de Electricidad, electrónica, informática y más"; 
  
  
document.getElementById("img32").src= "img/32.png";
document.getElementById("a32").href="https://gve123.github.io/w1/g32.html";
document.getElementById("a32").text= "(g32) Ingeniería Electrónica";   
  
  
document.getElementById("img33").src= "img/33.png";
document.getElementById("a33").href="https://gve123.github.io/w1/g33.html";
document.getElementById("a33").text= "(g33) Inventos Caseros"; 
  
document.getElementById("img34").src= "img/34.png";
document.getElementById("a34").href="https://gve123.github.io/w1/g34.html";
document.getElementById("a34").text= "(g34) Informaciones eléctricas";   
  
document.getElementById("img35").src= "img/35.png";
document.getElementById("a35").href="https://gve123.github.io/w1/g35.html";
document.getElementById("a35").text= "(g35) Electronica, Diseño, Circuitos y Diagramas";  
