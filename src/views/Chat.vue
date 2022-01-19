<template>
   <div id='v-app'>
        <h1>{{information.title}}</h1>
            <input type="text"  v-model="information.text"/>
            <button @click="sendMessage">send</button>

        <p>
        <ul>
            <li v-for='msg, i in information.message' :key="i">{{msg}}</li>
        </ul>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { io } from "socket.io-client";

export default defineComponent({
  name: "Chat",
  setup() {
    const information = reactive({
      title: "Websocket",
      text: "",
      message: ["mess 1", "mess2"],
    });

    const sendMessage = () => {
      // information.message.push(information.text);
      socket.emit("msgToServer", information.text);
    };

    const receiveMessage = (msg: string) => {
      information.message.push(msg);
    };

    const socket = io("http://localhost:3001/",{path:'/websocket'});
    socket.on("msgToClient", (msg) => {
      console.log("hi", msg);
      receiveMessage(msg);
    });

    return {
      information,
      sendMessage,
    };
  },
});
</script>

