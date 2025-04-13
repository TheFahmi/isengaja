<template>
  <div
    id="__topbar"
    class="absolute top-0 flex items-end w-full border-b border-glass mt-12 bg-glass-300 backdrop-blur-md"
  >
    <div class="container flex items-center justify-between py-4 px-4">
      <div id="__back" class="p-2 rounded-full hover:bg-glass-400 active:bg-glass-500 transition-all duration-300 ease-in-out cursor-pointer text-modern-primary">
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="13"
            height="22"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3298 0.985511L0.965966 9.97547C0.438428 10.4812 0.438428 11.3255 0.965966 11.8333L10.3298 20.8212C10.904 21.3726 11.8106 21.3726 12.3849 20.8212C12.9924 20.2375 12.9924 19.2656 12.3849 18.6809L4.54243 11.1521C4.40016 11.016 4.40016 10.7907 4.54243 10.6546L12.3849 3.12578C12.9924 2.54217 12.9924 1.57017 12.3849 0.985511C12.0972 0.711358 11.7275 0.573242 11.3579 0.573242C10.9871 0.573242 10.6174 0.711358 10.3298 0.985511Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3298 0.985511L0.965966 9.97547C0.438428 10.4812 0.438428 11.3255 0.965966 11.8333L10.3298 20.8212C10.904 21.3726 11.8106 21.3726 12.3849 20.8212C12.9924 20.2375 12.9924 19.2656 12.3849 18.6809L4.54243 11.1521C4.40016 11.016 4.40016 10.7907 4.54243 10.6546L12.3849 3.12578C12.9924 2.54217 12.9924 1.57017 12.3849 0.985511C12.0972 0.711358 11.7275 0.573242 11.3579 0.573242C10.9871 0.573242 10.6174 0.711358 10.3298 0.985511Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <div id="__profile" class="flex flex-col items-center space-y-2">
        <div class="p-1 bg-gradient-to-r from-modern-primary to-modern-secondary rounded-full shadow-lg">
          <img src="@/assets/img/Fahmi.jpg" class="w-14 h-14 rounded-full border-2 border-white object-cover" />
        </div>
        <span id="__name" class="font-semibold text-modern-dark">Muhammad Fahmi Hassan</span>
      </div>
      <div id="__blank" class="w-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component.topbar"
};
</script>

<style lang="scss" scoped>
#__topbar {
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  height: 130px;
  transition: all 0.3s ease;

  #__back {
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateX(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    &:active {
      transform: translateX(-4px);
    }
  }

  #__profile {
    transition: all 0.3s ease;

    img {
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
    }

    #__name {
      font-size: 15px;
      font-weight: 600;
      transition: all 0.3s ease;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

      &:hover {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        transform: translateY(-1px);
      }
    }
  }
}
</style>
