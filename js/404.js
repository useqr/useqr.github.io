var uriD = window.location.href, uriN = uriD.replace(/.+#/,"");
var path = Math.floor(Math.random() * 90 + 10);
if (uriD != uriN){window.location="../create/00"+path+"#"+uriN;}
else {
  if (uriD.includes('link/t/co=')  == true){window.location=window.location.href.replace('link/t/co=','link/t/?co=');}
  else{ document.title="Page has been deleted";}
}
