//openImage
ipcRenderer.on('openImage', function(event,args){
  let tabcontent=document.getElementsByClassName("tabcontent");
  let contentWindow;
  for(i=0;i<tabcontent.length;i++){
    if(tabcontent[i].style.display=="block"){
      tabcontent[i].children[0].setAttribute('src','imageHTML.html');
      contentWindow = tabcontent[i].children[0].contentWindow;
      break;
    }
  }
  setTimeout(function(){
    contentWindow.setImageSrc(args);
  },300);
});
