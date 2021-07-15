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
          <label for="man"> <input id="man" type="radio" value="男性" v-model="computedGender" /> 男性 </label>
          <label for="woman"> <input id="woman" type="radio" value="女性" v-model="computedGender" /> 女性 </label>
        </div>

        <transition name="fade">
          <div class="box" v-if="computedGender !== ''">
            <h2 class="inquiry-title"><span class="line">生年月日</span></h2>
            <div class="c-select-wrap">
              <select id="year_s" v-model="computedYear">
                <option v-for="(year, key) in years" v-bind:key="key" v-bind:value="year">
                  {{ year }}
                </option>
              </select>
              年
            </div>

            <div class="c-select-wrap">
              <select id="month_s" v-model="computedMonth">
                <option v-for="m of 12" v-bind:key="m" v-bind:value="m + '月'">
                  {{ m }}
                </option>
              </select>
              月
            </div>

            <div class="c-select-wrap">
              <select id="day_s" v-model="computedDay">
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
    computedGender: {
      get() {
        return this.$store.getters.getGender;
      },
      set(value) {
        this.$store.dispatch('commitGender', value);
      },
    },
    computedYear: {
      get() {
        return this.$store.getters.getYear;
      },
      set(value) {
        this.$store.dispatch('commitYear', value);
      },
    },
    computedMonth: {
      get() {
        return this.$store.getters.getMonth;
      },
      set(value) {
        this.$store.dispatch('commitMonth', value);
      },
    },
    computedDay: {
      get() {
        return this.$store.getters.getDay;
      },
      set(value) {
        this.$store.dispatch('commitDay', value);
      },
    },
  },
};
</script>
