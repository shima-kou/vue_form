<template>
  <div class="form-container">
    <div class="form-box">
      <div class="title-wrap">
        <span class="step">STEP2</span>
        <h1 class="title">以下にお答えください</h1>
      </div>
      <div class="input-wrapper">
        <div class="box">
          <h2 class="inquiry-title">現在、生命保険に加入されていますか？</h2>
          <label for="join_y"> <input id="join_y" type="radio" value="はい" v-model="$store.state.join" /> はい </label>

          <label for="join_n"> <input id="join_n" type="radio" value="いいえ" v-model="$store.state.join" /> いいえ</label>
        </div>
        <transition name="fade">
          <div class="box" v-if="$store.state.join !== ''">
            <h2 class="inquiry-title">現在入院中ですか。または、３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか。</h2>
            <label for="hospitalization_y"> <input id="hospitalization_y" type="radio" value="はい" v-model="$store.state.hospitalization" /> はい </label>

            <label for="hospitalization_n"> <input id="hospitalization_n" type="radio" value="いいえ" v-model="$store.state.hospitalization" /> いいえ</label>
          </div>
        </transition>
        <transition name="fade">
          <div class="box" v-if="$store.state.hospitalization !== ''">
            <h2 class="inquiry-title">過去5年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</h2>
            <label for="continuation_y"> <input id="continuation_y" type="radio" value="はい" v-model="$store.state.continuation" /> はい </label>

            <label for="continuation_n"> <input id="continuation_n" type="radio" value="いいえ" v-model="$store.state.continuation" /> いいえ</label>
          </div>
        </transition>
      </div>
    </div>
    <div class="link-wrap">
      <linkButton to="/" message="前へ戻る" addClass="back-btn"></linkButton>
      <linkButton to="/step3/" message="次へ進む"></linkButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import linkButton from '@/components/linkButton.vue';

export default {
  name: 'STEP2',
  data() {
    return {};
  },
  components: {
    linkButton,
  },
  computed: {},
};
</script>
