<template>
  <div class="review_terms contents">
    <div class="inner">
      <div class="page_title">
        {{ title }}
      </div>
      <div class="doc" v-html="description" />
    </div>
  </div>
</template>

<script>
import docs from "@/assets/docs/agree.js";

export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  mounted() {
    this.show();
  },
  computed: {
    type() {
      return this.$route.params.type;
    },
  },
  watch: {
    type() {
      this.show();
    },
  },
  methods: {
    show() {
      switch (this.type) {
        case "person":
          this.title = "개인정보 취급방침";
          break;
        case "service":
          this.title = "서비스 이용약관";
          break;
        case "refound":
          this.title = "데일리세탁 서비스 운영정책 및 보상정책";
          break;
      }
      this.description = docs[this.type].replace(/\n/g, "<br />");
    },
  },
};
</script>

<style lang="scss" scoped>
.review_terms {
  padding-top:150px;
  .page_title {
    font-size:24px;
    font-weight:500;
  }

  .doc{
    padding:50px;
    padding-bottom:70px;
    background:#f2f2f2;
    border-radius:10px;
    margin-top:20px;
  }
}

@media screen and(max-width:960px) {
  .review_terms{
    padding-top:100px;

    .page_title{
      text-align:center;
    }

    .doc{
      padding:20px;
      padding-bottom:50px;
    }
  }  
}
</style>

