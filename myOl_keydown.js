function myOl_keydown(event) {
  /*used event.which because event.keyCode does not work on firefox*/
  let x = event.which || event.keyCode;
  //eneter in keypressed method as keydown doesn't recognize enter
  if(x==38){ //up
    if(row_num!=0){
      row_num--;
    }
  }
  if(x==40){ //down
    if(row_num!=(--document.getElementById("myOl").childElementCount)){
      row_num++;
    }
  }
  if(x==8){//backspace
    let prev=document.getElementById('myOl').children[row_num-1].textContent.length;
    let curr=document.getElementById('myOl').children[row_num].textContent.length;
    setTimeout(myTimer_backspace, 10,prev,curr);
  }
  if(x==9 || x==219 || x==222){//tab or openbracket or singleQuote
    event.preventDefault();
    let str = document.getElementById('myOl').children[row_num].textContent;
    let textToAdd;
    if(x==9){textToAdd = '   ';}//tab
    else if(x==219){textToAdd = '{}';}//brackets
    else if(x==222){textToAdd = "''";}//singleQuote
    let strFirstPart = str.substring(0,caretPos);
    let strSecondPart = str.substring(caretPos,str.length);
    str = strFirstPart+textToAdd+strSecondPart;
    document.getElementById('myOl').children[row_num].innerHTML = str;
    moveCaret();
  }
  if(x==37){//left
    previous_caretPos = caretPos;
  }
}
let previous_caretPos=0;
function myTimer_backspace(prev,curr) {
    if(row_num==0){}
    else if(document.getElementById('myOl').children[row_num-1].textContent.length==(prev+curr)){
      row_num--;
    }
}
