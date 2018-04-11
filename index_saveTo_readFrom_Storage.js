//saveToStorage
ipcRenderer.on('saveToStorage',(event,args) => {
  for(let i=0;i<localStorage.getItem('keyNum');i++){
    localStorage.removeItem('path'+i);
  }
  localStorage.setItem('keyNum',0);
  let tabs = document.getElementsByClassName('tabcontent');
  let keyCount = 0,j = 0;
  for(let i=0;i<tabs.length;i++){
    if(tabs[i].children[0].getAttribute('src') == 'coding_area.html'){
      let path = tabs[i].children[0].contentWindow.getFileName();
      if(path !== undefined){
        localStorage.setItem("path"+j, path);
        keyCount = j+1;
        localStorage.setItem('keyNum',keyCount);
        j++;
      }
    }
  }
});

//readFromStorage
ipcRenderer.on('readFromStorage',(event,args) => {
  let path={};
	for(let i=0;i<localStorage.getItem('keyNum');i++){
    path[i] = localStorage.getItem('path'+i);
  }
	for(let i=0;i<localStorage.getItem('keyNum');i++){
		ipcRenderer.send('restoreFiles',path[i]);
    let now = new Date().getTime();
    while(new Date().getTime() < now + 500){}
	}
});
