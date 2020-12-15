

//let n=1; 
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 63; k++) {

	div1.innerHTML += 
    '<div class="numero" id="num'+k+'">'+k+'</div>'+
    '<div class="imagen"><img id="img'+k+'" alt="" width="100%" onClick="copy('+k+')"></div>'+
    '<div class="texto" id="txt'+k+'" ></div>'+
    '<div class="cbox"><input class="unpresed" id="checkbox'+n+'#'+k+'" type="checkbox" onClick="clickboton('+k+')"></div>';

 }   
  
  
  

function clickboton(i) { 
    //var cbox = "checkbox"+i;      
    var checkbox = document.getElementById("checkbox"+n+"#"+i);
    localStorage.setItem("checkbox"+n+"#"+i, checkbox.checked);  
  
  
  
  if (document.getElementById("checkbox"+n+"#"+i).checked == true)
  {
    var hoy = new Date();
  	var dia = hoy.getDate();
  	var mes = hoy.getMonth() + 1;
    
    localStorage.setItem("diachecked"+n+"#"+i,dia);
  	localStorage.setItem("meschecked"+n+"#"+i,mes);
    
  	//console.log("diacheckedu"+i+dia);
  }	
  else
  {
  	
  }   
  
 
  
}
  
  
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1;  
  
for (var j = 1; j <= 55; j++) {
  
	var checked = JSON.parse(localStorage.getItem("checkbox"+n+"#"+j));
    if (checked == true)
    {
    	document.getElementById("checkbox"+n+"#"+j).checked = true;

      
  	}
  	else
    {
    
    	document.getElementById("checkbox"+n+"#"+j).checked = false;
    } 
  
  
	if (checked == true)
    {
          

          
        var diachecked = localStorage.getItem('diachecked'+n+'#'+j);
        var meschecked = localStorage.getItem('meschecked'+n+'#'+j);
          
        /*  
    	if (meschecked == mes)
        {
         	if ( (dia - diachecked) > 10)
            {
              	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }  
            
        }
        else if (Math.abs(meschecked-mes)==1)
        {
          	//if ( ( (dia + 31) - diachecked ) > 10)
          	if (((31-diachecked)+dia)>10) 
            {
             	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }             
            
        }
      	else if (Math.abs(meschecked-mes)>1)
	*/
	if (Math.abs(meschecked-mes)>1)	
        {
        	localStorage.setItem("checkbox"+n+"#"+j,false);	
        
        }  
      
      
    		//console.log("dia"+j+"="+localStorage.getItem('diachecked'+n+'#'+j) );
      		//console.log("mes"+j+"="+localStorage.getItem('meschecked'+n+'#'+j) );
    }  
  
  
}

document.getElementById("img1").src= "imgv/1.png"; 
document.getElementById("txt1").innerHTML = "➡✅Como Hacer un Cautin Casero con Transformador‼️😮✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/KyNjEaHtb0c";

   
document.getElementById("img2").src= "imgv/2.png"; 
document.getElementById("txt2").innerHTML = "✅💥Como amplificar la señal de tu celular con simple truco‼️😮<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/vXdWtDFA_cM";
  
document.getElementById("img3").src= "imgv/3.png";
document.getElementById('txt3').innerHTML =	"💥Haz tu propio cautin casero, te puede salvar de un apuro‼️😮💥<br>"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br>"+
												"https://youtu.be/KAjPSyUslL0"; 
  
document.getElementById("img4").src= "imgv/4.png"; 
document.getElementById('txt4').innerHTML =	"✅💥Como evitar que las lamparas parpadeen, aquí te explico!💥💡😮 <br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br>"+
												"https://youtu.be/WWXZUvsZ21M";  
  
  
document.getElementById("img5").src= "imgv/5.png"; 
document.getElementById('txt5').innerHTML =	"🔌💥Como hacer un Cargador de Batería con transformador‼️💥✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/RuRDiat6jTw"; 

document.getElementById("img6").src= "imgv/6.png";
document.getElementById('txt6').innerHTML = "✅Como lograr que un foco LED dure 50 años!‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/9WrYiP8AvEc"; 
  
document.getElementById("img7").src= "imgv/7.png";
document.getElementById('txt7').innerHTML = "✅💥10 cosas que puedes hacer con teléfonos celulares viejos‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/w4hWibJs1Ac";
  
document.getElementById("img8").src= "imgv/8.png";
document.getElementById('txt8').innerHTML = "✅💥Como hacer un Inversor de voltaje de 12v a 120v muy fácil‼️💥<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/D8nhm7_y6PY"; 
  
document.getElementById("img9").src= "imgv/9.png";
document.getElementById('txt9').innerHTML = "✅💥Como Cargar la Batería de tu auto con un foco!‼️💥<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/KW7smfZsS78"; 
  
document.getElementById("img10").src= "imgv/10.png";
document.getElementById('txt10').innerHTML = "✅💥Como Hacer un Control de Temperatura para Cautin‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/q_h6VSfrrTQ";
  
document.getElementById("img11").src= "imgv/11.png";
document.getElementById('txt11').innerHTML =  "✅💥Como hacer un cargador universal de batería de celular‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/C0is4jnWRpQ";
  
document.getElementById("img12").src= "imgv/12.png";
document.getElementById('txt12').innerHTML = "✅💥Como hacer el motor mas simple del mundo‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/eLvZOFccYA0"; 
  
document.getElementById("img13").src= "imgv/13.png";
document.getElementById('txt13').innerHTML = "🔥✅Como encender un foco desde tres lugares diferentes‼️⚡💡👷<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/b5vugs1xYiQ";
  
document.getElementById("img14").src= "imgv/14.png";
document.getElementById('txt14').innerHTML =  "🔥⚠️7 errores en instalaciones eléctricas caseras que debes evitar‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/Lr09BWA6ZaA"; 
  
document.getElementById("img15").src= "imgv/15.png";
document.getElementById('txt15').innerHTML =	"💥✅Como hacer un amplificador wifi para conectar con redes distantes‼️💥😮<br/>"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/H2kFEReckyQ";
  
document.getElementById("img16").src= "imgv/16.png";
document.getElementById('txt16').innerHTML = "💥✅Como hacer una antena wifi super potente‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/sXA460nTMbQ";
  
document.getElementById("img17").src= "imgv/17.png";
document.getElementById('txt17').innerHTML = "💥5 cosas que puedes hacer con un simple foco!💥😁💡🏠<br />"+  
											"💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡<br />"+
											"https://youtu.be/o7ou85UB6YQ";  
  
document.getElementById("img18").src= "imgv/18.png";
document.getElementById('txt18').innerHTML = "💥✅Como convertir un foco LED de 120v a 12v con simple truco‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/eAwwOXcNlBk"; 
  
document.getElementById("img19").src= "imgv/19.png";
document.getElementById('txt19').innerHTML = "👍💥7 errores que debes evitar en instalaciones eléctricas (parte 2)🏠🔌👷<br />"+ 
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/qyKR5j8aw8k";
  
document.getElementById("img20").src= "imgv/20.png";
document.getElementById('txt20').innerHTML = "✅💥Como hacer un estabilizador de voltaje casero🏠🔌👷<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/6NMqQA6pMtg"; 
  
document.getElementById("img21").src= "imgv/21.png";
document.getElementById('txt21').innerHTML =  "✅Como hallar la fase y el neutro en un toma corriente‼️💥😁💡💯<br />"+ 
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/EE0paCB0GCI";
  
document.getElementById("img22").src= "imgv/22.png";
document.getElementById('txt22').innerHTML = "✅💥Como cargar la batería de tu coche con un cargador de portátil‼️💥😁💯<br />"+ 
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/EjKyhsnk3nA";
  
document.getElementById("img23").src= "imgv/23.png";
document.getElementById('txt23').innerHTML ="✅Convierte tu disco duro viejo en una memoria USB de gran capacidad‼️💥😁💯 <br/>"+ 
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+ 
											"https://youtu.be/HarLsyCsXeo";
											
document.getElementById("img24").src= "imgv/24.png";
document.getElementById('txt24').innerHTML = "👉✅Como hacer un encendedor eléctrico para la cocina‼️🔥💯<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/Fv1Y-yiEw2Q";	

document.getElementById("img25").src= "imgv/25.png";
document.getElementById('txt25').innerHTML =	"👉✅Ahorrar dinero haciendo reparaciones en casa‼️💥😁💯 <br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/qp5FqIhDjjc";	
											
document.getElementById("img26").src= "imgv/26.png";
document.getElementById('txt26').innerHTML = "🔌😮Como hacer un probador de fase estilo bolígrafo‼️👍💥💯 <br />"+
										"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
										"https://youtu.be/ZZicbIYAhSM";
											
document.getElementById("img27").src= "imgv/27.png";
document.getElementById('txt27').innerHTML ="✅💥Como hacer una antena wifi de largo alcance fácil en 5 min‼️👍💥💯 <br />"+
										"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
										"https://youtu.be/RAQ6czAUuK8";
											
document.getElementById("img28").src= "imgv/28.png";
document.getElementById('txt28').innerHTML ="✅💥Tutorial básico sobre resistencias y capacitores‼️😁💥💯 <br />"+
										"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
										"https://youtu.be/vJnGSqnFgvw";	
											
document.getElementById("img29").src= "imgv/29.png" ;
document.getElementById('txt29').innerHTML ="✅💥Tutorial de electrónica Inductores y diodos‼️😁💥💯 <br />"+
										"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
										"https://youtu.be/vJnGSqnFgvw";	
											
document.getElementById("img30").src= "imgv/30.png";
document.getElementById('txt30').innerHTML ="🔌😮✅Por que se dañan los cargadores en el mismo lugar‼️💥💯 <br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/TMqpT68rRfA";	
											
document.getElementById("img31").src= "imgv/31.png";
document.getElementById('txt31').innerHTML ="🔌😮✅Como reparar cargador de celular fácil y gratis‼️💥💯😁<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/4Pzwuz5PH7Y";

document.getElementById("img32").src= "imgv/32.png";
document.getElementById('txt32').innerHTML = 	"✅🔌Como hacer empalmes eléctricos de la forma correcta‼️✌️🔧😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/PNxH9dE9f98";

document.getElementById("img33").src= "imgv/33.png";
document.getElementById('txt33').innerHTML = 	"😮✅Mira que pasa si conecto una memoria usb a un cargador de celular‼️💥💯😁<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://youtu.be/lnU4vIEe9Qs";
											
document.getElementById("img34").src= "imgv/34.png";
document.getElementById('txt34').innerHTML =	"😮✅El secreto que esconden los focos LED! Aquí te explico‼️💥💯😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/Mq2XMpIEzIg";
											
document.getElementById("img35").src= "imgv/35.png";
document.getElementById('txt35').innerHTML = 	"😮✅Como hacer un panel solar casero (parte II)‼️💥💯😁<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://youtu.be/HPq6rYuP5v4";
											
document.getElementById("img36").src= "imgv/36.png";
document.getElementById('txt36').innerHTML =	"✅🔌Tutorial fuentes conmutadas Switching Power Suply‼️✌️😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/Tqhh2-jZkWg";
											
document.getElementById("img37").src= "imgv/37.png";
document.getElementById('txt37').innerHTML =	"✅Reparación DVD no lee disco solución muy fácil‼️⚠️💥💯 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://youtu.be/8WvdzlkESf4";
											
document.getElementById("img38").src= "imgv/38.png";
document.getElementById('txt38').innerHTML = 	"✅Como cargar la batería de tu auto en tu casa Muy fácil de hacer‼️🔌💡😮<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/wM9w7pQPxI8";
	
											
document.getElementById("img39").src= "imgv/39.png";
document.getElementById('txt39').innerHTML = 	"💥✅Como eliminar parpadeo de los focos LED 💡 con simple truco‼️💥😊<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://youtu.be/lR893qNCk8Q";

document.getElementById("img40").src= "imgv/40.png";
document.getElementById('txt40').innerHTML =	"💥✅Como hacer un cargador de baterías con una fuente de PC antigua‼️💥😊<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/qLfsMqewlnI";											

document.getElementById("img41").src= "imgv/41.png";
document.getElementById('txt41').innerHTML =	"✅💡Ahorra dinero con este invento, batería Infinita!‼️👀😊 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/jxYyIS8DOlQ";											
											
document.getElementById("img42").src= "imgv/42.png";
document.getElementById('txt42').innerHTML = 	"✅👉Como reconocer los cables de cualquier transformador con simple truco‼️😊💯 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/jPK6XDBZQec";												
											
document.getElementById("img43").src= "imgv/43.png";
document.getElementById('txt43').innerHTML =	"✅👉Que pasa si acerco un imán a un disco duro de una portatil?😮🔥👀 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/kmUKZo2UHeY";											
											
document.getElementById("img44").src= "imgv/44.png";
document.getElementById('txt44').innerHTML =	"💥✅6 trucos para evitar que se dañen sus equipos electrónicos!‼️😮🔥👀 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/TMqpT68rRfA";											
											
document.getElementById("img45").src= "imgv/45.png";
document.getElementById('txt45').innerHTML =	"💥✅Como hacer un control de iluminaciòn con ajuste fino‼️😊💯 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/qvCW94dLe-g";										
											
											
document.getElementById("img46").src= "imgv/46.png";
document.getElementById('txt46').innerHTML =	"💥Como reparar cualquier cargador de celular con simple truco‼️😮✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/qOtZLY2SZgs";										
											
											
document.getElementById("img47").src= "imgv/47.png";
document.getElementById('txt47').innerHTML = 	"💥✅Como detectar cables rotos con este ingenioso invento‼️😮✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/VoZHfZdVqxE";


document.getElementById("img48").src= "imgv/48.png";
document.getElementById('txt48').innerHTML =	"💥✅Como hacer un amplificador de audio super potente 📣 para tu celular‼️😊💯 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/fmokH7SOuhQ";										
											

document.getElementById("img49").src= "imgv/49.png";
document.getElementById('txt49').innerHTML =	"💥Como modificar salida de voltaje de un cargador de celular‼️✅😮 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/UGS3tjaMkUc";									
											
											
document.getElementById("img50").src= "imgv/50.png";
document.getElementById('txt50').innerHTML = 	"💥Que pasa si conectas positivo con negativo por error‼️👀✅😮 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/slWJZZQApl8";											
											
											
document.getElementById("img51").src= "imgv/51.png";
document.getElementById('txt51').innerHTML =	"💥Increíble truco para cambiar circuitos integrados de montaje superficial!‼️😊💯✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/uJZgPFTZpAo";										
											
											
document.getElementById("img52").src= "imgv/52.png";
document.getElementById('txt52').innerHTML =	"💥Ahorra dinero con este invento Batería infinita (parte 2)‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/zC7k2FLgfOI";										
											
											
document.getElementById("img53").src= "imgv/53.png";
document.getElementById('txt53').innerHTML =	"✅💥7 errores que acortan la vida de tu móvil‼️😮💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/gIHMKUEZU6g";								
											
											
document.getElementById("img54").src= "imgv/54.png";
document.getElementById('txt54').innerHTML =	"✅💥Tutorial Electrónica básica TRANSISTORES‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/lN0AfX0XI8s";									
											
											
document.getElementById("img55").src= "imgv/55.png";
document.getElementById('txt55').innerHTML = 	"✅💥Tutorial electrónica básica REGULADORES‼️😊💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=730213121049943";
												
												
												
document.getElementById("img56").src= "imgv/56.png";
document.getElementById('txt56').innerHTML = 	"✅💥Como hacer una antena HD Tv digital Fácil y barato‼️😊💥💯✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/z1oSYepV1_g";


document.getElementById("img57").src= "imgv/57.png";
document.getElementById('txt57').innerHTML = 	"✅💥Cómo detectar cables cortados con este invento (parte 2) ‼️😊💯✅ <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=273690620456183";


document.getElementById("img58").src= "imgv/58.png";
document.getElementById('txt58').innerHTML = 	"💥Como Hacer una Celda Solar Casera con materiales reciclados‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/lH-FLc8yI4Y";	


document.getElementById("img59").src= "imgv/59.png";
document.getElementById('txt59').innerHTML = 	"✅💡Aprende a reparar focos ahorradores con este vídeo‼️😊💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/zXa3ASK-I4g";	


document.getElementById("img60").src= "imgv/60.png";
document.getElementById('txt60').innerHTML = 	"✅Como cargar un celular con una batería de 9v‼️😊💯💥✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/3tS-5h-MObo";	


document.getElementById("img61").src= "imgv/61.png";
document.getElementById('txt61').innerHTML = 	"💥Como recargar Celular con pin de carga dañado‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/XeL1Xw1mTjU";	


document.getElementById("img62").src= "imgv/62.png";
document.getElementById('txt62').innerHTML = 	"✅💥10 errores de electricidad residencial que debes evitar‼️🔌😮🔥✅ <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/nJnAfoNvmHE";	

												
document.getElementById("img63").src= "imgv/63.png";
document.getElementById('txt63').innerHTML = 	"✅💥Como lograr que los focos LED nunca se dañen‼️🔌😮💥✅<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/tZ7oN47uC3o";

							
document.getElementById("img63").src= "imgv/63.png";
document.getElementById('txt63').innerHTML = 													






												
												


									
function copy(i) {	
	
var ACopiar = document.getElementById('txt'+i);
var seleccion = document.createRange();
seleccion.selectNodeContents(ACopiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);	
alert("Texto copiado video "+i);
}