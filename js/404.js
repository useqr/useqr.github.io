var uriD = window.location.href, uriN = uriD.replace(/.+#/,"");
if (uriD != uriN){window.location="../create/#"+uriN;}
else {document.title="Page has been deleted"}
