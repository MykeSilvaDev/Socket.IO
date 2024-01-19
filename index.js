
                                    /*  Aula 333 Iniciando 
                                        Aula 335 Recebendo evento no Back   */



var express = require ("express");
const { emit } = require("process");
const { socket } = require("socket.io");
var app = express();
var http = require("http").createServer(app); 
var io = require ("socket.io")(http);

io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log("X desconectou" + socket.id);
    })

    /*(1-335) DURANTE A CONEXÃO DO SOCKET EU PRECISO BINDAR UM EVENTO NELE */
    /*Quando o socket enviar um evento mensagem, vou capturar esse evento e passa um dado  */
    socket.on("msg", (data) => {
    /*(2-335) SE O CLIENTE DIGITAR ALGUMA MENSAGEM NO INPUT, COMO EMAIL E NOME, VOU EMITIR UMA RESPOSTA DE VOLTA PARA ELE*/
        io.emit("showmsg",data);
        console.log(data)
    })
});
 

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index"); 
})

http.listen(8080, () => {
    console.log("APP RODANDO");
})