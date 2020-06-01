<template>
  <div
    id="__bubble"
    class="flex flex-col text-sm"
    :class="{
      'items-end text-white': arah == 'left',
      'items-start text-black': arah == 'right'
    }"
  >
    <span
      :class="{
        right_bg: arah == 'left',
        left_bg: arah == 'right'
      }"
    >
      {{ pesan }}
    </span>
    <small v-if="read != ''" class="mx-3 mb-px text-gray-600">
      <b>Dibaca</b> {{ read }}
    </small>
  </div>
</template>

<script>
export default {
  name: "message.bubble",
  props: {
    arah: {
      type: String,
      required: true
    },
    pesan: {
      type: String,
      required: true
    },
    read: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
#__bubble {
  .left_bg {
    background: #e5e6ea;
  }
  .right_bg {
    background: linear-gradient(180deg, #40b2fb -2.94%, #36a9fc 100%);
  }

  span {
    padding: 8px 15px;
    border-radius: 20px;
    max-width: 280px;
  }
}
</style>
