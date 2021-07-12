<template>
  <div class="form-container">
    <div class="form-box">
      <div class="title-wrap">
        <span class="step">STEP3</span>
        <h1 class="title">お客様の情報を入力してください。</h1>
      </div>
      <div class="input-wrapper">
        <div class="box">
          <h2 class="inquiry-title"><span class="line">ご相談内容</span></h2>
          <textarea id="messageArea" cols="30" rows="10" v-model="message"></textarea>
        </div>
      </div>
    </div>
    <div class="link-wrap">
      <linkButton to="/step2/" message="前へ戻る" addClass="back-btn"></linkButton>
      <linkButton to="/step4/" message="次へ進む"></linkButton>
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
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit('updateMessage', value);
      },
    },
  },
};
</script>
