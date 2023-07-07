var userNameTwitter = "dniihen",
    userNameTelegram = "blogmeat2";

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
  
  if(/^\?fbclid=/.test(location.search))
     location.replace(location.href.replace(/\?fbclid.+#/, "#"));

var awal = Math.floor(Math.random() * 5);
var sekend = Math.floor(Math.random() * 5);
let akhiran = awal + sekend;
$(document).ready(function(){
    $('input[id^="konfirmasi"]').each(function(){  $(this).attr("placeholder", ' '+awal+' + '+sekend+' =');  });
    $('div[id^="pertanyaan"]').each(function(){  
        document.getElementById("pertanyaan").innerHTML=' '+awal+' + '+sekend+' =';
    });
});    

  var uriD = window.location.href;
  var uriS = uriD.replace("?m=1","");
  var uriN = uriS.replace(/http.+#/,"");
  var UriX = Base64.decode(uriN);
  var UriZ = Base64.decode(UriX).replace("www.movieluck.ml","watch.idblog.eu.org").replace("p/stream","index");

function myFunction() {   
  var hiburanDnya = '<iframe class="embed-responsive-item" src="';
  var hiburanBnya = '" width="100%" height="700" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe>';
  var fblik = '<a href="https://t.me/s/'+userNameTelegram+'"><button style="width:100%;text-align:center;height:50px">Gabung dan dapatkan notif update via telegram</button></a><br />';
  var konf = document.getElementById("konfirmasi").value;
  var Lasli = '<div style="width:100%;overflow:scroll">Jika video lama dimuat, gunakan tautan ini: <a href="'+UriZ+'" rel="nofollow">'+UriZ+'</a></div>'+
      '<style>body{margin:0px !important}</style>';
      if (konf == akhiran)  {   
        document.cookie = "username=Lulus";
       var doctit = '<scr' + 'ipt>document.title = "Selamat Nonton ^_^";</scr' + 'ipt>';
       document.write(hiburanDnya+UriZ+hiburanBnya+fblik+Lasli+doctit);
      }
      else {
       alert('Akses Ditolak'); window.location="https://twitter.com/"+userNameTwitter;  return false; 
      }
     if (uriS == uriN) {window.location="https://twitter.com/"+userNameTwitter; }
}

// Lulus Ujian Matematika
if (document.cookie.length != 0) {
    var array = document.cookie.split("=");
    var peserta = array[1];
    var ujian = encodeURIComponent(peserta).replace(/%3B.+/,"");
    if(ujian=="Lulus"){
        alert("Anda Sudah Lulus Ujian Matematika");
        window.location=UriZ;
    }
}
