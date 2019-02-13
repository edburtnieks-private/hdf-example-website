<template>
  <main class="styleguide-container">
    <h1>HDF Example Website Styleguide</h1>

    <section class="section">
      <h2 class="title">
        Logos
      </h2>

      <section class="item-wrapper">
        <img class="item" src="~assets/images/logo.png" alt="HDF Logo">

        <section class="code-wrapper">
          <code>&lt;img src="./images/logo.png" alt="HDF Logo"&gt;</code>
        </section>
      </section>
    </section>

    <section class="section">
      <h2 class="title">
        Custom Components
      </h2>

      <section class="item-wrapper">
        <div class="arrow-wrapper">
          <div class="arrow" />
        </div>

        <section class="code-wrapper">
          <code>
            &lt;div class="arrow-wrapper"&gt;&lt;div class="arrow" /&gt;&lt;/div&gt;
          </code>
        </section>
      </section>
    </section>

    <section class="section">
      <h2 class="title">
        Typography
      </h2>

      <section class="item-wrapper">
        <h2 class="item">
          Heading 2
        </h2>

        <section class="code-wrapper">
          <code>&lt;h2&gt;Heading 2&lt;/h2&gt;</code>
        </section>
      </section>

      <section class="item-wrapper">
        <h3 class="item">
          Heading 3
        </h3>

        <section class="code-wrapper">
          <code>&lt;h3&gt;Heading 3&lt;/h3&gt;</code>
        </section>
      </section>

      <section class="item-wrapper">
        <h4 class="item">
          Heading 4
        </h4>

        <section class="code-wrapper">
          <code>&lt;h4&gt;Heading 4&lt;/h4&gt;</code>
        </section>
      </section>

      <section class="item-wrapper">
        <p class="item">
          Paragraph
        </p>

        <section class="code-wrapper">
          <code>&lt;p&gt;Paragraph&lt;/p&gt;</code>
        </section>
      </section>

      <section class="item-wrapper">
        <n-link class="item" to="/">
          Link
        </n-link>

        <section class="code-wrapper">
          <code>&lt;n-link to="/"&gt;Link&lt;/n-link&gt;</code>
        </section>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.styleguide-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1366px;

  h1 {
    border-bottom: 2px solid $c-blue-dianne;
    flex-basis: 100%;
    margin: 20px 20px;
    max-width: 768px;
    padding-bottom: 5px;
    text-transform: uppercase;

    @include desktop {
      margin: 50px 20px;
    }
  }

  .section {
    flex-basis: 100%;
    margin: 20px 20px;
    max-width: 768px;

    @include desktop {
      flex-basis: calc(50% - 40px);
      margin: 50px 20px;
    }

    .title {
      border-bottom: 1px solid $c-blue-dianne;
      margin-bottom: 25px;
      max-width: 200px;
      padding-bottom: 5px;
    }

    .item-wrapper {
      align-items: center;
      display: flex;
      margin: 25px 0 0 10px;

      @include desktop {
        margin-left: 50px;
      }

      .code-wrapper {
        margin-left: auto;
        width: calc(100% - 768px / 4);
      }

      code {
        background-color: $c-bali-hai;
        color: $c-white;
        display: inline-block;
        font-size: 12px;
        padding: 5px 10px;
        right: 0;
      }
    }
  }
}
</style>
