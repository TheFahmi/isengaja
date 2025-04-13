<template>
  <div id="__message" class="absolute w-full">
    <div class="container flex flex-col h-full pb-1 space-y-3 overflow-y-auto px-4">
      <div
        id="__date"
        class="flex justify-center mt-4 mb-4 space-x-2 text-xs text-modern-dark/70 bg-glass-300 backdrop-blur-md py-2 px-4 rounded-full mx-auto shadow-sm"
      >
        <span class="font-semibold">{{ dataHari }}</span>
        <span class="font-light">{{ dataJam }}</span>
      </div>
      <bubble
        class="capitalize transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="right"
        :pesan="dataUcapan + ' ' + nama + ' 😊.'"
      />
      <bubble
        class="transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="right"
        pesan="Aku mau ngomong nih sama kamu.."
      />
      <br />
      <bubble
        class="transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="left"
        pesan="Ngomong apa?"
        :read="dataRead"
      />
      <br />
      <bubble
        class="transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="right"
        pesan="Ya.."
      />
      <bubble
        class="transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="right"
        pesan="Kita sering berantem terus"
      />
      <bubble
        class="transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:scale-[1.02]"
        arah="right"
        pesan="Kamu mau gak maafin aku?"
      />
      <br />
      <jawaban class="z-50" />
      <br />
    </div>
  </div>
</template>

<script>
import bubble from "@/components/message/_bubble.vue";
import jawaban from "@/components/message/_jawaban.vue";
import moment from "moment";
moment.locale("id");

export default {
  name: "component.message",
  components: {
    bubble,
    jawaban
  },
  props: {
    nama: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dataHari: "",
      dataJam: "",
      dataUcapan: "",
      dataRead: ""
    };
  },
  created() {
    this.dataHari = moment().format("dddd");
    this.dataJam = moment()
      .add(-5, "minutes")
      .format("hh:mm");
    this.dataRead = moment()
      .add(-3, "minutes")
      .format("hh:mm");
    this.dataUcapan = moment().format("A");
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#__message {
  top: 130px;
  bottom: 135px;

  #__date {
    font-size: 0.75rem;
    letter-spacing: 0.02em;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }

    span {
      transition: all 0.3s ease;

      &.font-semibold {
        color: rgba($color: #111827, $alpha: 0.8);
      }

      &.font-light {
        color: rgba($color: #111827, $alpha: 0.6);
      }
    }
  }
}
</style>
