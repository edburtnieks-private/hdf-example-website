<template>
  <section class="copyright-section">
    <p>Copyright (c) 2009. Institut HDF d.d.</p>
    <p>Design by EA93</p>
  </section>
</template>

<style lang="scss">
.copyright-section {
  background-color: $c-blue-dianne;
  color: $c-bali-hai;
  display: flex;
  font-size: $fs-12;
  line-height: $lh-16;
  font-weight: $fw-bold;
  justify-content: space-between;
  padding: 20px;
  text-transform: uppercase;
  flex-wrap: wrap;

  @include tablet {
    padding: 40px 150px;
  }
}
</style>
