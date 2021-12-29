<template>
  <div class="customer contents">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <div class="left">
              <h2>무엇을 도와드릴까요?</h2>
              <strong>070-7807-6857</strong>

              <div class="time">
                <dl>
                  <dt>평일</dt>
                  <dd>10:00 ~ 18:00</dd>
                </dl>
                <dl>
                  <dt>점심시간</dt>
                  <dd>12:30 ~ 13:30</dd>
                </dl>
                <dl>
                  <dd>주말, 공휴일 휴무</dd>
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

    <!-- <div class="section-2">
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
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>주문 수량을 잘못 입력했어요.</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>주문수량을 잘못입력 했어도, 추후 검수과정에서 파악하여 추가결제 요청이 진행됩니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>추가결제는 어떻게 하나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>추가결제 시 카카오톡 알림으로 가게되며, 추가검수 품목과 추가금액 확인 후 데일리세탁 앱에서 결제하실 수 있습니다.</span>
              
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>주문 취소는 어떻게 하나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>[나의주문] > [주문상세보기] 에서 주문을 취소할 수 있습니다.</span>
              <span>취소는 데일리세탁 배송 기사가 고객님의 물품을 수거시작 시간 전까지만 가능하며, 배송 기사가 수거를 한 후 취소하고 싶다면 데일리세탁 고객센터로 문의주세요 단, 이 경우 수거 과정에서 배송비가 발생하였기 때문에 수거배송비는 고객 부담이 됩니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>세탁은 어디에서 하나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>수거된 세탁물은 전문가가 검수하여, 지역마다 협력 되어있는 세탁업체를 통해 세탁이 진행됩니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>세탁은 얼마나 걸리나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>물빨래의 경우 2일 ~ 3일 정도 소요.</span>
              <span>특수세탁 혹은 드라이크리닝의 경우 2일 ~ 3일 정도 소요.</span>
              <span>구스소재(구스다운패딩, 구스토퍼) 포함 시 최대 3일 ~ 4일 정도 소요.</span>
              <span>운동화 세탁은 3일 ~ 7일 정도 걸리시기에 여유있게 맡겨주세요.</span>
              <span>토,일 및 공휴일이 겹친 경우 모든품목 최대 2일 이상 소요되십니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>수선도 가능한가요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>현재 데일리세탁에서는 '간단한 수선'만 진행합니다.</span>
              <span>밑단수선/길이수선, 단추 및 지퍼수선(수선이 필요한 단추/지퍼는 동봉 요망), 뜯어짐 및 헤
  짐 수선만 가능합니다.(그 외 통 줄임, 허리 수선 등의 수선서비스는 제공하지 않습니다.) </span>
              <span>세탁담당자 검수 후 수선이 불가능 할 수 있습니다.</span>
              <span>세탁과정 없이 수선 서비스만은 제공하지 않습니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>배송 가능 날짜와 시간을 알려주세요</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>배송이 시작되면 고객님께 카카오톡으로 알림이 갑니다.</span>
              <span>(단, 교통상황에 따라 배송기사님이 순차적으로 방문하기에 일부 지연될 수 있는 점 양해부
   탁드립니다.)</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>배송비를 따로 내야 하나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>세탁물 수거 및 배송료로 3,500원 부가됩니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>수거지와 배송지가 달라도 되나요?</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>수거지와 배송지가 다른 경우는 분실의 위험으로 불가능 합니다.</span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>예정 시간에 기사님이 오지 않았습니다</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>
                수거 및 배송일정에 따라 기사님이 움직이지만, 교통상황과 금일 물량에 따라 일부 지연이 
  될 수 있는 점 양해부탁드립니다.
              </span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span><b>Q</b>회원 정보를 수정하고 싶어요.</span>
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>
                회원정보는 카카오톡 로그인 연계를 통하므로, 카카오톡 정보변경을 이용하시면 됩니다. 
  주소 및 이용카드의 변경은 가능합니다.
              </span>
            </dd>
          </dl>
          <dl class="accodion_item">
            <dt>
              <span
                ><b>Q</b>세탁 후에 세탁물에 문제가 발생하면 A/S나 보상이
                가능한가요?</span
              >
              <v-icon> mdi-chevron-down-circle-outline </v-icon>
            </dt>
            <dd>
              <span>세탁업 표준약관 제6조에 피해보상 및 손해배상을 진행합니다.</span>
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
    };
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

<style lang="scss" scoped>
.section-1 {
  padding: 50px 50px;
  .inner {
    display: flex;
    align-items: center;

    .left {
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      h2 {
        font-weight: 500;
      }
      strong {
        display: block;
        font-family: "Roboto";
        font-weight: 600;
        font-size: 42px;
        line-height: 1;
        margin-top: 10px;
      }
      .time {
        margin: 20px 0;
        dl {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          font-size: 13px;

          dt {
            width: 80px;
          }
        }
      }
      .v-btn {
        height: 40px;
        padding: 0 30px;
        background: #ffbb00;
        border-radius: 100px;
        margin-top: 30px;
      }
    }

    .sec-image {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        display: block;
        width: 100%;
      }
    }

    .sec-image:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
}

.section-2{
  border-radius:30px;
  margin-bottom:90px;

  .v-btn{
    border:1px solid #d2d2d2;
    width:100%;
    height:50px;
    border-radius:5px;
    display:flex;
    justify-content: space-between;

    .v-icon{
      font-size:18px;
      color:#aaa;
    }
  }
}

.section-3 {
  padding: 80px 50px;
  background: #f8f8f8;
  border-radius: 30px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  .list {
    margin-top: 50px;

    .accodion_item {
      height: 80px;
      overflow: hidden;
      transition: all 0.2s linear;
      background: #fff;
      margin-bottom: 10px;
      padding: 0 20px;
      border-radius: 5px;

      dt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        height: 80px;

        b {
          font-family: "Roboto";
          color: #d22929;
          margin-right: 5px;
        }
      }

      dd {
        padding: 20px 0;
        color: #797979;
        border-top: 1px solid #e2e2e2;

        span{
          display:flex;
          margin-bottom:8px;
        }
        span:before{
          content:'·';
          display:block;
        }
        span:last-child{
          margin-bottom:0px;
        }
      }
    }

    .accodion_item.active {
      transition: all 0.2s linear;
      dt {
        .v-icon {
          transform: rotate(180deg);
        }
      }
    }
    .accodion_item:last-child {
      margin-bottom: 0px;
    }
    .accodion_item:hover {
      cursor: pointer;
    }
  }
}

@media screen and(max-width:960px) {
  .contents {
    padding: 90px 0px;
  }
  .section-1 {
    padding: 0px 25px;
    

    .inner {
      min-height: auto;

      .row{
        flex-direction: column-reverse;
      }

      .sec-image {
        background:#f8f8f8;
        border-radius:20px;
        img{
          width:85%;
        }
      }

      .left {
        strong {
          font-size: 32px;
        }
        .v-btn {
          width: 100%;
        }
      }
    }
  }
  .section-3 {
    padding: 90px 25px;
    border-radius: 0px;
    .list {
      .accodion_item {
        padding: 0 15px;

        dt {
          font-size: 14px;
          span {
            margin-right: 15px;
            flex: 1;
          }
        }
        dd {
          font-size: 12px;
          padding: 15px 0;
        }
      }
    }
  }

}
</style>
