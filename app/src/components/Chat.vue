<template>
  <main>
    <div class="container p-0" style="margin-top: 5%">
      <div class="card">
        <div class="row g-0">
          <div class="col-12 col-lg-12 col-xl-12">
            <div class="py-2 px-4 border-bottom d-none d-lg-block">
              <div class="d-flex align-items-center py-1">
                <div class="position-relative"></div>
              </div>
            </div>

            <div
              class="position-relative"
              id="boardMessage"
              style="max-height: 300px; overflow: hidden; overflow-y: scroll"
            >
              <div class="chat-messages p-4">
                <template v-for="(message, index) in messages">
                  <div class="chat-message-right mb-4" :key="index">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        class="rounded-circle mr-1"
                        alt="Chris Wood"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap mt-2">
                        {{ message.Date }}
                      </div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                      <div class="font-weight-bold mb-1">
                        {{ message.User }}
                      </div>
                      {{ message.Text }}
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <div class="flex-grow-0 py-3 px-4 border-top">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite sua mensagem"
                  v-model="text"
                  v-on:keyup.enter="sendMessage"
                />
                <button class="btn btn-primary" v-on:click="sendMessage">
                  <i class="fa fa-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      text: "",
      messages: [],
      socket: io("localhost:8082"),
      loggedUser: ''
    };
  },
  methods: {
    sendMessage: function (event) {
      this.socket.emit("SENDMESSAGE", {
        User: this.user,
        Text: this.text,
        Date: new Date()
      });
      this.text = "";
      
    },
    scroollToDown() {
      let boardMessage = document.querySelector("#boardMessage");
      let message = document.querySelector('.chat-messages');
      boardMessage.scrollTop = message.clientHeight;
    },
  },
  mounted() {
    this.user = sessionStorage.getItem("LoggedUser");
    this.socket.on("MESSAGE", (data) => {
      this.messages.push(data);
    });
  },
  updated(){
    //TODO: talvez aqui nao seja o melhor lugar
    //para o scrollToDown, o updated dispara toda vez
    //que o DOM re-renderiza
    this.scroollToDown();
  }
};
</script>

<style>
#boardMessage {
  scroll-behavior: smooth;
}
</style>