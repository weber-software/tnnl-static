const os = require('os');
const http = require('http');
const tnnl = require('tnnl');
const express = require('express');
const app = express();

const token = process.env.TOKEN;

const ClientHandler = tnnl.ClientHandler;

app.use(express.static('/data'));
 
const server = app.listen(0);
 
const clientHandler = new ClientHandler({
  token,
  onConnect: ClientHandler.connectHttpServer(server),
  onStateChanged: console.log,
});
 
process.on('SIGINT', () => {
  clientHandler.stop();
  server.close();
});
 
clientHandler.start();
