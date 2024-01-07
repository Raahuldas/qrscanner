var btn = document.getElementsByTagName('button')[0];
var img = document.getElementById('img');
var text = document.getElementsByClassName('text')[0];
var txt = document.getElementById('txt');
var qrimg = document.getElementById('qrimg');
//var res;

var url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function qr() {
	if (txt.value.length >0) {
	img.style.width = "150px";
	img.style.height ="150px";
	//img.style.border = "2px solid black";
	img.style.margin = "auto";

	text.style.marginTop ="5%";
	text.style.marginBottom = "5%";

	btn.style.marginTop ="5%";

	//res=url+txt.value;
	//console.log(res);
	//img.style.backgroundImage="url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=')";
	//img.style.backgroundSize = "100%";
	//img.style.backgroundImage="url('+res+')";

	qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +txt.value;
	qrimg.setAttribute("alt","unable to load image. internet is disconnected")
	}
}