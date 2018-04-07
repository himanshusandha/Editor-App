function totalLines() {
  return document.getElementById('myOl').children.length;
}
function charLength() {
  return (document.getElementById('myOl').textContent.length)-16;
}
function currRow() {
  return (row_num+1);
}
function columnPos() {
  return caretPos;
}
