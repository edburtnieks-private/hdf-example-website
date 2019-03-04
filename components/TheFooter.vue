<template>
  <footer id="page-footer" class="page-footer">
    <div class="inner">
      <n-link class="logo" to="/">
        <img src="~/assets/images/logo.png" alt="HDF Logo">
      </n-link>

      <section class="info">
        <address>
          <h3><span>Institut HDF</span>, d.d.</h3>

          <p class="address">
            Janka Rakuše 1, 10000 Zagreb, Hrvatska
          </p>

          <p class="phone">
            Head Office: +385 01 6125 125
          </p>

          <p class="fax">
            Fax: +385 01 6125 401
          </p>

          <p class="email">
            E-mail: info@hdf.hr
          </p>

          <n-link class="directions" to="/">
            <img src="~/assets/images/icons/marker.svg" alt="Map marker">Find Us On Map
          </n-link>
        </address>

        <div class="navigation-wrapper">
          <h3>Menu</h3>

          <div class="inner">
            <nav class="primary-navigation">
              <ul>
                <li>
                  <n-link to="/">
                    Who We Are
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    Sectors
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    Services
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    References
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    Let's Talk
                  </n-link>
                </li>
              </ul>
            </nav>

            <nav class="secondary-navigation">
              <ul>
                <li>
                  <n-link to="/">
                    News &and; Press
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    Careers
                  </n-link>
                </li>
                <li>
                  <n-link to="/">
                    Blog
                  </n-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="certification-image">
          <img v-lazy="certificationImage" alt="HDF Certification">
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import certificationImage from '~/assets/images/certification.png';

export default {
  data: () => ({
    certificationImage
  })
};
</script>

<style lang="scss">
.page-footer {
  display: flex;
  justify-content: center;
  margin: 180px 0;
  max-width: 1170px;
  padding: 0 20px;

  @include tablet {
    display: block;
    justify-content: space-between;
  }

  @include desktop {
    padding: 0 50px;
  }

  @include container-inner {
    margin: 540px auto 165px;
    padding: 0;
  }

  .inner {
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 40px;

      @include tablet {
        flex-direction: row;
      }

      address {
        font-style: normal;

        h3 {
          margin-bottom: 15px;
        }

        span {
          text-transform: uppercase;
        }

        .address,
        .fax {
          margin-bottom: 30px;
        }

        .directions {
          align-items: center;
          display: flex;
          margin-top: 30px;

          @include tablet {
            margin-top: 55px;
          }

          img {
            margin-right: 15px;
          }
        }
      }

      .navigation-wrapper {
        margin: 50px 0;

        @include tablet {
          margin: 0;
        }

        h3 {
          margin-bottom: 30px;
          text-transform: uppercase;
        }

        .inner {
          display: flex;
        }

        .primary-navigation {
          margin-right: 100px;

          @include tablet {
            margin-right: 145px;
          }
        }

        ul {
          font-size: $fs-14;
          line-height: $lh-26;
          list-style-type: none;
          margin: 0;
          padding: 0;

          a {
            font-weight: $fw-regular;
            text-transform: none;

            &::after {
              height: 1px;
            }
          }
        }
      }

      .certification-image {
        align-self: center;
      }
    }
  }
}
</style>
