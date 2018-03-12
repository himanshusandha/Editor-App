function closebtndis(elmnt){
    elmnt.children[0].style.visibility="visible";
}
function closebtnin(elmnt){
  elmnt.children[0].style.visibility="hidden";
}
function closePage(pageName,elmnt){
  tablinks=document.getElementsByClassName("tablink");
  let current=0;
  for(i=0; i < tablinks.length; i++){
    if(elmnt.parentElement == tablinks[i]){
      current=i+1;
      if (current==1) {
        tablinks[current].click();
      }
      else{
        tablinks[current-2].click();
      }
    }
  }
  elmnt.parentElement.remove();   //remove the button
  document.getElementById(pageName).remove();   //removing the div with frame
}
