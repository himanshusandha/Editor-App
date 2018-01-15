function myOl_keyup(event) {
  /*used event.which because event.keyCode does not work on firefox*/
  var x = event.which || event.keyCode;
  if(x==8 && document.getElementById("myOl").childElementCount==0){
    var y = document.createElement("LI");
    document.getElementById("myOl").appendChild(y);
    row_num=0;
  }
  if(x==13){ //enter
    row_num++;
  }
}
