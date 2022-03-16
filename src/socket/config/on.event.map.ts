import eventMap from "./event.map";

class onEventMap extends eventMap {
  error(error: Error) {
    console.log(error);
  }

  message(hello:string,world:string){

    console.log(hello,world)

  }
  events() {
    return {
      " error": this.error,
    };
  }
}
