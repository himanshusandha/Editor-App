var back_high_color="rgba(255, 0, 225, 0.1)";
setInterval(function coloring_active() {
  let c = document.getElementById("myOl").children;
  document.getElementById("myOl").style.backgroundColor = ""; //to set whole ol color to overcome bug when selected multi li's
  for (i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = "";
  }

  //to over come bug when selectall is done and backspaced
  if(c.length==1){
    row_num=0;
  }
  c[row_num].style.backgroundColor = back_high_color;
},50);
