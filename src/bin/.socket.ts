import { Server, Socket } from "socket.io";

class tests {
  socketInstance!: Socket;
  serverInstance!: Server;
  events = [];
  initialize(sio: Server) {
    this.serverInstance = sio;

    sio.on("connection", this.connectionCallBack);
  }
  connectionCallBack(s: Socket) {
    "use strict";

    this.socketInstance = s;
    console.log("hello");
     new tests().mine()
  }

  mine() {
    console.log("dskhfgfg");
  }
}

export default new tests();
