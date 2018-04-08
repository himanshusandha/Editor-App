function setWrapOn() {
  let nodes = document.getElementById('myOl').children;
  for(let i=0;i<nodes.length;i++){
    nodes[i].style.whiteSpace = "pre-line";
  }
}
function setWrapOff() {
  let nodes = document.getElementById('myOl').children;
  for(let i=0;i<nodes.length;i++){
    nodes[i].style.whiteSpace = "nowrap";
  }
}
