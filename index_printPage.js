//printPage
ipcRenderer.on('printPage',(event,args)=>{
  selectCurrentTab();
  ifrm_contentWindow.printIt();
});
