function setLowerCase() {
  let sel,range;
  if(window.getSelection){
    sel = window.getSelection();
    let text = sel.toString();
    if(sel.rangeCount){
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text.toLowerCase()));
    }
  }
}
function setUpperCase() {
  let sel,range;
  if(window.getSelection){
    sel = window.getSelection();
    let text = sel.toString();
    if(sel.rangeCount){
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text.toUpperCase()));
    }
  }
}
