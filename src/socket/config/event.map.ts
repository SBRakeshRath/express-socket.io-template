import { Socket, Server } from "socket.io";
import socketConfig from "./socket.config";
class eventMap {
  socket!: Socket;
  io!: Server;
  events: (() => void)[] = [];

  constructor(socket: Socket, io: Server) {
    this.socket = socket;
    this.io = io;
  }

  addEvent(fun: () => void) {
    this.events.push(fun);
  }

  registerEvents() {
    this.events.forEach((event) => {
      event();
    });
  }
}

export default eventMap;
