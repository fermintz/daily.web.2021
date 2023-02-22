<template>
  <div class="customer contents">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <div class="left">
              <h2>무엇을 도와드릴까요?</h2>
              <strong>070-4709-1003</strong>

              <div class="time">
                <dl>
                  <dt>평일</dt>
                  <dd>10:00 ~ 18:00</dd>
                </dl>
                <dl>
                  <dt>점심</dt>
                  <dd>12:30 ~ 13:30</dd>
                </dl>
                <dl>
                  <dd>주말, 공휴일 제외</dd>
                </dl>
              </div>

              <v-btn text @click="openPage('http://pf.kakao.com/_GAFDxb/chat')"> 카카오톡 상담하기 </v-btn>
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="4">
            <div class="sec-image">
              <img src="@/assets/img/customer_02.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-1 -->
    <!-- 
    <div class="section-2">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <v-btn text @click="$router.push('/terms/person')">
              <label>개인정보 취급방침</label>
              <v-icon>mdi-arrow-right</v-icon> 
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn text @click="$router.push('/terms/service')">
              <label>서비스 이용약관</label>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn text @click="$router.push('/terms/refound')">
              <label>서비스 보상정책</label>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div> -->

    <div class="section-3">
      <div class="inner">
        <h2>자주묻는 질문</h2>

        <div class="list">
          <dl class="accodion_item" v-for="items in qnaDatas" :key="items">
            <dt>
              <span><b>Q</b>{{items.title}}</span>
              <v-icon> mdi-chevron-down</v-icon>
            </dt>
            <dd>
              <span v-for="item in items.datas" :key="item" v-html="item"></span>
            </dd>
          </dl>         
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Customer",
  metaInfo:{
    title: '고객센터 | 데일리세탁'
  },
  data() {
    return {
      boxIndex: 0,
      boxShow: false,
      qnaDatas: require('../../../public/docs/qna.json'),
    }
  },
  mounted() {
    this.accodionFunc();
  },
  methods: {
    pageMove(value){
      this.$router.push(value);
    },
    openPage(url){
      window.open(url)
    },
    accodionFunc(){
      const items = document.querySelectorAll('.accodion_item');
      const defaultHt = 80

      items.forEach(item => {
        item.addEventListener('click',()=>{
          item.classList.toggle('active');

          if(item.classList.contains('active')){
            item.style.height = item.clientHeight + item.querySelector('dd').clientHeight + 'px'
          }else{
            item.style.height = defaultHt + 'px'
          }
        }, false)
      });

      window.addEventListener('resize',()=>{
        items.forEach(item =>{
          if(item.classList.contains('active')){
            item.classList.remove('active')
            item.style.height = defaultHt + 'px'
          }
        })
      })
    },
  },
};
</script>

<style lang="scss" scoped src="./customer.scss" />

