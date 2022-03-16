import { Server, Socket } from "socket.io";

class socket {
  socketInstance!: Socket;
  serverInstance!: Server;
  events = [];
  self = this;

  test() {
    console.log("test");
  }

  initialize(sio: Server) {
    
    socket.prototype.serverInstance = sio;

    sio.on("connection", this.connectionCallBack);
  }
  connectionCallBack(s: Socket) {
    socket.prototype.socketInstance = s;
    console.log("connected");

    socket.prototype.runEvents()
  }

  on() {
    const eventObj = {
      message: () => {
        console.log("message Received");
      },
    };

    this.socketInstance.on("message", eventObj.message);
  }

  socket() {
    return this.socketInstance;
  }
  io() {
    return this.serverInstance;
  }
  runEvents() {
    console.log("bind___")
  }
}

export default new socket();
