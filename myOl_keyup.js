function myOl_keyup(event) {
  /*used event.which because event.keyCode does not work on firefox*/
  let x = event.which || event.keyCode;
  if(x==8 && document.getElementById("myOl").childElementCount==0){
    let y = document.createElement("LI");
    document.getElementById("myOl").appendChild(y);
    row_num=0;
  }
  getCaretPosition(); // caret position function
  if(x==13){ //enter
    row_num++;
  }
  if(x==32){//space
    beutify_string();
  }
}
