const IdCode = window.location.href.replace(/ht.+de=/,"").replace("#","").replace(/\&fbclid.+/,"").toUpperCase();  
const DoHost = window.location.protocol+'//'+window.location.hostname+window.location.pathname;
const apiUrl = `${DoHost}/${IdCode}.json`, resultContainer = document.getElementById("nobat");

function ngonsole(){              
	  $(document).ready(function(){                      				
		$('a[href^="https://"]').each(function(){  			
			var linkdownloads = $(this).attr("href");             
			var enclinkdownloads = Base64.encode(linkdownloads);             
			var enc2linkdownloads = Base64.encode(enclinkdownloads);              			
			$(this).attr("style","margin:auto !important");    
			$(this).attr("href", "#");  		
			$(this).attr("onclick", "window.open('https://watch.idblog.eu.org/p/go.html?m=1&download="+enc2linkdownloads+"');");	
		});                      	
	  });                
} 		
function olahData(dataitem){
 	var isi = dataitem.konten;
	resultContainer.innerHTML = decodeURIComponent(isi); ngonsole();
}
	
$(document).ready(function() {
        $.ajax({
            url: apiUrl, dataType: 'json',
            success: function(dataitem) {olahData(dataitem)},
            error: function(xhr, status, error) {
                window.location=window.location.protocol+'//'+window.location.hostname+'/';
            }
        });
});

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
	  
 var data = `${DoHost}?code=${IdCode}`, mode = 'Auto', ecLevel = 'L', margin = '5', moduleSize = '8', hasEncodingHint = false;
 var qrcode = new QRCode.Encoder();
 var errorCorrectionLevel = QRCode.ErrorCorrectionLevel[ecLevel];
 qrcode.setEncodingHint(hasEncodingHint).setErrorCorrectionLevel(errorCorrectionLevel);
 try {
	var data = mode === 'Auto' ? chooseBestModeData(data) : new QRCode[mode](data);
	qrcode.write(data).make();
	var srcimgQR = qrcode.toDataURL(moduleSize, margin); 
 } catch (error) {
   alert(error.message);
 }	  
var imgQR = '<tr><td><img id="srcQR" class="srcQR" src="'+srcimgQR+'"></img></td></tr>';
function nambah(){
	$('#myTable > tbody').append(imgQR);
} 
$(document).ready(function(){          
	$('table').each(function(){ 
            $(this).attr("id", "myTable"); 
            nambah();  
        }); 
 }); 
