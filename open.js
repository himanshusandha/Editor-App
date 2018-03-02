function openPage(pageName,elmnt) {
  if(document.getElementById(pageName)==null){}     //condition because onclosebtn click the main button also gets pressed resulting in null
  else{
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
      }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = '#404552';
    }
}
