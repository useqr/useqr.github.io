var uriD = window.location.href, uriN = uriD.replace(/.+#/,"");
var path = Math.floor(Math.random() * 90 + 10), onepath = Math.floor(Math.random() * 9), fiveDigitNumber = Math.floor(Math.random() * 90000) + 10000;
if (uriD != uriN){window.location="../create/00"+path+"#"+uriN;}
else {
  if (uriD.includes('link/t/-')  == true){window.location=uriD.replace('link/t/-','link/t/'+onepath+'?co=');}else{ 
    if (uriD.includes('link/-')  == true){window.location=uriD.replace('link/-','link/t/'+onepath+'?co=');}else{ 
      if (uriD.includes('link/+')  == true){window.location=uriD.replace('link/+','link/dsq/'+onepath+'?qs=');}else{
        if (uriD.includes('link/%20')  == true){window.location=uriD.replace('link/%20','link/dsq/'+onepath+'?qs=');}else{
          if (uriD.includes('link/bit-')  == true){window.location=uriD.replace('link/bit-','link/b/'+onepath+'?ly=');}else{
            if (uriD.includes('link/v-')  == true){
              var code = uriD.replace(/.+v-/,"").replace("&m=1","").replace('?fbclid=','@').replace('&fbclid=','@').replace(/@.+/,'');
              window.location='//draft.useqr.link/'+fiveDigitNumber+'?id='+Base64.decode(code);}else{
                if (uriD.includes('link/prm-')  == true){window.location=uriD.replace('link/prm-','link/prm/'+onepath+'?id=');}else{
                  document.title="Page has been deleted";
                }
            }
          }
        }
      }
    }
  }
}
