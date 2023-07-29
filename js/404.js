var uriD = window.location.href, uriN = uriD.replace(/.+#/,"");
var path = Math.floor(Math.random() * 90 + 10), onepath = Math.floor(Math.random() * 9);
if (uriD != uriN){window.location="../create/00"+path+"#"+uriN;}
else {
  if (uriD.includes('link/t/-')  == true){window.location=uriD.replace('link/t/-','link/t/'+onepath+'?co=');}else{ 
    if (uriD.includes('link/-')  == true){window.location=uriD.replace('link/-','link/t/'+onepath+'?co=');}else{ 
    document.title="Page has been deleted";
    }
  }
}
