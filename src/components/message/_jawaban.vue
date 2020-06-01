<template>
  <div class="grid grid-cols-2 gap-2">
    <span
      class="hover:bg-blue-700 flex items-center justify-center px-4 py-2 font-bold text-center text-white uppercase bg-blue-600 rounded cursor-pointer select-none"
      @click="handleJawaban('yes')"
    >
      Mau dong 😍
    </span>
    <span
      class="hover:bg-blue-700 flex items-center justify-center px-4 py-2 font-bold text-center text-white uppercase bg-blue-600 rounded cursor-pointer select-none"
      @click="handleJawaban('no')"
    >
      Gak deh
    </span>

    <!-- JAWABAN -->
    <div
      id="__jawaban"
      class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75"
      v-if="jawaban"
    >
      <div class="container flex flex-col items-center justify-center h-full">
        <video
          class="object-cover object-center overflow-hidden rounded-lg shadow-xl"
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
        <a
          @click="handleReload"
          class="absolute text-5xl cursor-pointer select-none"
        >
          ✖
        </a>
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
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  video {
    width: 325px !important;
    height: 325px !important;
  }

  a {
    top: 25px;
  }
}
</style>
