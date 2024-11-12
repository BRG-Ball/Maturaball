var num = 3
function warning(){
	document.getElementById("hinter").innerHTML=document.getElementById("hinter").innerHTML + "<div id='alert' class='alert'><p class='f_text'>Diese Website ist noch nicht vollendet, weswegen jeglicher Inhalt weder von dem Maturaball Komitee befürwortet wird noch ihrer Meinung entspricht</p>"+
	"<br><br><p class='f_text'> Schreibe "+'"'+"Ich habe verstanden"+'"'+ " um dieses Fenster zu schließen</p><br>"+
	"<input type='text' id='verstanden' class=''><br><br><input type='submit'value='Fertig' onclick='check_v()'></div> <div class='hintergrund' id='hintergrund'></div>"
}
function check_v(){
	if (document.getElementById("verstanden").value =="Ich habe verstanden" || document.getElementById("verstanden").value =="ich habe verstanden" || document.getElementById("verstanden").value =="Ich habe verstanden "|| document.getElementById("verstanden").value =="ich habe verstanden "){
		document.getElementById("alert").remove()
		document.getElementById("hintergrund").remove()
	}
	else{
	$(document).ready(function() {
		$('#verstanden').addClass('falsch')
	});
	}
}

function resize(){
if (window.innerWidth>=window.innerHeight){ //check for phone
$(".follow").css({
 	top:"0px",
	position:"absolute",
	left: (window.innerWidth-(window.innerHeight*0.97))/2+"px",
	height:"100vh",
  });
}
else{
$(".follow").css({
 	top:(window.innerHeight-window.innerWidth)/2+"px",
	position:"absolute",
	left:"0px",
	height:"100vw",
  });
}
  $(".tabs").css({
  "font-size":"20px",
  width: ($("#tabs_SCP").innerWidth()-4*num)/num+"px",
  "min-height":"22px",
   border: "2px black solid",
  display: "inline-block",
overflow:"none"
  });
}
 setTimeout(warning, 1)
 setInterval(resize,1)
function skip(){
document.getElementById("alert").remove()
		document.getElementById("hintergrund").remove()
}
