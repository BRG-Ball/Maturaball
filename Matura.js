var num = 2
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
 	bottom:"0px",
	position:"absolute",
	left: (window.innerWidth-window.innerHeight)/2+"px",
	height:"100%",
  });
}
else{
$(".follow").css({
 	bottom:"0px",
	position:"absolute",
	left:"0px",
	height:"100vw",
  });
}
  $(".tabs").css({
  width: ($("#tabs_SCP").innerWidth()-4*num)/num-1+"px",
  "min-height":"22px",
   border: "2px black solid",
  display: "inline-block",
  });
   $(".contain").css({
	"position":"relative",
	"height":$("#Info").innerHeight()+$("#fot").innerHeight()+"px",
  });
     $(".fot").css({
	 "text-align": "center",
 "padding": "3px",
  "background-color": "DarkSalmon",
  "color": "white",
  "position":"relative",
  "top":$("#Info").innerHeight()+"px",
  });
 }
 /* setTimeout(warning, 1) */
 setInterval(resize,1)
function skip(){
document.getElementById("alert").remove()
		document.getElementById("hintergrund").remove()
}
function m_Info(){
var x = $("#moveable").position();
console.log(x)
console.log("tets")
	$.keyframe.define([{
	  name: 'schieben_info',
	'0%': {'left': x.left},
	 '100%':{'left':'0%'}
}]);
$("#moveable").removeAttr("class")
$("#moveable").addClass("schieben_info")
}	

function m_Geld(){
var x = $("#moveable").position();
console.log(x)
console.log("tets")
	$.keyframe.define([{
	  name: 'schieben_Geld',
	'0%': {'left': x.left},
	 '100%':{'left':'-100%'}
}]);
$("#moveable").removeAttr("class")
$("#moveable").addClass("schieben_Geld")	
}
