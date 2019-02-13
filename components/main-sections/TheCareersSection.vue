<template>
  <section class="careers-section">
    <div class="img-wrapper">
      <img src="~/assets/images/careers/careers.png" alt="Careers Image">
    </div>

    <div class="careers-wrapper">
      <h2>Careers</h2>

      <h4>Invitation to experts interested in project co-operation</h4>

      <n-link to="/">
        Collaborate With Us
      </n-link>
    </div>
  </section>
</template>

<style lang="scss">
.careers-section {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 180px 0 0;

  .img-wrapper {
    margin: 0 auto 50px;
    max-height: 412px;
    position: relative;
    width: 100%;

    @media (min-width: 1186px) {
      width: auto;
    }

    @media (min-width: 1756px) {
      margin: 0;
    }

    &::before {
      @include circle-gradient(63px) {
        display: none;

        @include tablet {
          display: block;
          right: 125px;
          top: calc(100% + 75px);
        }
      }
    }

    &::after {
      @include circle-gradient(160px) {
        display: none;

        @include tablet {
          display: block;
          left: 250px;
          top: calc(100% + 155px);
        }
      }
    }

    img {
      width: 100%;
    }
  }

  @include desktop {
    margin-top: 300px;
  }

  .careers-wrapper {
    margin: 0 auto;
    max-width: 570px;
    padding: 0 20px;
    position: relative;
    text-align: center;

    &::before {
      @include circle-gradient(412px) {
        display: none;

        @include tablet {
          display: block;
          left: calc(50% - 412px / 2);
          top: 15px;
        }
      }
    }

    h4 {
      font-size: $fs-22;
      line-height: $lh-26;
      margin: 30px 0 40px;

      @include tablet {
        font-size: $fs-38;
        line-height: $lh-46;
      }
    }
  }
}
</style>
