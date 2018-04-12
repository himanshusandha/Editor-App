function setWrapOn() {
  let nodes = document.getElementById('myOl').children;
  for(let i=0;i<nodes.length;i++){
    nodes[i].style.whiteSpace = "pre-wrap";
  }
}
function setWrapOff() {
  let nodes = document.getElementById('myOl').children;
  for(let i=0;i<nodes.length;i++){
    nodes[i].style.whiteSpace = "pre";
  }
}
