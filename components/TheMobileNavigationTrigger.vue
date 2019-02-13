<script>
const input = {
  template: `
    <input
      id="mobile-navigation-trigger"
      type="checkbox"
      class="mobile-navigation-trigger"
      name="mobile-navigation-trigger"
    >`
};

const label = {
  template: `
    <label class="mobile-navigation-button" for="mobile-navigation-trigger">
      <div class="bars" />
    </label>`
};

export default {
  functional: true,
  render(createElement) {
    return [createElement(input), createElement(label)];
  }
};
</script>


<style lang="scss">
.mobile-navigation-trigger {
  display: none;

  + .mobile-navigation-button {
    background-color: transparent;
    cursor: pointer;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 20px;
    z-index: 2;

    @include desktop {
      display: none;
      right: 30px;
    }

    .bars,
    .bars::before,
    .bars::after {
      background-color: $c-blue-dianne;
      content: '';
      height: 2px;
      transition: transform 0.2s;
      width: 20px;
    }

    .bars {
      &::before {
        position: absolute;
        top: 14px;
      }

      &::after {
        bottom: 14px;
        position: absolute;
      }
    }
  }

  &:not(:checked) {
    ~ .page-header .primary-navigation-container,
    ~ .container .page-sidebar {
      display: none;

      @include desktop {
        display: flex;
      }
    }
  }

  &:checked {
    + .mobile-navigation-button {
      .bars {
        height: 0;

        &::before {
          top: 20px;
          transform: rotate(45deg);
        }

        &::after {
          top: 20px;
          transform: rotate(-45deg);
        }
      }
    }

    ~ .page-header .primary-navigation-container {
      display: flex;
    }

    ~ .container .page-sidebar {
      display: flex;
    }
  }
}
</style>
