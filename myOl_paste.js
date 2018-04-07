//to overcome the bug of getting the text pasted in single li element when pasted the text of outside note app
document.getElementById("myOl").onpaste = function(e){
  let pastedText_Split = e.clipboardData.getData('text/plain').split("\n");
  for(let i=0 ; i< pastedText_Split.length ; i++){
    let liElem = document.createElement('li');
    liElem.textContent = pastedText_Split[i];
    let referenceNode = document.getElementById('myOl').children[row_num];
    referenceNode.parentNode.insertBefore(liElem,referenceNode.nextSibling);
    row_num++;
  }
  row_num = row_num - pastedText_Split.length; //to over come bug of cursor and colored line
  return false;  // prevent the default handler from execution
}
