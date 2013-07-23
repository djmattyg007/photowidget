var directory;
if (typeof photodir == "undefined") {
	directory = "/sdcard/CameraZOOM/";
} else {
	directory = photodir;
}
var files = listFiles(directory, false);
files = files.split("\n");
var rndNumber = Math.floor((Math.random() * files.length));
var wNum;
if (typeof widgetnum == "undefined") {
	wNum = 0;
} else {
	wNum = widgetnum;
}
setGlobal("PhotoWidget" + wNum, files[rndNumber]);

