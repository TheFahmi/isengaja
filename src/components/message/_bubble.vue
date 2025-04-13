<template>
  <div
    id="__bubble"
    class="flex flex-col text-sm"
    :class="{
      'items-end text-white': arah == 'left',
      'items-start text-modern-dark': arah == 'right'
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
    <small v-if="read != ''" class="mx-3 mb-1 text-modern-dark/60 font-medium">
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
    background: rgba($color: #f9fafb, $alpha: 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba($color: #ffffff, $alpha: 0.25);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }
  .right_bg {
    background: linear-gradient(135deg, rgba($color: #3b82f6, $alpha: 0.9), rgba($color: #8b5cf6, $alpha: 0.9));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba($color: #ffffff, $alpha: 0.25);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  span {
    padding: 12px 18px;
    border-radius: 20px;
    max-width: 280px;
    transition: all 0.3s ease;
    line-height: 1.4;

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }
  }
}
</style>
