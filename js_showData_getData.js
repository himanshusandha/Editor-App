function showData(getText) {
  let stri = getText.split("\n");
  for (i = 0; i < stri.length; i++) {
    let y = document.createElement("LI");
    y.textContent=stri[i];
    document.getElementById("myOl").appendChild(y);
    row_num++;
  }
}
let filename;
function getData(fname) {
  filename=fname;
  let saveText=" ";
  let n = document.getElementById("myOl").childElementCount; /*length start with 1*/
  let c = document.getElementById("myOl").children;
  for (i = 0; i < n; i++) {
      saveText=saveText + c[i].textContent + "\n";
  }
  textChange = '';  //to show that file is saved and their is no text altered yet
  return saveText;
}
function getFileName(){
  return filename;
}
let textChange = '';
function change(){
  textChange = 'File altered*';
}
