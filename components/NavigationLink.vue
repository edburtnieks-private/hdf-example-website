<template>
  <li>
    <button v-if="button" class="link" v-text="text" />

    <n-link v-else :to="link">
      <img v-if="image" :src="image" :alt="altText">

      {{ text }}
    </n-link>
  </li>
</template>

<script>
export default {
  props: {
    button: Boolean,
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    },
    text: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    }
  }
};
</script>
