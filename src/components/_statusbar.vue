<template>
  <div id="__statusbar" class="absolute top-0 w-full h-12 text-modern-dark bg-glass-400 backdrop-blur-lg border-b border-glass shadow-sm z-50">
    <div class="container flex items-center justify-between h-full px-4">
      <div id="__jam" class="font-bold text-lg" v-text="dataJam"></div>
      <div class="flex space-x-3">
        <div id="__signal" class="text-modern-primary">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.666 0.666504H15.666C15.1137 0.666504 14.666 1.11422 14.666 1.6665V10.3332C14.666 10.8855 15.1137 11.3332 15.666 11.3332H16.666C17.2183 11.3332 17.666 10.8855 17.666 10.3332V1.6665C17.666 1.11422 17.2183 0.666504 16.666 0.666504ZM10.9993 2.99984H11.9993C12.5516 2.99984 12.9993 3.44755 12.9993 3.99984V10.3332C12.9993 10.8855 12.5516 11.3332 11.9993 11.3332H10.9993C10.4471 11.3332 9.99935 10.8855 9.99935 10.3332V3.99984C9.99935 3.44755 10.4471 2.99984 10.9993 2.99984ZM7.33268 5.33317H6.33268C5.7804 5.33317 5.33268 5.78089 5.33268 6.33317V10.3332C5.33268 10.8855 5.7804 11.3332 6.33268 11.3332H7.33268C7.88497 11.3332 8.33268 10.8855 8.33268 10.3332V6.33317C8.33268 5.78089 7.88497 5.33317 7.33268 5.33317ZM2.66602 7.33317H1.66602C1.11373 7.33317 0.666016 7.78089 0.666016 8.33317V10.3332C0.666016 10.8855 1.11373 11.3332 1.66602 11.3332H2.66602C3.2183 11.3332 3.66602 10.8855 3.66602 10.3332V8.33317C3.66602 7.78089 3.2183 7.33317 2.66602 7.33317Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div id="__wifi" class="text-modern-primary">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.32997 2.60789C10.5459 2.60799 12.677 3.45943 14.283 4.98623C14.4039 5.1041 14.5972 5.10261 14.7163 4.98289L15.8723 3.81623C15.9326 3.7555 15.9662 3.67325 15.9657 3.58767C15.9652 3.50209 15.9306 3.42024 15.8696 3.36023C11.6545 -0.67932 5.00473 -0.67932 0.789632 3.36023C0.728573 3.4202 0.693929 3.50202 0.693366 3.5876C0.692803 3.67318 0.726368 3.75546 0.786632 3.81623L1.94297 4.98289C2.06199 5.1028 2.25544 5.10428 2.3763 4.98623C3.98245 3.45933 6.11385 2.60789 8.32997 2.60789ZM8.32997 6.40356C9.54745 6.40349 10.7215 6.85602 11.624 7.67323C11.746 7.78921 11.9383 7.78669 12.0573 7.66756L13.212 6.50089C13.2728 6.4397 13.3065 6.35668 13.3056 6.27042C13.3048 6.18415 13.2693 6.10184 13.2073 6.04189C10.4591 3.48551 6.20316 3.48551 3.45497 6.04189C3.39289 6.10184 3.35747 6.18419 3.35665 6.27049C3.35584 6.35678 3.3897 6.43979 3.45063 6.50089L4.60497 7.66756C4.72395 7.78669 4.91624 7.78921 5.0383 7.67323C5.94017 6.85656 7.11328 6.40406 8.32997 6.40356ZM10.643 8.95738C10.6447 9.04389 10.6107 9.12729 10.549 9.18789L8.55163 11.2036C8.49308 11.2628 8.41326 11.2961 8.32997 11.2961C8.24667 11.2961 8.16685 11.2628 8.1083 11.2036L6.11063 9.18789C6.04892 9.12724 6.01497 9.04381 6.0168 8.95731C6.01863 8.8708 6.05608 8.78888 6.1203 8.73089C7.39587 7.65201 9.26406 7.65201 10.5396 8.73089C10.6038 8.78893 10.6412 8.87087 10.643 8.95738Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div id="__battery" class="text-modern-primary">
          <svg
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.35"
              d="M2.66667 0.833496H19.3333C20.53 0.833496 21.5 1.80355 21.5 3.00016V9.00016C21.5 10.1968 20.53 11.1668 19.3333 11.1668H2.66667C1.47005 11.1668 0.5 10.1968 0.5 9.00016V3.00016C0.5 1.80354 1.47005 0.833496 2.66667 0.833496Z"
              stroke="currentColor"
            />
            <path
              opacity="0.4"
              d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4"
              fill="currentColor"
            />
            <path
              d="M2 3.66683C2 2.93045 2.59695 2.3335 3.33333 2.3335H18.6667C19.403 2.3335 20 2.93045 20 3.66683V8.3335C20 9.06987 19.403 9.66683 18.6667 9.66683H3.33333C2.59695 9.66683 2 9.06988 2 8.3335V3.66683Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("id");

export default {
  name: "component.statusbar",
  data() {
    return {
      dataJam: ""
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime() {
      this.dataJam = moment().format("hh:mm");
    }
  }
};
</script>

<style lang="scss" scoped>
#__statusbar {
  font-size: 15px;
  letter-spacing: -0.02em;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background-color: rgba($color: #ffffff, $alpha: 0.4);
  border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.25);
  transition: all 0.3s ease;

  #__jam {
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));

    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
