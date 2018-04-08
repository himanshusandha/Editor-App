function findWord(arg,search_option) {
  if(search_option == 'row'){
    let liEl = document.getElementById('myOl').children[row_num];
    let str = liEl.textContent;
    let regex = new RegExp(arg,'g');
    str=str.replace(regex,"<span>"+arg+"</span>");
    liEl.innerHTML = str;
    setTimeout(() =>{
      liEl.innerHTML = liEl.textContent;
    },5000);
  }
  else{
    let liEl = document.getElementById('myOl').children;
    let str={};
    for(let i=0;i<liEl.length;i++){
      str[i] = liEl[i].textContent;
    }
    let regex = new RegExp(arg,'g');
    for(let i=0;i<liEl.length;i++){
      str[i]=str[i].replace(regex,"<span>"+arg+"</span>");
      liEl[i].innerHTML = str[i];
    }
    setTimeout(() =>{
      for(let i=0;i<liEl.length;i++){
        liEl[i].innerHTML = liEl[i].textContent;
      }
    },5000);
  }
}
function replaceWord(arg1,arg2,replace_option) {
  if(replace_option == 'row'){
    let liEl = document.getElementById('myOl').children[row_num];
    let str = liEl.textContent;
    let regex = new RegExp(arg1,'g');
    str=str.replace(regex,"<span>"+arg2+"</span>");
    liEl.innerHTML = str;
    setTimeout(() =>{
      liEl.innerHTML = liEl.textContent;
    },5000);
  }
  else{
    let liEl = document.getElementById('myOl').children;
    let str={};
    for(let i=0;i<liEl.length;i++){
      str[i] = liEl[i].textContent;
    }
    let regex = new RegExp(arg1,'g');
    for(let i=0;i<liEl.length;i++){
      str[i]=str[i].replace(regex,"<span>"+arg2+"</span>");
      liEl[i].innerHTML = str[i];
    }
    setTimeout(() =>{
      for(let i=0;i<liEl.length;i++){
        liEl[i].innerHTML = liEl[i].textContent;
      }
    },5000);
  }
}
