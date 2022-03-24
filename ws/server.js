const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 9595 },()=>{
    console.log('server started')
})
wss.on('connection', (ws) => {
   ws.on('message', (data) => {
      wss.clients.forEach(function(client) {
         client.send(data.toString());
      });
   })
})
wss.on('listening',()=>{
   console.log('listening on 9595')
})
