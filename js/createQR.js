var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

var TEST_NUMERIC = /^\d+$/;
 var TEST_ALPHANUMERIC = /^[0-9A-Z$%*+-./: ]+$/;
 
 function chooseBestModeData(data) {
   if (TEST_NUMERIC.test(data)) {
		return new QRCode.QRNumeric(data);
   } else if (TEST_ALPHANUMERIC.test(data)) {
		return new QRCode.QRAlphanumeric(data);
   }

   try {
		return new QRCode.QRKanji(data);
   } catch (error) {
		return new QRCode.QRByte(data);
   }
 }
	  
 var datamentah = window.location.href.replace(/.+#/,""), olahandata = Base64.decode(Base64.decode(datamentah)), data = olahandata.replace("www.movieluck.ml","watch.idblog.eu.org").replace("p/stream","index");
 //var mode = encodeMode.val();
 var mode = 'Auto';
 //var ecLevel = encodeECLevel.val();
 var ecLevel = 'L';
 //var margin = Number(encodeMargin.val());
 var margin = '5';
 //var moduleSize = Number(encodeMSize.val());
 var moduleSize = '8';
 //var hasEncodingHint = encodingHint.prop('checked');
 var hasEncodingHint = false;

 var qrcode = new QRCode.Encoder();
 var errorCorrectionLevel = QRCode.ErrorCorrectionLevel[ecLevel];

 qrcode.setEncodingHint(hasEncodingHint).setErrorCorrectionLevel(errorCorrectionLevel);

 try {
	var data = mode === 'Auto' ? chooseBestModeData(data) : new QRCode[mode](data);

	qrcode.write(data).make();

	var srcimgQR = qrcode.toDataURL(moduleSize, margin); //console.log(srcimgQR);
   
 } catch (error) {
   alert(error.message);
 }	  

var imgQR = '<tr><td><img id="srcQR" class="srcQR" src="'+srcimgQR+'"></img></td></tr>'+
	    '<tr><td><a href="'+srcimgQR+'" download>Download QR Code</a></td></tr>';

function nambah(){
	$('#myTable > tbody').append(imgQR);
} 

$(document).ready(function(){          
	$('table').each(function(){ 
            $(this).attr("id", "myTable"); 
            nambah();  
        }); 
 }); 
