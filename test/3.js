const net = require('net')
const app = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data);
        socket.write('hello');
    })
    socket.on('end', () => {
        socket.write('连接断开');
    })
    socket.write('welcome')
})
app.listen(9999, () => {
    console.log('server start in port 9999')
})