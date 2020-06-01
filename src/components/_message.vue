<template>
  <div id="__message" class="absolute w-full">
    <div class="container flex flex-col h-full pb-1 space-y-1 overflow-y-auto">
      <div
        id="__date"
        class="flex justify-center mt-2 mb-2 space-x-1 text-xs text-gray-600"
      >
        <span class="font-semibold">{{ dataHari }}</span>
        <span class="font-light">{{ dataJam }}</span>
      </div>
      <bubble
        class="capitalize"
        arah="right"
        :pesan="dataUcapan + ' ' + nama + ' 😊.'"
      />
      <bubble arah="right" pesan="Aku mau ngomong nih sama kamu.." />
      <br />
      <bubble arah="left" pesan="Ngomong apa?" :read="dataRead" />
      <br />
      <bubble arah="right" pesan="Ya.." />
      <bubble arah="right" pesan="Kita sering berantem terus" />
      <bubble arah="right" pesan="Kamu mau gak maafin aku?" />
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
  top: 120px;
  bottom: 135px;
}
</style>
