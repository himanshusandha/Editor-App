let caretPos=0;
function getCaretPosition() {
  if (window.getSelection && window.getSelection().getRangeAt) {
    let range = window.getSelection().getRangeAt(0);
    caretPos= range.startOffset;
  }
  return -1;
}
