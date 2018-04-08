//lowerCase
ipcRenderer.on('lowerCase', function(event,args){
  selectCurrentTab();
  ifrm_contentWindow.setLowerCase();
});
//uppercase
ipcRenderer.on('upperCase', function(event,args){
  selectCurrentTab();
  ifrm_contentWindow.setUpperCase();
});
