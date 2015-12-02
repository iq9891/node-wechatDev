var log4js = require('log4js');

log4js.configure({
	appenders:[
		{type: 'console'}, //��־���������̨
		{
			type: 'file',
			filename:'logs/access.log',	//��־�����logs�µ�access
			maxLogSize: 1024,
			backups:4,
			category:'normal'
		}
	],
	replaceConsole: true //�滻Ĭ�ϵĿ���̨��־��ʽ
});

exports.logger = function (name){
	var logger = log4js.getLogger(name);
	logger.setLevel('DEBUG');
	return logger;
};

exports.log4js = log4js;
