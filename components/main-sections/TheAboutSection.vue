<template>
  <section class="about-section">
    <h2>About</h2>

    <main>
      <h3>Vestibulum nibh ligula, tempus eu porttitor sit amet</h3>

      <section>
        <p>
          Nam sollicitudin libero eget risus elementum blandit. Integer
          efficitur quis nisl et venenatis. Nullam iaculis tempor molestie.
          Praesent lectus ligula, consectetur eu tortor id, pretium molestie
          ante. Donec consectetur eu tortor tincidunt urna dui, sit amet
          dignissm quam fermentum sed.
        </p>

        <n-link to="/">
          Find out more
        </n-link>
      </section>
    </main>
  </section>
</template>

<style lang="scss">
.about-section {
  margin: 140px auto 215px;
  max-width: $bp-container-inner;
  padding: 0 20px;

  @include desktop {
    padding: 0 50px;
  }

  @include container-inner {
    margin: 140px auto 215px;
    padding: 0;
  }

  h2 {
    margin-bottom: 60px;
  }

  main {
    @include tablet {
      display: flex;
      justify-content: space-between;
    }

    h3 {
      margin: 0 50px 10px 0;

      @include tablet {
        margin: 0 50px 0 0;
        max-width: 470px;
      }
    }

    section {
      p {
        margin-bottom: 60px;

        @include tablet {
          max-width: 570px;
        }
      }
    }
  }
}
</style>
