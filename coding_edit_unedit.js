function editable() {
  if(document.getElementById("imgedit").getAttribute("src")=="resource/unedit.png"){
    document.getElementById("imgedit").setAttribute("src","resource/edit.png");
    document.getElementById("myOl").setAttribute("contenteditable","false");
  }
  else{
    document.getElementById("imgedit").setAttribute("src","resource/unedit.png");
    document.getElementById("myOl").setAttribute("contenteditable","true");
  }
}
