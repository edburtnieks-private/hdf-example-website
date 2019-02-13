<template>
  <div class="post">
    <h2>
      <slot name="date" />  
    </h2>
    <n-link to="/">
      <h3>
        <slot name="title" />
      </h3>
    </n-link>
  </div>
</template>

<style lang="scss">
.post {
  margin-bottom: 50px;

  h2 {
    margin-bottom: 25px;
  }

  a {
    display: inline-block;
    text-transform: none;
  }
}
</style>
