let caretPos=0;
function getCaretPosition() {
  element = document.getElementById('myOl').children[row_num];
  let range = document.getSelection().getRangeAt(0);
  let preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(element);
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  caretPos = preCaretRange.toString().length;
  return -1;
}
