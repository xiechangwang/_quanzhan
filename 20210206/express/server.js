const express=require('express');
const server = express()
const port = 8080

server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`)
})

//接口
//Get
server.get('/', (req, res) => {
  res.send('我是get')
})
//Post
server.post('/data', (req, res) => {
  res.send('我是post')
})
//Use-通用

//静态文件