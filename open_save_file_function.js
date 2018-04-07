//openFile
  ipcRenderer.on('openFile', function(event,args){
    selectCurrentTab();
    setTimeout(() => {
      ifrm_contentWindow.showData(args);
    }, 100);
  });

//saveFile
  ipcRenderer.on('saveFile', function(event,args){
    setTabtext(args);
    selectCurrentTab();
    let saveText=ifrm_contentWindow.getData(args);
    ipcRenderer.send('saveData',saveText);
  });

//saveFileisalreadysaved
  ipcRenderer.on('isFileSaved', function(event,args){
    selectCurrentTab();
    let bool_isFileSaved=ifrm_contentWindow.getFileName();
    ipcRenderer.send('bool_val',bool_isFileSaved);
  });

  function setTabtext(filename) {
    let name = filename.toString().split("\\")
    let tablink=document.getElementsByClassName("tablink");
    for(let i=0;i<tablink.length;i++){
      if(tablink[i].style.backgroundColor != ""){
        let spanEl = tablink[i].children[0];
        tablink[i].innerText = name[(name.length)-1];
        tablink[i].appendChild(spanEl);
        break;
      }
    }
  }
