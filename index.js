const electron=require('electron');
const url=require('url');
const path=require('path');
const fs=require("fs");

const{app,BrowserWindow,Menu,ipcMain,dialog}=electron;

let mainWindow;
let googleSearch;
let userManual;

app.on('ready',function(){
	mainWindow=new BrowserWindow({show: false,});
	mainWindow.once('ready-to-show',()=>{
		mainWindow.show();
	});
	mainWindow.loadURL(url.format({
	pathname:path.join(__dirname,'index.html'),
	protocol:'file:',
	slashes:true
	}));
	mainWindow.maximize();
	const mainMenu=Menu.buildFromTemplate(mainMenuTemplate); //Build Menu from Template
	Menu.setApplicationMenu(mainMenu);  //Insert Menu
	mainWindow.on('closed', ()=> {
		mainWindow= null;
	});
	mainWindow.on('close',() => {
		mainWindow.webContents.send('saveToStorage','');
	});
});

setTimeout(function(){
	mainWindow.webContents.send('readFromStorage','');
},2000);

const mainMenuTemplate=[
	//1st menuitem
	{
		label : 'File',
		submenu : [
			{
				label: 'New File',
				accelerator : 'CmdOrCtrl+n',
				click(){
					mainWindow.webContents.send('newFile', 'txt');
				}
			},
			{
				label: 'New Smart html file ',
				accelerator : 'CmdOrCtrl+shift+n',
				click(){
					mainWindow.webContents.send('newFile','html');
					mainWindow.webContents.send('openSmartHTML','');
				}
			},
			{
				label : 'Open File',
				accelerator : 'CmdOrCtrl+o',
				click(){
					dialog.showOpenDialog((fileNames) => {
						if(fileNames === undefined){
							dialog.showErrorBox('File Open Error','No Files were selected');
							return;
						}
						readTheFile(fileNames[0]);
					});
				}
			},
			{
				label : 'Open Folder',
				accelerator : 'CmdOrCtrl+shift+o',
				click(){
					let dirpath=dialog.showOpenDialog({properties: ['openDirectory']});
					mainWindow.webContents.send('mainDir',dirpath);
				}
			},
			{
				label : 'Save',
				accelerator : 'CmdOrCtrl+s',
				click(){
					mainWindow.webContents.send('isFileSaved');
					//bool_valipcMain would be executed
				}
			},
			{
				label : 'Save As',
				accelerator : 'CmdOrCtrl+shift+s',
				click(){
					saveAsFunc();
				}
			},
			{type: 'separator'},
			{
				label : 'Print',
				accelerator : 'CmdOrCtrl+p',
				click(){
					mainWindow.webContents.send('printPage','');
				}
			},
			{type: 'separator'},
			{
				label : 'Quit',
				accelerator : 'CmdOrCtrl+Q',
				click(){
					app.quit();
				}
			}
		]
	},
	//2nd menuitem
	{
		label : 'Edit',
		submenu : [
			{role: 'undo'},
			{role: 'redo'},
			{type: 'separator'},
			{role: 'cut'},
			{role: 'copy'},
			{role: 'paste'},
			{role: 'delete'},
			{role: 'selectall'},
			{type: 'separator'},
			{
				label : 'Wrap Content',
				submenu : [
					{
						label : 'Wrap on',
						click(){
							mainWindow.webContents.send('wrapOn');
						}
					},
					{
						label : 'Wrap off',
						click(){
							mainWindow.webContents.send('wrapOff');
						}
					},
				]
			},
			{
				label : 'Lower Case',
				accelerator : 'CmdOrCtrl+shift+l',
				click(){
					mainWindow.webContents.send('lowerCase');
				}
			},
			{
				label : 'Upper Case',
				accelerator : 'CmdOrCtrl+shift+u',
				click(){
					mainWindow.webContents.send('upperCase');
				}
			},
		]
	},
	//3rd menuitem
	{
		label: 'View',
		submenu: [
			{role: 'reload'},
			{role: 'forcereload'},
			//{role: 'toggledevtools'},
			{type: 'separator'},
			{role: 'resetzoom'},
			{role: 'zoomin'},
			{role: 'zoomout'},
			{type: 'separator'},
			{role: 'togglefullscreen'},
		]
	},
	//4th menuitem
	{
		label : 'Search',
		submenu : [
			{
				label : 'Find in row',
				accelerator : 'CmdOrCtrl+f',
				click(){
					mainWindow.webContents.send('findText','row');
				}
			},
			{
				label : 'Replace in row',
				accelerator : 'CmdOrCtrl+d',
				click(){
					mainWindow.webContents.send('replaceText','row');
				}
			},
			{type: 'separator'},
			{
				label : 'Find in page',
				accelerator : 'CmdOrCtrl+shift+f',
				click(){
					mainWindow.webContents.send('findText','page');
				}
			},
			{
				label : 'Replace in page',
				accelerator : 'CmdOrCtrl+shift+d',
				click(){
					mainWindow.webContents.send('replaceText','page');
				}
			},
		]
	},
	//5th menuitem
	{
		label : 'Setting',
		submenu : [
			{
				label : 'Tree Icon',
				submenu : [
					{
						label : 'Mac OS',
						click(){mainWindow.webContents.send('treeThemeNum','0');}
					},
					{
						label : 'Black & White',
						click(){mainWindow.webContents.send('treeThemeNum','1');}
					},
					{
						label : 'Material 1',
						click(){mainWindow.webContents.send('treeThemeNum','2');}
					},
					{
						label : 'Blue & White',
						click(){mainWindow.webContents.send('treeThemeNum','3');}
					},
					{
						label : 'Material 2',
						click(){mainWindow.webContents.send('treeThemeNum','4');}
					},
				]
			},
		]
	},
	//6th menuitem
	{
		label : 'Window',
		submenu : [
			{role : 'minimize',},
			{role : 'close',},
		]
	},
	//7th menuitem
	{
		label: 'Google',
		click(){
			const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
			googleSearch=new BrowserWindow({width, height}),
			googleSearch.loadURL(url.format({
			pathname:path.join('www.google.com'),
			protocol:'https:',
			slashes:true
			}));
			googleSearch.setMenu(null);
		}
	},
	//8th menuitem
	{
		role: 'help',
		submenu: [
		  {
			label: 'Learn More',
			accelerator : 'CmdOrCtrl+H',
			click () {electron.shell.openExternal('www.himanshusandha.wordpress.com')}
			},
			{
				label: 'User Manual',
				accelerator : 'CmdOrCtrl+shift+m',
				click(){
					userManual=new BrowserWindow({width: 800, height: 600}),
					userManual.loadURL(url.format({
					pathname:path.join(__dirname,'userManual.html'),
					protocol:'file:',
					slashes:true
					}));
					userManual.setMenu(null);
				}
			},
		]
	},
	//9th
	{
		label : 'cmd',
		click(){
			if(process.platform=="win32"){
				electron.shell.openItem('C:\\Windows\\System32\\cmd.exe');
			}
			if(process.platform!="win32"){
				dialog.showMessageBox({message:"Sorry, cmd is only supported by Windows !",buttons:["OK"]});
			}
		}
	},
]

if(process.platform=="darwin"){
	mainMenuTemplate.unshift({
		label: app.getName(),
		submenu: [
		  {role: 'about'},
		  {type: 'separator'},
		  {role: 'services', submenu: []},
		  {type: 'separator'},
		  {role: 'hide'},
		  {role: 'hideothers'},
		  {role: 'unhide'},
		  {type: 'separator'},
		  {role: 'quit'}
		]
	}); //if its mac than add a empty menu item because in mac 1st menuitem is electron
}

ipcMain.on('bool_val',(event, arg) => {
	if (arg == undefined) {
		saveAsFunc();
	} else {
		saveFunc(arg);
	}
});

function saveAsFunc() {
	dialog.showSaveDialog((fileNames) => {
		if(fileNames === undefined){
			dialog.showErrorBox('File Save Error','File Name not defined.');
			return;
		}
		saveFunc(fileNames);
	});
}
function saveFunc(fileNames) {
	mainWindow.webContents.send('saveFile', fileNames);
	//ipcMain saveData would be executed
	setTimeout(() => {
		fs.writeFile(fileNames,saveText,(err) => {
			if(err){
				dialog.showErrorBox('File Save Error',err.message);
				return;
			}
			dialog.showMessageBox({message:"File Successfully Saved !",buttons:["OK"]});
		});
	}, 300);
}
let saveText;
ipcMain.on('saveData',(event, arg) => {
	saveText=arg;
});

ipcMain.on('readDirFunc',(event, arg) => {
	let arr={},i=1;
	arr[0]=fs.readdirSync(''+arg).length;
	fs.readdirSync(''+arg).forEach(file => {
		arr[i]= arg+'\\'+file;
		arr[arr[0]+i]= fs.lstatSync(arg+'\\'+file).isDirectory();
		i++;
	});
	arr[i+i-1] = arg;  //original path
	mainWindow.webContents.send('appendUL', arr);
});

ipcMain.on('openreadFileFromTree',(event, arg) =>{
	if(arg[1] != "false_image"){ //its file or anything else other than image
		readTheFile(arg[0]);
	}
	else if(arg[1] == "false_image"){
		mainWindow.webContents.send('newFile',arg[0]);
		mainWindow.webContents.send('openImage',arg[0]);
	}
});
function readTheFile(filename){
	fs.readFile(filename,"utf-8",(err,data) => {
		if(err){
			dialog.showErrorBox('File Open Error',err.message);
			return;
		}
		mainWindow.webContents.send('newFile',filename);
		mainWindow.webContents.send('openFile',data);
	});
}

ipcMain.on('restoreFiles',(event,arg) =>{
	readTheFile(arg);
});
