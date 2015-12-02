var express = require('express');
var router = express.Router();
var url = require('url');
var crypto = require('crypto');

var TOKEN = 'leemagnum';

router.get('/', function(req, res, next) {
	//res.send('get');
	var reqObj = url.parse(req.url, true);
	var params = reqObj['query'];
	var signature = params['signature'];
	var timestamp = params['timestamp'];
	var nonce = params['nonce'];
	var echostr = params['echostr'];
	var tmpArr = [TOKEN, timestamp, nonce];
	tmpArr.sort();
	var tmpStr = tmpArr.join('');
	var shasum = crypto.createHash('sha1');
	shasum.update(tmpStr);
	var shaResult = shasum.digest('hex');
	if(shaResult == signature){ //来自微信服务器
		res.send(echostr);//验证
	}else{
		console.log('not weixin server!');
		res.send('not weixin server!');
	}


});
router.post('/', function(req, res, next) {
  res.send('post');
});


module.exports = router;
