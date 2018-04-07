var ifrm_contentWindow;
function selectCurrentTab(){
  let tabcontent=document.getElementsByClassName("tabcontent");
  let currentArea;
  for(i=0;i<tabcontent.length;i++){
    if(tabcontent[i].style.display=="block"){
      currentArea=tabcontent[i].getAttribute('id');//frameeg+(i+1)
      break;
    }
  }
  let ifrm=document.getElementById(currentArea).children[0];
  ifrm_contentWindow=ifrm.contentWindow;
}
