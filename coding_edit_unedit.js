function editable() {
  if(document.getElementById("spanedit").innerHTML=="unedit"){
    document.getElementById("spanedit").innerHTML="edit";
    document.getElementById("myOl").setAttribute("contenteditable","false");
  }
  else{
    document.getElementById("spanedit").innerHTML="unedit";
    document.getElementById("myOl").setAttribute("contenteditable","true");
  }
}
