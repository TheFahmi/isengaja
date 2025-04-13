<template>
  <div class="grid grid-cols-2 gap-3">
    <span
      class="hover:bg-modern-primary hover:shadow-lg hover:-translate-y-1 flex items-center justify-center px-4 py-3 font-bold text-center text-white uppercase bg-gradient-to-r from-modern-primary to-modern-secondary rounded-xl cursor-pointer select-none transition-all duration-300 ease-in-out shadow-md"
      @click="handleJawaban('yes')"
    >
      Mau dong 😍
    </span>
    <span
      class="hover:bg-modern-accent hover:shadow-lg hover:-translate-y-1 flex items-center justify-center px-4 py-3 font-bold text-center text-white uppercase bg-gradient-to-r from-modern-secondary to-modern-accent rounded-xl cursor-pointer select-none transition-all duration-300 ease-in-out shadow-md"
      @click="handleJawaban('no')"
    >
      Gak deh
    </span>

    <!-- JAWABAN -->
    <div
      id="__jawaban"
      class="absolute top-0 left-0 w-full h-screen backdrop-blur-xl bg-black/40"
      v-if="jawaban"
    >
      <div class="container flex flex-col items-center justify-center h-full">
        <div class="relative bg-glass-700 backdrop-blur-xl p-3 rounded-2xl shadow-glass-lg border border-glass transition-all duration-300 ease-in-out">
          <video
            class="object-cover object-center overflow-hidden rounded-xl shadow-xl"
            autoplay
          >
            <source
              v-if="dataJawaban == 'yes'"
              src="@/assets/video/yes.mp4"
              type="video/mp4"
            />
            <source
              v-if="dataJawaban == 'no'"
              src="@/assets/video/no.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <button
          @click="handleReload"
          class="mt-6 flex items-center justify-center w-12 h-12 text-2xl bg-glass-700 backdrop-blur-xl rounded-full cursor-pointer select-none shadow-glass border border-glass hover:bg-glass-800 hover:shadow-glass-lg transition-all duration-300 ease-in-out"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message.jawaban",
  data() {
    return {
      jawaban: false,
      dataJawaban: ""
    };
  },
  methods: {
    handleJawaban(jawaban) {
      this.jawaban = true;
      this.dataJawaban = jawaban;
      this.sendTelegram(jawaban);
    },
    handleReload() {
      window.location.reload();
    },
    sendTelegram(jawaban) {
      let chatId = "871965179";
      let bot_token = "891680605:AAFKCxDRVmBTtH3vP3LIyTP_IZzzkgC0IUw";
      let jkamu = "";

      if (jawaban == "yes") {
        jkamu = "Diterima 😍";
      }
      if (jawaban == "no") {
        jkamu = "Ditolak ☹";
      }

      let pesan = `Kamu ${jkamu}`;
      let link = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chatId}&text=${pesan}`;

      fetch(link);
    }
  }
};
</script>

<style lang="scss" scoped>
#__jawaban {
  margin-top: -120px;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);

  video {
    width: 325px !important;
    height: 325px !important;
    transition: all 0.3s ease;
  }

  button {
    color: rgba($color: #ffffff, $alpha: 0.9);
    transition: all 0.3s ease;

    &:hover {
      color: #ffffff;
      transform: rotate(90deg);
    }
  }

  .bg-glass-700 {
    background-color: rgba($color: #ffffff, $alpha: 0.7);
  }

  .bg-glass-800 {
    background-color: rgba($color: #ffffff, $alpha: 0.8);
  }
}
</style>
