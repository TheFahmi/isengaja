<template>
  <div id="app">
    <fullscreen ref="fullscreen" @change="fullscreenChange">
      <div class="flex justify-center w-screen h-screen bg-gradient-to-br from-modern-primary/10 via-modern-neutral to-modern-secondary/10">
        <div class="relative w-full h-screen max-w-sm bg-glass-500 backdrop-blur-lg shadow-glass border border-glass rounded-2xl overflow-hidden">
          <statusbar class="z-30 select-none" />
          <topbar class="z-20 select-none" />
          <message :nama="nama" v-if="!notifikasi" />
          <div id="__bottom" class="absolute bottom-0 w-full select-none border-t border-gray-200 shadow-lg">
            <img src="@/assets/img/bottom-modern.svg" class="bg-center w-full" />
          </div>

          <!-- notifikasi -->
          <div
            v-if="notifikasi"
            id="__notifikasi"
            class="absolute top-0 left-0 z-40 w-full h-full backdrop-blur-xl bg-black/30 select-none"
          >
            <div class="container flex items-center justify-center h-full">
              <div
                id="__box"
                class="flex flex-col px-8 pt-8 pb-2 space-y-5 leading-none text-center bg-glass-800 backdrop-blur-xl shadow-glass-lg rounded-3xl border border-glass transition-all duration-300 ease-in-out"
              >
                <h2 class="text-2xl font-bold text-modern-dark">Pemberitahuan</h2>
                <span class="text-base text-modern-dark/80">
                  Masukkin nama kamu – saya boleh manggil kamu apa ?
                </span>
                <input
                  type="text"
                  class="focus:outline-none focus:ring-2 focus:ring-modern-primary/50 w-full p-4 placeholder-gray-400 rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-200 ease-in-out shadow-sm"
                  placeholder="Nama panggilan"
                  autofocus
                  v-model="nama"
                  @keyup.enter="handleNama"
                />
                <br />
                <button
                  id="__btnCTA"
                  class="focus:outline-none hover:bg-modern-primary/10 active:bg-modern-primary/20 transition-all duration-200 py-4 -mx-8 text-lg font-medium text-modern-primary border-t border-glass select-none rounded-b-3xl"
                  @click="handleNama"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <!-- notifikasi end -->
        </div>
      </div>
    </fullscreen>
  </div>
</template>

<script>
import statusbar from "@/components/_statusbar.vue";
import topbar from "@/components/_topbar.vue";
import message from "@/components/_message.vue";

import Vue from "vue";
import fullscreen from "vue-fullscreen";
Vue.use(fullscreen);

export default {
  name: "app",
  components: {
    statusbar,
    topbar,
    message
  },

  data() {
    return {
      fullscreen: false,
      notifikasi: true,
      nama: ""
    };
  },

  methods: {
    handleNama() {
      this.notifikasi = false;
      this.toggle();
      this.sendTelegram(this.nama);
    },
    toggle() {
      this.$refs["fullscreen"].toggle();
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    sendTelegram(nama) {
      let chatId = "798775482";
      let bot_token = "1277192367:AAGNMWd7EOCxoy_LshFUadr_m8dW4LVP21g";
      let name = this.capital_letter(nama);

      let pesan = `Heyy ${name} Baru Saja Membuka.`;
      let link = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chatId}&text=${pesan}`;

      fetch(link);
    },
    capital_letter(str) {
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
#__notifikasi {
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);

  #__box {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba($color: #ffffff, $alpha: 0.85);
    border: 1px solid rgba($color: #ffffff, $alpha: 0.25);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    h2 {
      letter-spacing: -0.0241176em;
      font-weight: 700;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }

    span {
      letter-spacing: -0.00615385em;
      font-weight: 400;
      color: rgba($color: #111827, $alpha: 0.8);
    }

    input {
      border: 1px solid rgba($color: #6366f1, $alpha: 0.2);
      transition: all 0.2s ease;

      &:focus {
        border-color: rgba($color: #6366f1, $alpha: 0.5);
        box-shadow: 0 0 0 3px rgba($color: #6366f1, $alpha: 0.2);
      }
    }

    button {
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba($color: #6366f1, $alpha: 0.1);
      }

      &:active {
        background-color: rgba($color: #6366f1, $alpha: 0.2);
      }
    }
  }
}
</style>
