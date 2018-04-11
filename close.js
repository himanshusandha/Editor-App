function closebtndis(elmnt){
    elmnt.children[0].style.visibility="visible";
}
function closebtnin(elmnt){
  elmnt.children[0].style.visibility="hidden";
}
function closePage(pageName,elmnt){
  //check if the tab is not an image file  
  if(document.getElementById(pageName).children[0].getAttribute('src') != 'imageHTML.html'){
    //check whether file is saved or not
    if(document.getElementById(pageName).children[0].contentWindow.getFileName() === undefined){ //not saved
      let choice = window.confirm('File is not saved. Do you want to save?\nClick ok to save and cancel to continue without saving');
      if(choice){return false;}
      else{};
    }
    else{} //already saved
  }
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
