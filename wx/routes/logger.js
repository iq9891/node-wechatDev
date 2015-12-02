var log4js = require('log4js');

log4js.configure({
	appenders:[
		{type: 'console'}, //日志输出到控制台
		{
			type: 'file',
			filename:'logs/access.log',	//日志输出到logs下的access
			maxLogSize: 1024,
			backups:4,
			category:'normal'
		}
	],
	replaceConsole: true //替换默认的控制台日志格式
});

exports.logger = function (name){
	var logger = log4js.getLogger(name);
	logger.setLevel('DEBUG');
	return logger;
};

exports.log4js = log4js;
