var row_num=0;
function myOl_click_selectrow(event){
  //for color portion on active element
  var n=document.getElementById("myOl").childElementCount;
  var c = document.getElementById("myOl").children;
  for (i = 0; i < n; i++) {
      c[i].style.backgroundColor ="";
    }
  event.target.style.backgroundColor = 'green';
    for (i = 0; i < n; i++) {
        if(c[i].style.backgroundColor == 'green'){
          row_num=i;
        }
    }
  }
