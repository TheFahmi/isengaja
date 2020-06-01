<template>
  <div
    id="__topbar"
    class=" absolute top-0 flex items-end w-full border-b border-gray-800 border-opacity-25"
  >
    <div class="container flex items-center justify-between pb-2">
      <div id="__back">
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
              fill="#007AFF"
            />
          </g>
        </svg>
      </div>
      <div id="__profile" class="flex flex-col items-center space-y-px">
        <img src="@/assets/img/Fahmi.jpg" class="w-10 rounded-full" />
        <span id="__name">Muhammad Fahmi Hassan</span>
      </div>
      <div id="__blank"></div>
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
  background-color: #f8f8f8;
  height: 120px;

  #__profile {
    #__name {
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
