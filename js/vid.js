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
	var tcoUrl = 'https://watch.idblog.eu.org/v5/?code='+Base64.decode(dataUrl[i]);

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

$('#post-top').append('<scr'+'ipt>'+
decodeURIComponent(`(function(jzcsi)%7B%0Avar%20d%20%3D%20document%2C%0A%20%20%20%20s%20%3D%20d.createElement('script')%2C%0A%20%20%20%20l%20%3D%20d.scripts%5Bd.scripts.length%20-%201%5D%3B%0As.settings%20%3D%20jzcsi%20%7C%7C%20%7B%7D%3B%0As.src%20%3D%20%22%5C%2F%5C%2Fpeskycrash.com%5C%2Fb.XoVzs%5C%2Fd%5C%2FGPld0%5C%2FYSWRdOikYjWw5KuVZjXgIT%5C%2FueRmN9kuwZhULlik%5C%2FPlTdUTxNNZzQMT5%5C%2FNRjxgWt_NpTSEQ3cMOzfkz2oO%5C%2FQL%22%3B%0As.async%20%3D%20true%3B%0Al.parentNode.insertBefore(s%2C%20l)%3B%0A%7D)(%7B%7D)`)+
'</scr'+'ipt>');
