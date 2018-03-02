setInterval(function coloring_active() {
  var c = document.getElementById("myOl").children;
  document.getElementById("myOl").style.backgroundColor = ""; //to set whole ol color to overcome bug when selected multi li's
  for (i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = "";
  }

  //to over come bug when selectall is done and backspaced
  if(c.length==1){
    row_num=0;
  }
  c[row_num].style.backgroundColor = "green"; //5294e2
},10);
