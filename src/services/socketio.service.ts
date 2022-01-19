import { io } from "socket.io-client";

export class SocketioService {
  private socket: any;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
  }
}
