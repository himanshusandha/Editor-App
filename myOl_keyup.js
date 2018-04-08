function myOl_keyup(event) {
  getCaretPosition(); // caret position function
  /*used event.which because event.keyCode does not work on firefox*/
  let x = event.which || event.keyCode;
  if(x==8 && document.getElementById("myOl").childElementCount==0){
    let y = document.createElement("LI");
    document.getElementById("myOl").appendChild(y);
    row_num=0;
  }
  if(x==13){ //enter
    row_num++;
  }
  if(x==39){//right
    if(caretPos==0 && document.getElementById("myOl").childElementCount!=row_num+1){
      row_num++;
    }
  }
  if(x==37){//left
    if(previous_caretPos ==0  && row_num!=0){ //previous one is 0 than surely cursor is on new
      row_num--;
    }
    else if(previous_caretPos == caretPos && row_num!=0){ //if previous line and current line are has 0 length
      row_num--;
    }
  }
}
