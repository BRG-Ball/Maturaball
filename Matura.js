function warning(){
	document.getElementById("hinter").innerHTML=document.getElementById("hinter").innerHTML + "<div id='alert' class='alert'><p class='n_text'>Diese Website ist noch nicht vollendet, weswegen jeglicher Inhalt weder von dem Maturaball Komitee befürwortet wird noch ihrer Meinung entspricht</p>"+
	"<br><br><p class='n_text'> Schreibe "+'"'+"Ich habe verstanden"+'"'+ " um dieses Fenster zu schließen</p><br>"+
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

function test(){
if (window.innerWidth>=window.innerHeight){
$(".follow").css({
 	top:"0px",
	position:"absolute",
	left: (window.innerWidth-(window.innerHeight*0.97))/2+"px",
	height:"100vh",
  });
}
else{
$(".follow").css({
 	top:"0px",
	position:"absolute",
	left:"0px",
	height:"100vw",
  });
}
}
 setTimeout(warning, 1)
 setInterval(test,1)
