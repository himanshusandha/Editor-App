function openPage(pageName,elmnt) {
  if(document.getElementById(pageName)==null){}     //condition because onclosebtn click the main button also gets pressed resulting in null
  else{
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
          tablinks[i].style.borderWidth = "1px"; /*for giving good gui to border*/
          tablinks[i].style.padding = '10px'; /*for giving good gui to border*/
      }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = '#404552';
        elmnt.style.borderWidth = '0px'; /*for giving good gui to border*/
        elmnt.style.padding = '11px'; /*for giving good gui to border*/
    }
}
