<template>
  <div class="c-link-btn-wrap" v-bind:class="addClass">
    <a class="c-link-btn" v-bind:href="to">{{ message }}</a>
  </div>
</template>

<script>
export default {
  name: 'linkButton',
  props: {
    to: String,
    message: String,
    addClass: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/sass/_reset.scss';

.c-link-btn-wrap {
  .c-link-btn {
    font-size: 18px;
    line-height: 1.5;
    text-decoration: none;
    color: #fff;
    background-color: #01d1b2;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    transition: opacity 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    @include pc {
      min-width: 186px;
      min-height: 60px;
    }

    @include sp {
      font-size: 14px;
      min-height: 42px;
      &::before {
        width: 5px;
        height: 5px;
      }
    }

    &:visited {
      color: #fff;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &:not(.back-btn) {
    .c-link-btn {
      padding: 5px 45px 5px 24px;
      @include sp {
        padding: 5px 30px 5px 15px;
      }
      &::before {
        right: 20px;
        transform: rotate(45deg);

        @include sp {
          right: 12px;
        }
      }
    }
  }

  &.back-btn {
    .c-link-btn {
      padding: 5px 24px 5px 45px;
      @include sp {
        padding: 5px 15px 5px 30px;
      }
      &::before {
        left: 20px;
        transform: rotate(-135deg);

        @include sp {
          left: 12px;
        }
      }
    }
  }
}
</style>
