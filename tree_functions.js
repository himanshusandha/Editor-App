//mainDir fun
ipcRenderer.on('mainDir', function(event,args){
  document.getElementById('mainDirectoryLi').setAttribute("data-path",args);
  document.getElementById('mainDirectoryLi').setAttribute("data-is-dir","true");
  document.getElementById('mainDirectoryLi').setAttribute("onclick","open_file_dir(event)");
  let name_split = args.toString().split("\\"); //used .toString() to convert args to a string as it was giving TypeError
  document.getElementById('mainDirectoryLi').textContent = name_split[(name_split.length)-1];
  document.getElementById('mainDirectoryLi').click();
});

//open_file_dir
function open_file_dir(event){
  if(event.target.getAttribute("data-is-dir") == "true"){
    if (event.target.childElementCount == 0) {
      ipcRenderer.send('readDirFunc',event.target.getAttribute("data-path"));
      setTimeout(setIconTree,50); //ipcRenderer doesn't get executed and this function start so given Timeout
     }
    else {
      event.target.children[0].remove();
      setTimeout(setIconTree,50); //ipcRenderer doesn't get executed and this function start so given Timeout
    }
  }
  else{
    ipcRenderer.send('openreadFileFromTree',event.target.getAttribute("data-path"));
  }
  event.stopPropagation();
}

let iconSetNum = 0;
//setting up icon to tree
function setIconTree() {
  //0= expand_main_folder, 1= colapse_main_folder, 2= expand_folder, 3= colapse_folder, 4= file, 5= picture, 6= archive
  let iconPathArr = [
    ['url(resource/expand_main_folder_set1.png)','url(resource/colapse_main_folder_set1.png)','url(resource/expand_folder_set1.png)','url(resource/colapse_folder_set1.png)','url(resource/file_set1.png)','url(resource/picture_set1.png)','url(resource/archive_set1.png)'],
    ['url(resource/expand_main_folder_set2.png)','url(resource/colapse_main_folder_set2.png)','url(resource/expand_folder_set2.png)','url(resource/colapse_folder_set2.png)','url(resource/file_set2.png)','url(resource/picture_set2.png)','url(resource/archive_set2.png)'],
    ['url(resource/expand_main_folder_set3.png)','url(resource/colapse_main_folder_set3.png)','url(resource/expand_folder_set3.png)','url(resource/colapse_folder_set3.png)','url(resource/file_set3.png)','url(resource/picture_set3.png)','url(resource/archive_set3.png)'],
    ['url(resource/expand_main_folder_set4.png)','url(resource/colapse_main_folder_set4.png)','url(resource/expand_folder_set4.png)','url(resource/colapse_folder_set4.png)','url(resource/file_set4.png)','url(resource/picture_set4.png)','url(resource/archive_set4.png)'],
    ['url(resource/expand_main_folder_set5.png)','url(resource/colapse_main_folder_set5.png)','url(resource/expand_folder_set5.png)','url(resource/colapse_folder_set5.png)','url(resource/file_set5.png)','url(resource/picture_set5.png)','url(resource/archive_set5.png)']
  ];
  if(document.getElementById('mainDirectoryLi').childElementCount == 0){ //colapse
    document.getElementById('mainDirectoryLi').style.listStyleImage = iconPathArr[iconSetNum][1];
  }
  else{ //expand
    document.getElementById('mainDirectoryLi').style.listStyleImage = iconPathArr[iconSetNum][0];
  }
  let liChild = document.getElementById('mainDirectoryLi').children[0].getElementsByTagName('li');
  for(let i=0;i<liChild.length;i++){
    if(liChild[i].getAttribute("data-is-dir") == "true"){
      if(liChild[i].childElementCount == 0){ //colapse
        liChild[i].style.listStyleImage = iconPathArr[iconSetNum][3];
      }
      else{ //expand
        liChild[i].style.listStyleImage = iconPathArr[iconSetNum][2];
      }
    }
    else if(liChild[i].getAttribute("data-is-dir") == "false"){
      liChild[i].style.listStyleImage = iconPathArr[iconSetNum][4];
    }
    else if(liChild[i].getAttribute("data-is-dir") == "false_image"){
      liChild[i].style.listStyleImage = iconPathArr[iconSetNum][5];
    }
    else if(liChild[i].getAttribute("data-is-dir") == "false_archive"){
      liChild[i].style.listStyleImage = iconPathArr[iconSetNum][6];
    }
  }
}

//treeThemeNum
ipcRenderer.on('treeThemeNum', function(event,args){
  iconSetNum = args;
  setIconTree();
});

//appendUL fun
ipcRenderer.on('appendUL', function(event,args){
  let ulElement = document.createElement('UL');
  for ( i = 1; i <= args[0]; i++) { //i=0 because at 0 index lentgh is stored
    let liElement = document.createElement('LI');
    liElement.setAttribute("data-path", args[i]);
    liElement.setAttribute("data-is-dir", args[args[0]+i]);
    liElement.setAttribute("onclick", "open_file_dir(event)");
    let name_split = args[i].toString().split("\\"); //used .toString() to convert args to a string as it was giving TypeError
    liElement.textContent = name_split[(name_split.length)-1];
    if(liElement.getAttribute("data-is-dir") == "false"){
      let file_format_split = liElement.textContent.split(".");
      let file_image = ['jpeg','jpg','jpe','jfif','tiff','tif','gif','bmp','dib','png','svg'];
      let file_archive = ['7z','arc','dmg','rar','rzip','zip','apk','deb','rpm','msi','jar'];
      for ( let j = 0; j < file_image.length; j++) {
        if(file_image[j] == file_format_split[(file_format_split.length)-1]){
          liElement.setAttribute("data-is-dir","false_image");
          break;
        }
      }
      for ( let j = 0; j < file_archive.length; j++) {
        if(file_archive[j] == file_format_split[(file_format_split.length)-1]){
          liElement.setAttribute("data-is-dir","false_archive");
          break;
        }
      }
    }
    ulElement.appendChild(liElement);
  }
  let li_element_list = document.getElementById('mainDirectoryUL').getElementsByTagName('li'); //appnding elements
  for (i = 0; i < li_element_list.length; i++) {
    if (li_element_list[i].getAttribute('data-path') == args[args[0]+args[0]+1]) {
      li_element_list[i].appendChild(ulElement);
      break;
    }
  }
});
