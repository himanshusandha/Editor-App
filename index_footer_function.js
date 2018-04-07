setInterval(function footerValues() {
  selectCurrentTabLink();
  selectCurrentTab();
  let total_line = ifrm_contentWindow.totalLines();
  let char_length = ifrm_contentWindow.charLength();
  let curr_row = ifrm_contentWindow.currRow();
  let column_pos = ifrm_contentWindow.columnPos();

  document.getElementById('foot_line_And_length').textContent = "Lines :"+total_line+" | Length :"+char_length;
  document.getElementById('foot_current_And_col').textContent = "Ln :"+curr_row+" | Col :"+column_pos;
  document.getElementById('foot_encoding').textContent = "UTF-8";
},300);

function selectCurrentTabLink() {
  let tablink = document.getElementsByClassName("tablink");
  for(i=0;i<tablink.length;i++){
    if(tablink[i].style.backgroundColor != ""){
      let str_split = tablink[i].textContent.split(" ");
      let nameFile = str_split.slice(0,str_split.length-14); //selects 1st index but excludes last index
      document.getElementById('foot_filename').textContent = nameFile.join(" ");
      let joinnameFile = nameFile.join(" ");
      let format = joinnameFile.split(".");
      document.getElementById('foot_file_format').textContent = format[format.length-1];
      break;
    }
  }
}
