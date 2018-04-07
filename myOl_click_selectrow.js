var row_num=0;
function myOl_click_selectrow(event){
  getCaretPosition(); //caret position function
  //for color portion on active element
  let n=document.getElementById("myOl").childElementCount;
  let c = document.getElementById("myOl").children;
  for (i = 0; i < n; i++) {
      c[i].style.backgroundColor ="";
    }
  event.target.style.backgroundColor = back_high_color;
    for (i = 0; i < n; i++) {
        if(c[i].style.backgroundColor == back_high_color){
          row_num=i;
        }
    }
  }
