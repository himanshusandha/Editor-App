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
  if(x==9){
    event.preventDefault();
    //let str = document.getElementById('myOl').children[row_num].textContent;
    //let newstr = "    "+str;
    //document.getElementById('myOl').children[row_num].textContent = newstr;
  }
}
function myTimer_backspace(prev,curr) {
    if(row_num==0){}
    else if(document.getElementById('myOl').children[row_num-1].textContent.length==(prev+curr)){
      row_num--;
    }
}
