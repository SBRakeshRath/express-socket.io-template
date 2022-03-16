import socket from "~/bin/socket";
import { Socket, Server } from 'socket.io';

class socketCore {
    socket : Socket = socket.socket()
    io:Server = socket.io();
    events:(()=>vo)


    getSocket(){
        return this.socket ;
    }
    setIo(){
        return this.io
    }

    private runEvents (){

    }


}

export default socketCore;