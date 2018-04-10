//openSmartHTML
ipcRenderer.on('openSmartHTML', function(event,args){
  let tabcontent=document.getElementsByClassName("tabcontent");
  for(i=0;i<tabcontent.length;i++){
    if(tabcontent[i].style.display=="block"){
      tabcontent[i].children[0].setAttribute('src','smartHTML.html');
      break;
    }
  }
});
