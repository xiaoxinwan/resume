//init
var APP_ID = 'xkEaHgwQriprwGMQ16trRlwn-gzGzoHsz';
var APP_KEY = 'WXFE0MM9fM8g5cWrSQWSiTAr';


AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
	.then(function(messages) {
    	let array = messages.map((item) => item.attributes)
    	console.log('array')
    	console.log(array)
    	array.forEach ((item) => {
    		let li = document.createElement('li')
    		li.innerText = item.contents
    		console.log(item)
    		console.log(li.innerText)
    		
    		let messageList = document.querySelector('#messageList')
    		messageList.appendChild(li)
    	})
    }
    ,function(error) {
    // 异常处理
}).then(() => {},(error) => {
	console.log(error)
});

//存入数据
let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'contents': content
    }).then(function(object) {
        window.location.reload()
        console.log(object)
    })
})


//test
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'lxx来啦！！！！！！！！！！！'
// }).then(function(object) {
//   console.log('1234567');
// })