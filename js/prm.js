!function(){function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date);var n=document.createElement("script");n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=G-G4QKJ6KM3L",n.onload=function(){a("config","G-G4QKJ6KM3L")},document.head.appendChild(n)}();

var TEST_NUMERIC = /^\d+$/, TEST_ALPHANUMERIC = /^[0-9A-Z$%*+-./: ]+$/;
function chooseBestModeData(data) {
   if (TEST_NUMERIC.test(data)) { return new QRCode.QRNumeric(data); } else if (TEST_ALPHANUMERIC.test(data)) { return new QRCode.QRAlphanumeric(data); }
   try { return new QRCode.QRKanji(data); } catch (error) { return new QRCode.QRByte(data); }
}
	    
	var urlasli = window.location.href.replace('?fbclid=','@').replace(/@.+/,'');
	var kosong = urlasli.replace(/id?=.+/,"id?="); if (urlasli == kosong) {window.location="/404"}
	var takde = kosong.replace('id?=',''); if (urlasli == takde) {window.location="/404"}
	var akh = urlasli.slice(-1); if (akh == "-") {window.location="/404"}
	var dataUrl = urlasli.replace(/.+id?=/,"").split("-");
	console.log(dataUrl);
	var posts = '';   
	for (var i = 0; i < dataUrl.length; i++) {   
	var tcoUrl = 'https://drive.google.com/file/d/'+Base64.decode(dataUrl[i])+'/view';

 var data = tcoUrl;
 var mode = 'Auto'; var ecLevel = 'L'; var margin = '5'; var moduleSize = '8'; var hasEncodingHint = false;
 var qrcode = new QRCode.Encoder();
 var errorCorrectionLevel = QRCode.ErrorCorrectionLevel[ecLevel];
 qrcode.setEncodingHint(hasEncodingHint).setErrorCorrectionLevel(errorCorrectionLevel);
 try {
	var data = mode === 'Auto' ? chooseBestModeData(data) : new QRCode[mode](data);
	qrcode.write(data).make();
	var srcimgQR = qrcode.toDataURL(moduleSize, margin); //console.log(srcimgQR);
 } catch (error) { alert(error.message); }	  
 var imgQR = '<img id="srcQR" class="srcQR" src="'+srcimgQR+'"></img>';
	
	var hasil  = '<tr><td>'+imgQR+'</td><td>Link '+(i+1)+' <a href="'+tcoUrl+'">OPEN LINK</a></td></tr>';	
	posts += hasil;	
	}
	var postresult = '<table class="tableresult">'+posts+'</table>';
	if (urlasli != takde) {
	document.getElementById('post').innerHTML = postresult;
	} else {window.location="/404";}
