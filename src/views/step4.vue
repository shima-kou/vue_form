<template>
  <div class="form-container">
    <div class="form-box">
      <div class="title-wrap">
        <span class="step">STEP4</span>
        <h1 class="title">以下の内容をご確認ください。</h1>
      </div>
      <div class="input-wrapper">
        <div class="box">
          <h2 class="inquiry-title"><span class="line">性別</span></h2>
          <p class="input-result">
            {{ $store.getters.getGender }}
          </p>
        </div>

        <div class="box">
          <h2 class="inquiry-title"><span class="line">生年月日</span></h2>
          <div class="c-select-wrap">{{ $store.getters.getYear }}</div>
          <div class="c-select-wrap">{{ $store.getters.getMonth }}</div>
          <div class="c-select-wrap">{{ $store.getters.getDay }}</div>
        </div>

        <div class="box">
          <h2 class="inquiry-title">現在、生命保険に加入されていますか？</h2>
          <p class="input-result">
            {{ $store.getters.getJoin }}
          </p>
        </div>

        <div class="box">
          <h2 class="inquiry-title">現在入院中ですか。または、３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか。</h2>
          <p class="input-result">
            {{ $store.getters.getHospitalization }}
          </p>
        </div>

        <div class="box">
          <h2 class="inquiry-title">過去5年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</h2>
          <p class="input-result">
            {{ $store.getters.getContinuation }}
          </p>
        </div>
        <div class="box">
          <h2 class="inquiry-title"><span class="line">ご相談内容</span></h2>
          <p class="input-result">
            {{ $store.getters.getMessage }}
          </p>
        </div>
      </div>
    </div>
    <div class="link-wrap">
      <linkButton to="/step3/" message="前へ戻る" addClass="back-btn"></linkButton>
      <linkButton to="/" message="送信"></linkButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import linkButton from '@/components/linkButton.vue';

export default {
  name: 'Form',
  components: {
    linkButton,
  },
  computed: {},
};
</script>
