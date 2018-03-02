function showdata(getText) {
  var stri=getText.split("\n");
  for (i = 0; i < stri.length; i++) {
    var y =document.createElement("LI");
    y.textContent=stri[i];
    document.getElementById("myOl").appendChild(y);
    row_num++;
  }
}
