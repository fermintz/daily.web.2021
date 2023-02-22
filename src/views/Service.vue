<template>
  <div class="service contents">
    <div class="section section-1">
      <div class="inner">
        <dl class="sec-title">
          <dt>데일리세탁 세탁서비스를 신청하기 전에 <span>서비스 지역</span>을 확인해주세요</dt>
          <dd>고객님들의 성원에 힘입어 타 지역도 빠르게 확장 할 수 있도록 노력하겠습니다</dd>
        </dl>
        <div class="map-detail">
          <v-row>
            <v-col cols="12" md="3">
              <dl>
                <dt>부산</dt>
                <dd>강서구, 기장군, 해운대구 반송동 제외</dd>
              </dl>
            </v-col>
            <v-spacer />
            <v-col cols="12" md="7">
              <div class="map-img">
                <img src="img/map-03.png">
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <!--inner -->
    </div>
    <!-- sec-1 -->
  </div>
</template>

<script>
export default {
  name:'Service',
  metaInfo:{
    title: '서비스지역 | 데일리세탁'
  },
  data() {
    return {
      colors: [],
    };
  },

  mounted() {

  },

  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
.service {
  padding:120px 0;
  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 30px 0;
  }

  .section {
    dl.sec-title {
      margin-bottom:50px;
      dt {
        font-size: 32px;
        line-height:1.4;
        font-weight:500;
        span{
          color:#2e9dd4;
        }
      }
      dd {
        font-size: 16px;
        margin-top: 15px;
        color: #898989;
      }
    }

    .area-text{
      strong{
        font-size:24px;
        display:block;
        font-weight:500;
        margin-bottom:15px;
      }

      span{
        display:flex;
        label{
          display:flex;
          align-items:center;
          background:#f2f2f2;
          padding:10px;
          margin-right:10px;
          margin-bottom:10px;
          border-radius:5px;
        }
      }
    }
  }

  

  .map{
    display:flex;
    align-items: center;
    justify-content: center;

    border-radius:30px;
    padding:50px;
    margin-bottom:30px;

    .col-12{
      display:flex;
      justify-content: center;
      align-items: center;
    }

    img{
      width:auto;
      height:500px;
      display:block;
    }
  }

  .grid{
    display:flex;
    .left{
      margin-right:30px;

      &:last-child{
        margin-right:0px;
      }
    }
  }

  .map-detail{
    background:#f2f2f2;
    border-radius:30px;
    padding:50px;
    margin-bottom:30px;
    dl{
      background:#fff;
      padding:20px;
      border-radius:10px;
      dt{
        font-size:32px;
        font-weight:500;
      }
      dd{
        font-size:18px;
        margin-top:10px;
        color:#898989;
      }
    }
    img{
      display:block;
      width:100%;
    }
  }
}

@media screen and(max-width:1240px){

  .service{
    padding:100px 20px;

    .map{
      img{
        width:100%;
        height:auto;
      }
    }

    .map-detail{
      padding:20px;
      border-radius:10px;
      dl{
        margin-bottom:30px;
        border-radius:5px;

        dt{
          font-size:24px;
        }
        dd{
          font-size:16px;
        }
      }
    }
  }
}

</style>
