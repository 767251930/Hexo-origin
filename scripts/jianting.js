var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "D:\Softwares\Tools\Microsoft VS Code\Code.exe" ' + data.path);
});