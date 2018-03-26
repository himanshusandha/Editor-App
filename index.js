const electron=require('electron');
const url=require('url');
const path=require('path');
const fs=require("fs");

const{app,BrowserWindow,Menu,ipcMain,dialog}=electron;

let mainWindow;

app.on('ready',function(){
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
	mainWindow=new BrowserWindow({width, height}),
	mainWindow.loadURL(url.format({
	pathname:path.join(__dirname,'index.html'),
	protocol:'file:',
	slashes:true
	}));
	const mainMenu=Menu.buildFromTemplate(mainMenuTemplate); //Build Menu from Template
	Menu.setApplicationMenu(mainMenu);  //Insert Menu
});

const mainMenuTemplate=[
	//1st menuitem
	{
		label : 'File',
		submenu : [
			{
				label: 'New File',
				submenu : [
					{
						label : 'Coding Area',
						submenu : [
							{
								label : 'HTML',
								click(){
									mainWindow.webContents.send('newFile', 'html');
								}
							},
							{
								label : 'C++',
								click(){
									mainWindow.webContents.send('newFile', 'cpp');
								}
							},
							{
								label : 'Java',
								click(){
									mainWindow.webContents.send('newFile', 'java');
								}
							},
						]
					},
					{
						label : 'Normal Text Area',
						click(){

						}
					},
				]
			},
			{
				label : 'Open File',
				accelerator : 'ctrl+o',
				click(){
					dialog.showOpenDialog((fileNames) => {
						if(fileNames === undefined){
							dialog.showErrorBox('File Open Error','No Files were selected');
							return;
						}
						fs.readFile(fileNames[0],"utf-8",(err,data) => {
							if(err){
								dialog.showErrorBox('File Open Error',err.message);
								return;
							}
							mainWindow.webContents.send('newFile',fileNames[0]);
							mainWindow.webContents.send('openFile',data);
						});
					});
				}
			},
			{
				label : 'Open Folder',
				accelerator : 'ctrl+shift+o',
				click(){
					let dirpath=dialog.showOpenDialog({properties: ['openDirectory']});
					mainWindow.webContents.send('mainDir',dirpath);
				}
			},
			{
				label : 'Save',
				accelerator : 'ctrl+s',
				click(){
					mainWindow.webContents.send('isFileSaved');
					ipcMain.on('bool_val',(event, arg) => {
						if (arg == undefined) {

						} else {

						}
					});
				}
			},
			{
				label : 'Save As',
				accelerator : 'ctrl+shift+s',
				click(){
					dialog.showSaveDialog((fileNames) => {
						if(fileNames === undefined){
							dialog.showErrorBox('File Save Error','File Name not defined.');
							return;
						}
						mainWindow.webContents.send('saveFile', fileNames);
						let saveText;
						ipcMain.on('saveData',(event, arg) => {
							saveText=arg;
						});
						setTimeout(() => {
							fs.writeFile(fileNames,saveText,(err) => {
								if(err){
									dialog.showErrorBox('File Save Error',err.message);
									return;
								}
								dialog.showMessageBox({message:"File Successfully Saved !",buttons:["OK"]});
							});
						}, 300);
					});
				}
			},
			{
				label : 'Quit',
				accelerator : 'ctrl+Q',
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
		]
	},
	//3rd menuitem
	{
		label: 'View',
		submenu: [
			{role: 'reload'},
			{role: 'forcereload'},
			{role: 'toggledevtools'},
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
	},
	//5th menuitem
	{
		label : 'Setting',
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
		role: 'help',
		submenu: [
		  {
			label: 'Learn More',
			accelerator : 'ctrl+H',
			click () {electron.shell.openExternal('www.himanshusandha.wordpress.com')}
		  }
		]
	}
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
