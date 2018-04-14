function beutify_string() {
  let liEl = document.getElementById('myOl').children[row_num];
  let str = liEl.textContent;
  str = applyRegEx(str);
  liEl.innerHTML = str;
  moveCaret()
}

function moveCaret() {
  let range = document.createRange();
  let node = document.getElementById("myOl").children[row_num];

  let str_split = node.textContent.split('');
  let split_length=-1,str_length=0;
  for(let i=0; i<str_split.length;i++){
    if(str_split[i]== ' '){
      split_length = split_length +2;
    }
    str_length++;
    if(caretPos <= str_length){
      if(str_split[i]== ' '){
        break;
      }
    }
  }
  let first_alpa = node.textContent.length;
  for(let i=0;i<str_split.length;i++){
    if(str_split[i]!=' '){//if its space count must be1 less bug
      first_alpa = i;
      break;
    }
    split_length--;
  }
  if(first_alpa != node.textContent.length){//for intermediate spaces bug
    let str_substr = node.textContent.substring(first_alpa,node.textContent.length);
    let new_str_split_space = str_substr.split(' ');
    for(let i=0;i<new_str_split_space.length;i++){
      if(new_str_split_space[i].length == 0){
          split_length--;
      }
    }
    split_length++;
  }
  range.setStart(node, split_length+1);
  range.setEnd(node, split_length+1);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function applyRegEx(str){
  let regex = new RegExp(' ','g');
  str=str.replace(regex,"<span>"+' '+"</span>");

  regex = new RegExp('public','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'public'+"</span>");
  regex = new RegExp('class','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'class'+"</span>");
  regex = new RegExp('const','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'const'+"</span>");
  regex = new RegExp('static','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'static'+"</span>");
  regex = new RegExp('System','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'System'+"</span>");
  regex = new RegExp('function','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'function'+"</span>");
  regex = new RegExp('for','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'for'+"</span>");
  regex = new RegExp('if','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'if'+"</span>");
  regex = new RegExp('else if','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'else if'+"</span>");
  regex = new RegExp('else','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'else'+"</span>");
  regex = new RegExp('while','g');
  str=str.replace(regex,"<span style='color:rgb(97,175,239);'>"+'while'+"</span>");

  regex = new RegExp('void','g');
  str=str.replace(regex,"<span style='color:rgb(229,192,123);'>"+'void'+"</span>");

  regex = new RegExp('document','g');
  str=str.replace(regex,"<span style='color:rgb(212,74,62);'>"+'document'+"</span>");
  regex = new RegExp('main','g');
  str=str.replace(regex,"<span style='color:rgb(212,74,62);'>"+'main'+"</span>");
  regex = new RegExp('string','g');
  str=str.replace(regex,"<span style='color:rgb(212,74,62);'>"+'string'+"</span>");
  return str;
}
