 //all required functions for imageHTML
function iFrameOn(){
	richTextField.document.designMode = 'On';
}
function iBold(){
	richTextField.document.execCommand('bold',false,null);
}
function iUnderline(){
	richTextField.document.execCommand('underline',false,null);
}
function iItalic(){
	richTextField.document.execCommand('italic',false,null);
}
function iFontSize(){
	let size = document.getElementById('fontSize').value;
	richTextField.document.execCommand('FontSize',false,size);
}
function iForeColor(){
let color = document.getElementById('foreColor').value;
	richTextField.document.execCommand('ForeColor',false,color);
}
function iHorizontalRule(){
	richTextField.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	richTextField.document.execCommand('InsertUnorderedList',false,"newUL");
}
function iOrderedList(){
	richTextField.document.execCommand('InsertOrderedList',false,"newOL");
}
function iLink(){
	let linkURL = document.getElementById('link').value;
	richTextField.document.execCommand('CreateLink',false,linkURL);
}
function iUnLink(){
	richTextField.document.execCommand('Unlink',false,null);
}
function iImage(){
	let imgSrc = document.getElementById('image').value;;
	if(imgSrc !=null){
		richTextField.document.execCommand('insertimage',false,imgSrc);
	}
}
function iJustifyCenter() {
	richTextField.document.execCommand('justifyCenter',false,null);
}
function iJustifyFull() {
	richTextField.document.execCommand('justifyFull',false,null);
}
function iJustifyLeft() {
	richTextField.document.execCommand('justifyLeft',false,null);
}
function iJustifyRight() {
	richTextField.document.execCommand('justifyRight',false,null);
}
function iIndent() {
	richTextField.document.execCommand('indent',false,null);
}
function iOutdent() {
	richTextField.document.execCommand('outdent',false,null);
}
function iSelectAll() {
	richTextField.document.execCommand('selectAll',false,null);
}
function iUndo() {
	richTextField.document.execCommand('undo',false,null);
}
function iRedo() {
	richTextField.document.execCommand('redo',false,null);
}
function iStrikeThrough() {
	richTextField.document.execCommand('strikeThrough',false,null);
}
function iSubscript() {
	richTextField.document.execCommand('subscript',false,null);
}
function iSuperscript() {
	richTextField.document.execCommand('superscript',false,null);
}
function iCut() {
	richTextField.document.execCommand('cut',false,null);
}
function iCopy() {
	richTextField.document.execCommand('copy',false,null);
}
function iPaste() {
	richTextField.document.execCommand('paste',false,null);
}
function iDelete() {
	richTextField.document.execCommand('delete',false,null);
}

 //to fix all error of no function found
 function totalLines() {
   return 0;
 }
 function charLength() {
   return 0;
 }
 function currRow() {
   return 0;
 }
 function columnPos() {
   return 0;
 }
 function dataChange() {
 	return '';
 }
 function setWrapOn() {}
 function setWrapOff() {}
 function setLowerCase() {}
 function setUpperCase() {}
 function findWord(arg,search_option) {}
 function replaceWord(arg1,arg2,replace_option) {}

 let filename;
 function getData(fname) {
   filename=fname;
	 let saveText = window.frames['richTextField'].document.body.innerHTML;
	 saveText = "<html><head><title></title></head><body>" + saveText + "</body></html>";
   return saveText;
 }

 function getFileName(){
   return filename;
 }

 function printIt() {
   window.print();
 }
