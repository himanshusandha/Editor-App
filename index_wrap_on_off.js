//wrap on
  ipcRenderer.on('wrapOn', function(event,args){
    let tabcontent=document.getElementsByClassName("tabcontent");
    let area1={};
    let ifrm1={};
    let ifrm_contentWindow1={};
    for(i=0;i<tabcontent.length;i++){
      area1[i]=tabcontent[i].getAttribute('id');
      ifrm1[i]=document.getElementById(area1[i]).children[0];
      ifrm_contentWindow1[i]=ifrm1[i].contentWindow;
      ifrm_contentWindow1[i].setWrapOn();
    }
  });
  //wrap off
    ipcRenderer.on('wrapOff', function(event,args){
      let tabcontent=document.getElementsByClassName("tabcontent");
      let area1={};
      let ifrm1={};
      let ifrm_contentWindow1={};
      for(i=0;i<tabcontent.length;i++){
        area1[i]=tabcontent[i].getAttribute('id');
        ifrm1[i]=document.getElementById(area1[i]).children[0];
        ifrm_contentWindow1[i]=ifrm1[i].contentWindow;
        ifrm_contentWindow1[i].setWrapOff();
      }
    });
