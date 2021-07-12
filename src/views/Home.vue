<template>
  <div class="form-container">
    <div class="form-box">
      <div class="title-wrap">
        <span class="step">STEP1</span>
        <h1 class="title">お客様の情報を入力してください。</h1>
      </div>
      <div class="input-wrapper">
        <div class="box">
          <h2 class="inquiry-title"><span class="line">性別</span></h2>
          <label for="man"> <input id="man" type="radio" value="男性" v-model="gender" /> 男性 </label>
          <label for="woman"> <input id="woman" type="radio" value="女性" v-model="gender" /> 女性 </label>
        </div>

        <transition name="fade">
          <div class="box" v-if="gender !== ''">
            <h2 class="inquiry-title"><span class="line">生年月日</span></h2>
            <div class="c-select-wrap">
              <select id="year_s" v-model="year">
                <option v-for="(year, key) in years" v-bind:key="key" v-bind:value="year">
                  {{ year }}
                </option>
              </select>
              年
            </div>

            <div class="c-select-wrap">
              <select id="month_s" v-model="month">
                <option v-for="m of 12" v-bind:key="m" v-bind:value="m + '月'">
                  {{ m }}
                </option>
              </select>
              月
            </div>

            <div class="c-select-wrap">
              <select id="day_s" v-model="day">
                <option v-for="d of 31" v-bind:key="d" v-bind:value="d + '日'">
                  {{ d }}
                </option>
              </select>
              日
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="link-wrap justify-content-center">
      <linkButton to="/step2/" message="次へ進む"></linkButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import linkButton from '@/components/linkButton.vue';
import yearArray from '@/utiles/definition.js';

export default {
  name: 'home',
  data() {
    return {
      years: yearArray,
    };
  },
  components: {
    linkButton,
  },
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit('updateGender', value);
      },
    },

    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.$store.commit('updateYear', value);
      },
    },

    month: {
      get() {
        return this.$store.state.month;
      },
      set(value) {
        this.$store.commit('updateMonth', value);
      },
    },

    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit('updateDay', value);
      },
    },
  },
};
</script>
