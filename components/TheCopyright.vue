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
  flex-wrap: wrap;
  font-size: $fs-12;
  font-weight: $fw-bold;
  justify-content: space-between;
  line-height: $lh-16;
  padding: 20px;
  text-transform: uppercase;

  @include tablet {
    padding: 40px 150px;
  }
}
</style>
