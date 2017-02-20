/* WebSocket 服务器中间件
 * 监听端口：8112
 */
var io = require('socket.io');
var socket = io.listen('8112');
var clinetName;
var clinetObj;
socket.on ('connection',function(client){
    console.log('log: join');
    client.send('Welcome to wodedaima.com is webSocket server.');
    client.on('info',function(data){
        client.send('wait');
        console.log(data)
        setInterval(function () {
            var d = new Date();
            timeVal = d.getTime();
            for (var key in client.rooms){
                clinetName = key;
            }
            client.send(clinetName + ' [' + d + ']');
            client.emit('news','{get:"1.html"}');
            console.log(clinetName + ' [' + d + ']');
        },3000000)
    });
});

function hi(){
    clinetObj.send('hi me');
}
//_g_FindArrayRepeat 查找数组中名称是否存在
//如果存在返回数组下标，不存在返回0
// f 查找的字符串 a 数组
function _g_FindArrayRepeat(f,a){
    for (i = 0  ; i < a.length ; i++){
        if (a[i] == f){
            return i;
        }else{
            return 0;
        }
    }
}


socket.on('disconnect', function () {
    client.emit('user disconnected');
});
