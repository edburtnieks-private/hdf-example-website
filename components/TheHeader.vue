<template>
  <header class="page-header">
    <n-link class="logo" to="/">
      <img src="~/assets/images/logo.png" alt="HDF Logo">
    </n-link>

    <div class="primary-navigation-container">
      <nav class="primary-navigation">
        <ul>
          <li>
            <n-link to="#about-section">
              Who We Are
            </n-link>
          </li>
          <li>
            <n-link to="#services">
              Services
            </n-link>
          </li>
          <li>
            <n-link to="#page-footer">
              Let's Talk
            </n-link>
          </li>
        </ul>
      </nav>

      <form class="search-form" :class="{active: searchFormActive}">
        <input
          id="search-input"
          ref="searchInput"
          class="search-input"
          :class="{active: searchInputActive}"
          type="text"
          name="search"
          @blur="deactivateSearchBox"
          @focus="activateSearchBox"
        >
        
        <button type="submit" class="search-button" tabindex="-1" @mouseover="focusSearchBox">
          <img src="~/assets/images/icons/search.svg" alt="Search Button">
        </button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    searchFormActive: false,
    searchInputActive: false
  }),
  methods: {
    focusSearchBox() {
      this.activateSearchBox();
      this.$refs.searchInput.focus();
    },
    activateSearchBox() {
      this.searchFormActive = true;
      this.searchInputActive = true;
    },
    deactivateSearchBox() {
      this.searchInputActive = false;
      setTimeout(() => {
        this.searchFormActive = false;
      }, 400);
    }
  }
};
</script>

<style lang="scss">
$navigation-item-spacing: 70px;
$search-button-size: 16px;
$search-input-padding-x: 10px;

.page-header {
  padding: 20px;

  @include desktop {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 1920px;
    padding: 50px;
    position: relative;
  }

  .logo {
    z-index: 2;
  }

  .primary-navigation-container {
    flex-direction: column;
    left: 0;
    line-height: 32px;
    margin-left: auto;
    padding: 100px 20px 20px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    @include desktop {
      align-items: center;
      flex-direction: row;
      height: 32px;
      padding: 0;
      position: relative;
      width: auto;
    }

    &::after {
      background-color: $c-white;
      content: '';
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;

      @include desktop {
        content: none;
      }
    }

    .primary-navigation {
      z-index: 1;

      @include desktop {
        margin-right: calc(
          #{$navigation-item-spacing} + #{$search-button-size}
        );
      }

      ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        padding: 0;

        @include desktop {
          flex-direction: row;
        }

        li {
          margin: 20px 0;
          text-align: right;
          z-index: 1;

          &:first-of-type {
            margin-top: 0;
          }

          &:last-of-type {
            margin-bottom: 40px;
          }

          @include desktop {
            margin: 0 calc(#{$navigation-item-spacing} / 2);

            &:first-of-type {
              margin-left: 0;
            }

            &:last-of-type {
              margin: 0 0 0 20px;
            }
          }
        }
      }
    }

    .search-form {
      bottom: 0;
      display: flex;
      height: 32px;
      left: 0;
      position: relative;
      top: 0;
      width: calc(100% + (#{$search-input-padding-x}));
      z-index: 1;

      @include desktop {
        overflow: hidden;
        position: absolute;
        z-index: 0;

        &.active {
          z-index: 2;
        }
      }

      .search-input {
        font-size: $base-font-size;
        line-height: 1;
        width: 100%;

        @include desktop {
          transform: translateY(-32px);
          transition: transform 0.4s;
          z-index: 2;
        }

        &.active {
          @include desktop {
            transform: translateY(0);
          }
        }
      }

      .search-button {
        padding: 0 10px;
      }
    }
  }
}
</style>
