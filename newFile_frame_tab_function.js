
//newFile
ipcRenderer.on('newFile', function(event,args){
  //selection of frame name
  let frm_grp_content=document.getElementById('frm_grp').children;
  let frm_grp_id=[];
  let frm_set_name='Frameeg'+(frm_grp_content.length+1);
  for (i = 0; i < frm_grp_content.length; i++) {
    frm_grp_id[i]=frm_grp_content[i].getAttribute('id');
  }
  frm_grp_id.sort();
  for(i=0;i<frm_grp_content.length;i++){
    if(frm_grp_id[i]!='Frameeg'+(i+1)){
      frm_set_name='Frameeg'+(i+1);
      break;
    }
  }

  //creation of new file
  let btn = document.createElement("button");
  btn.setAttribute("class","tablink");
  btn.setAttribute("onclick","openPage('"+frm_set_name+"', this)");
  btn.setAttribute("onmouseover","closebtndis(this)");
  btn.setAttribute("onmouseout","closebtnin(this)");

  let name_split=args.split("\\");
  if(name_split.length==1){
    btn.innerHTML="untitled." +args;
  }
  else{
    btn.innerHTML= name_split[(name_split.length)-1];
  }

  let sp=document.createElement("span");
  sp.setAttribute("onclick","closePage('"+frm_set_name+"',this)");
  sp.setAttribute("class","closebtn");
  sp.innerHTML="X";

  btn.appendChild(sp);
  document.getElementById("btn_grp").appendChild(btn);

  let div_frm=document.createElement("div");
  div_frm.setAttribute("id",frm_set_name);
  div_frm.setAttribute("class","tabcontent");

  let ifrm=document.createElement("iframe");
  ifrm.setAttribute("src","coding_area.html");

  div_frm.appendChild(ifrm);
  document.getElementById('frm_grp').appendChild(div_frm);

  btn.click();
});
