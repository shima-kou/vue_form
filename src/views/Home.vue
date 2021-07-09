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
          <label for="man"> <input id="man" type="radio" name="gender" v-model="gender" /> 男性 </label>
          <label for="woman"> <input id="woman" type="radio" name="gender" v-model="gender" /> 女性 </label>
        </div>

        <div class="box" v-if="gender !== ''">
          <h2 class="inquiry-title"><span class="line">生年月日</span></h2>
          <div class="c-select-wrap">
            <select id="year_s" name="yeaar">
              <option v-for="(year, key) in years" v-bind:key="key">
                {{ year }}
              </option>
            </select>
            年
          </div>

          <div class="c-select-wrap">
            <select id="month_s" name="month">
              <option v-for="m of 12" :key="m" :value="m + '月'">
                {{ m }}
              </option>
            </select>
            月
          </div>

          <div class="c-select-wrap">
            <select id="day_s" name="day">
              <option v-for="d of 31" :key="d" :value="d + '日'">
                {{ d }}
              </option>
            </select>
            日
          </div>
        </div>
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
      gender: '',
    };
  },
  components: {
    linkButton,
  },
};
</script>
