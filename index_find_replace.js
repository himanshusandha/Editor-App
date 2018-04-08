//find
let search_option;
ipcRenderer.on('findText', function(event,args){
  if(document.getElementById('find_divEl')){} //alredy present do nothing
  else if(document.getElementById('replace_divEl')){ //replace is present so remove it
    alert("Close Replace Process");
  }
  else{
    search_option = args;
    let divEl = document.createElement('div');
    divEl.setAttribute("id","find_divEl");
    let inEl = document.createElement('input');
    inEl.setAttribute("id","find_inEl");
    let btnEl = document.createElement('button');
    btnEl.setAttribute("onClick"," find_inputBtn()");
    btnEl.textContent = 'Find';
    divEl.appendChild(inEl);
    divEl.appendChild(btnEl);
    document.body.append(divEl);
  }
});
//replace
let replace_option;
ipcRenderer.on('replaceText', function(event,args){
  if(document.getElementById('replace_divEl')){} //already present do nothing
  else if(document.getElementById('find_divEl')){ //find is present so remove it
    alert("Close Find Process");
  }
  else{
    replace_option = args;
    let divEl = document.createElement('div');
    divEl.setAttribute("id","replace_divEl");
    let inEl1 = document.createElement('input');
    inEl1.setAttribute("id","replace_inEl1");
    let pEl = document.createElement('p');
    pEl.textContent = "to";
    let inEl2 = document.createElement('input');
    inEl2.setAttribute("id","replace_inEl2");
    let btnEl = document.createElement('button');
    btnEl.setAttribute("onClick"," replace_inputBtn()");
    btnEl.textContent = 'Replace';
    divEl.appendChild(inEl1);
    divEl.appendChild(pEl);
    divEl.appendChild(inEl2);
    divEl.appendChild(btnEl);
    document.body.append(divEl);
  }
});

function find_inputBtn() {
  let find_text = document.getElementById('find_inEl').value;
  document.getElementById('find_divEl').remove();
  selectCurrentTab();
  ifrm_contentWindow.findWord(find_text,search_option);
}
function replace_inputBtn() {
  let replace_text1 = document.getElementById('replace_inEl1').value;
  let replace_text2 = document.getElementById('replace_inEl2').value;
  document.getElementById('replace_divEl').remove();
  selectCurrentTab();
  ifrm_contentWindow.replaceWord(replace_text1,replace_text2,replace_option);
}
