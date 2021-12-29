<template>
  <div class="howUse contents">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <div class="text">
              <span>세탁을 간편하게!</span>
              <strong> 모바일세탁소 데일리세탁<br />이렇게 이용하세요! </strong>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="sec-image sa sa-up" data-sa-margin="0">
              <img src="@/assets/img/how_customer.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-2">
      <div class="inner">
        <v-row class="first_row">
          <v-col cols="12" md="4">
            <div class="sec_title">
              <span class="sa sa-up">STEP 01</span>
              <strong class="sa sa-up" data-sa-delay="200"
                >세탁서비스<br />선택하기</strong
              >
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-row class="second_row">
              <v-col cols="12" md="6" class="sa sa-right">
                <div class="sec_image">
                  <img src="@/assets/img/main_03.png" />
                </div>
                <dl>
                  <dt>침구류 물세탁 대행서비스</dt>
                  <dd>
                    시간에 방해받지 않고 무거움 세탁물을 다시 들고올 필요없이
                    데일리세탁이 대신 처리해드립니다
                  </dd>
                </dl>
              </v-col>
              <v-col cols="12" md="6" class="sa sa-right" data-sa-delay="400">
                <div class="sec_image">
                  <img src="@/assets/img/main_02.png" />
                </div>
                <dl>
                  <dt>드라이&물세탁 전문세탁소</dt>
                  <dd>
                    데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들이
                    깨끗한 세탁을 완성합니다
                  </dd>
                </dl>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-2 -->

    <div class="section infomation">
      <div class="caution">
        <div class="inner">
          <h4>데일리세탁 서비스 이용시 주의사항</h4>

          <div class="list">
            <div class="slide_item" v-ripple @click="$router.push('caution/alert01')">
              <label>의류(공통)<br />주문접수시</label>
              <span>
                <v-icon>mdi-arrow-right-circle</v-icon>
              </span>
            </div>

            <div class="slide_item" v-ripple @click="$router.push('caution/alert02')">
              <label>이불빨래<br />주문접수시</label>
              <span>
                <v-icon>mdi-arrow-right-circle</v-icon>
              </span>
            </div>

            <div class="slide_item" v-ripple @click="$router.push('caution/alert03')">
              <label>신발류<br />주문접수시</label>
              <span>
                <v-icon>mdi-arrow-right-circle</v-icon>
              </span>
            </div>

            <div class="slide_item" v-ripple @click="$router.push('caution/alert04')">
              <label>수거/배송<br />관련주의사항</label>
              <span>
                <v-icon>mdi-arrow-right-circle</v-icon>
              </span>
            </div>

            <div class="slide_item" v-ripple @click="$router.push('caution_second')">
              <label>명품의류 및 명품 신발<br>선택 시 유의사항</label>
              <span>
                <v-icon>mdi-arrow-right-circle</v-icon>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="inner">
        <div class="repair">
          <h5>
            ※ 현재 데일리세탁에서는 <b>'간단한 수선'</b>만 진행합니다.
            (추가결제필요)
          </h5>
          <ul>
            <li>
              - 밑단수선/길이수선, 단추 및 지퍼수선(수선이 필요한 단추/지퍼는
              동봉 요망), 뜯어짐 및 헤짐 수선만 가능합니다.
            </li>
            <li>
              - 그 외 통 줄임, 허리 수선 등의 수선서비스는 제공하지 않습니다.
            </li>
            <li>- 세탁담당자 검수 후 수선이 불가능 할 수 있습니다.</li>
            <li>- 세탁과정 없이 수선 서비스만은 제공하지 않습니다.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section section-3">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5" class="sa sa-left">
            <div class="sec_image">
              <img src="@/assets/img/how_02.png" />
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="6" class="sa sa-right">
            <div class="sec_title">
              <span>STEP 02</span>
              <strong>언제 수거 하러갈까요?</strong>
              <p>편하신 날짜에 시간대에 맞춰 달려갑니다.</p>
            </div>

            <div class="accdoinons">
              <dl class="accodion_item">
                <dt>
                  <span>이용이 제한되는 품목</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>
                      천연모피, 천연무스탕, 천연가죽 등 전문 세탁이 필요한 경우
                    </li>
                    <li>
                      솜류(쿠션, 베게), 가방(에코백 제외), 장식이 많은 커튼
                    </li>
                    <li>양털 카페 및 우레탄 카페 등 변형이 쉬운 재질의 카펫</li>
                    <li>드레스 및 한복류 (웨딩, 이브닝, 연주회 드레스등)</li>
                    <li>기름, 병원 관련 오염류 등 전문 세탁이 필요한 경우</li>
                    <li>
                      구두, 워커, 부츠, 어그부츠, 바닥이 나무 재질로 되어 있는
                      샌들, 이염이 우려되는 운동화
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl class="accodion_item">
                <dt>
                  <span>서비스 이용 주의사항</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>
                      빨래방 대행 서비스는 오염이나 이염 제거등 복원 작업이 아닌
                      맞춤세제를 통한 '세탁'의 과정만 진행합니다.
                    </li>
                    <li>맡기기 전 세탁 불가 품목을 꼭 확인해주세요.</li>
                    <li>주머니에 남겨진 소지품은 없는 지 잘 확인해주세요.</li>
                    <li>
                      전문가 검수 후 불가 품목 접수가 확인되면 해당 품목은
                      세탁이 진행되지 않고 개별 포장하여 보내드립니다.
                    </li>
                    <li>
                      불가 품목만 접수된 경우에는 수거/배송 비용을 제외한 금액이
                      환불처리 됩니다.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- sectoin-3 -->

    <div class="section section-4">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6" class="sa sa-left">
            <div class="sec_title">
              <span>STEP 03</span>
              <strong>선결제와 추가결제</strong>
              <p>데일리세탁은 미리 선결제를 받고 있습니다</p>
            </div>

            <div class="accdoinons">
              <dl class="accodion_item">
                <dt>
                  <span>선결제를 하는 이유</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>예약해주신 세탁물에 기본 세탁 비용입니다.</li>
                    <li>
                      예약 품목이 수거한 세탁물과 일치하는 지 확인하기 위해
                      선결제를 미리 진행합니다.
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl class="accodion_item">
                <dt>
                  <span>추가결제가 필요한 이유</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>
                      세탁업의 특성상 재질과 오염 등에 따라 진행하는 작업의 방법
                      및 사용하는 클리닝 제품이 달라져 추가 결제가 진행됩니다.
                    </li>
                    <li>
                      예약 품목보다 수거한 품목이 많을 경우에는 추가된 세탁물에
                      대한 추가 결제가 진행됩니다.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="5" class="sa sa-right">
            <div class="sec_image">
              <img src="@/assets/img/how_03.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-4 -->

    <div class="section section-5">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5" class="sa sa-left">
            <div class="sec_image">
              <img src="@/assets/img/how_04.png" />
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="6" class="sa sa-right">
            <div class="sec_title">
              <span>STEP 04</span>
              <strong>세탁물을 문앞에 내놓아주세요</strong>
              <p>
                예약하신 날짜와 시간을 고객님에 주소지 문 앞에 비닐봉투 혹은
                상자에 넣어 두시면 기사님께서 방문하여 수거 합니다.
              </p>
            </div>

            <div class="accdoinons">
              <dl class="accodion_item">
                <dt>
                  <span>상품을 언제 내 놓아야 하나요</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>
                      예약해주신 시간은 "수거" 시간이므로 수거 시간 이전에
                      전송되는 알림을 보시고 내놓아 주시면 됩니다.
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="accodion_item">
                <dt>
                  <span>상품을 예약시간에 내놓지 못한 경우</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </dt>
                <dd>
                  <ul>
                    <li>
                      기사님께서 최초 2회 전화 후에 연결이 안 될 경우에는
                      수거/배송 비용을 제외한 금액이 환불 됩니다.
                    </li>
                  </ul>
                </dd>
              </dl>
              
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-4 -->

    <div class="section section-6">
      <div class="inner">
        <div class="sec_title">
          <span class="sa sa-up" data-sa-delay="0">STEP 05</span>
          <strong class="sa sa-up" data-sa-delay="200"
            >여유있게 기다려주세요</strong
          >
          <p class="sa sa-up" data-sa-delay="400">
            고객님의 세탁물은 수거, 업체에 접수, 세탁, 배송의 과정으로
            진행됩니다.<br />
            평균 영업일 2~4일정도 소요되오니 조금만 참고 기다려주세요!
          </p>
          test
        </div>

        <div class="sec-6-image sa">
          <img src="@/assets/img/how_05.png" />
        </div>

        <div class="guide">
          <ul>
            <li>
              셀프빨래방 대행 서비스의 경우 접수 이 후 1~3 영업일 정도
              소요됩니다.
            </li>
            <li>
              전문 세탁소 이용 서비스의 경우 접수 이 후 2~4 영업일정도
              소요됩니다.
            </li>
            <li>
              세탁물의 재질이나 오염 상태에 따라 소요 기간이 증가할 수 있습니다.
            </li>
            <li>
              데일리세탁은 주말/공휴일은 운영하지 않고 있어 배송 날짜가 좀 더
              지연될 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section section-7">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="7">
            <div class="customer-info">~~
              <div class="text">
                이용방법을 잘 모르시겠다면,<br />언제든 연락주세요
              </div>
              <div class="bottom">
                <dl>
                  <dt>고객센터</dt>
                  <dd>070-7807-6857</dd>
                </dl>
                <div class="divider-v"></div>
                <div class="time">
                  <span>운영 10:00 ~ 18:30</span>
                  <span>점심 12:30 ~ 13:30</span>
                  <span>토요일, 공휴일 휴무</span>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="sec_image">
              <img src="@/assets/img/customer.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-5 -->

  </div>
</template>

<script>

export default {
  name: "HowUse",
  metaInfo:{
    title: '이용방법 | 데일리세탁'
  },

  mounted() {
    this.saFunc();
    window.addEventListener("scroll", this.saFunc);
    this.accodionFunc();
  },
  data() {
    return {};
  },
  methods: {
     accodionFunc() {
      const items = document.querySelectorAll(".accodion_item");
      const defaultHt = 60;

      items.forEach((item) => {
        item.addEventListener(
          "click",
          () => {
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
              item.style.height =
                item.clientHeight +
                item.querySelector("dd").clientHeight +
                "px";
            } else {
              item.style.height = defaultHt + "px";
            }
          },
          false
        );
      });

      window.addEventListener("resize", () => {
        items.forEach((item) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            item.style.height = defaultHt + "px";
          }
        });
      });
    },

    saFunc() {
      const saDefaultMargin = 300;
      let saTriggerMargin = 0;
      let saTriggerHeight = 0;
      const saElementList = document.querySelectorAll(".sa");

      for (let element of saElementList) {
        if (!element.classList.contains("show")) {
          if (element.dataset.saMargin) {
            saTriggerMargin = parseInt(element.dataset.saMargin);
          } else {
            saTriggerMargin = saDefaultMargin;
          }

          if (element.dataset.saTrigger) {
            saTriggerHeight =
              document
                .querySelector(element.dataset.saTrigger)
                .getBoundingClientRect().top + saTriggerMargin;
          } else {
            saTriggerHeight =
              element.getBoundingClientRect().top + saTriggerMargin;
          }

          if (window.innerHeight > saTriggerHeight) {
            let delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
            setTimeout(function () {
              element.classList.add("show");
            }, delay);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.howUse {
  width: 100%;
  overflow: hidden;

  .section {
    margin-top: 180px;

    .sec_title {
      span {
        display: flex;
        font-size: 18px;
        font-family: "Roboto";
        font-weight: 500;
        color: #0e8ff2;
      }
      strong {
        display: flex;
        font-size: 32px;
        margin-top: 10px;
        line-height: 1.4;
        font-weight: 500;
      }

      p {
        margin-top: 10px;
        padding: 0px;
        font-size: 16px;
        color: #898989;
      }
    }
    .sec_image {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      overflow: hidden;
      background: #f8f8f8;

      img {
        position: absolute;
        left: 0px;
        bottom: 0px;
        display: block;
        width: 100%;
      }
    }
    .sec_image:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  .accdoinons {
    margin-top: 50px;
  }

  .accodion_item {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    height: 60px;
    overflow: hidden;
    transition: all 0.2s linear;
    margin-bottom: 20px;

    dt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      padding: 0 20px;
      height: 60px;
    }

    dd {
      padding: 20px;
      padding-top: 0px;

      ul {
        padding: 0px;
        li {
          display: flex;
          margin-bottom: 10px;
          color: #595959;
        }
        li:before {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 2.5px;
          background: #d22828;
          margin-right: 10px;
          margin-top: 8px;
        }
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

  .section-1 {
    margin-top: 0px;
    background: #f8f8f8;
    border-radius: 30px;
    overflow: hidden;

    .row {
      margin: 0px;
      align-items: center;
      .col-12 {
        padding: 0px;
      }
    }

    .text {
      position: relative;
      height: 100%;

      span {
        font-size: 24px;
        margin-bottom: 15px;
        font-weight: 400;
        display: block;
        color: #898989;
      }
      strong {
        font-size: 42px;
        line-height: 1.6;
        position: relative;
        font-weight: 500;
        color: #292929;
        box-shadow: inset 0 -12px 0 rgba(255, 165, 0, 0.4);
      }
    }

    .sec-image {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      background: none;

      img {
        position: absolute;
        width: 100%;
        display: block;
      }
    }
    .sec-image:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  .section-2 {
    .sec_title {
      margin-bottom: 30px;
    }
    .first_row {
      margin: 0;
      .col-12 {
        padding: 0;
      }
    }
    .second_row {
      margin: -40px;

      .col-12 {
        padding: 40px;
      }

      .image_box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        background: #f8f8f8;
        border-radius: 15px;
      }
      .image_box:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }

      dl {
        margin-top: 30px;

        dt {
          font-size: 24px;
        }
        dd {
          margin-top: 10px;
          color: #898989;
        }
      }
    }
  }

  .infomation {
    .caution {
      margin-bottom: 80px;

      h4 {
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: 500;
      }

      .list {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;
      }

      .slide_item {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;
        border-right: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        width: 20%;
        height: 120px;
        padding: 15px;

        label {
          font-size: 16px;
        }
        span {
          text-align: right;
          .v-icon {
            font-size: 32px;
            color: #0e8ff2;
          }
        }
      }
    }

    .repair {
      h5 {
        font-size: 18px;
        margin-bottom: 15px;
        b {
          font-weight: 500;
          color: #0e8ff2;
        }
      }
      ul {
        background:#f8f8f8;
        padding: 20px;

        li {
          display: block;
          letter-spacing: -0.4px;
          margin-bottom: 15px;
        }
        li:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }

  /* section-2 */

  .section-3 {
    .sec_image {
      background: #f8f8f8;
    }
  }

  .section-6 {
    .sec-6-image {
      position: relative;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin-top: 50px;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        display: block;
      }
    }
    .sec-6-image:after {
      content: "";
      display: block;
      padding-bottom: 40%;
    }

    .guide {
      margin-top: 30px;
      ul {
        padding: 0px;
        li {
          text-align: right;
          font-size: 12px;
          color: #aaa;
          margin-bottom: 5px;
        }
      }
    }
  }

  .section-7 {
    background: #f8f2f4;
    overflow: hidden;
    border-radius: 30px;

    .row {
      display: flex;
      align-items: center;
      margin: -20px;

      .col-12 {
        padding: 20px;
      }
    }

    .customer-info {
      .text {
        font-size: 24px;
      }
      .bottom {
        display: flex;
        align-items: center;
        margin-top: 50px;

        dl {
          dd {
            margin-top: 10px;
            line-height: 1;
            font-size: 32px;
            font-weight: 500;
            font-family: "Roboto";
          }
        }

        .divider-v {
          width: 1px;
          height: 60px;
          background: #e2e2e2;
          margin: 0 30px;
        }

        .time {
          span {
            font-size: 12px;
            margin-bottom: 5px;
            display: block;
          }
          span:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }

    .sec_image {
      background: none;
    }
  }

  @media screen and(max-width:1400px) {
    .section-1 {
      .inner {
        padding: 0 50px;
      }
    }
    .section-7 {
      .inner {
        padding: 0 50px;
      }
    }
  }

  @media screen and(max-width:960px) {
    .section {
      padding: 0px;
      .inner {
        padding: 0px;
      }
      .sec-cont {
        margin-top: 20px;
      }
      .sec_title {
        span {
          font-size: 16px;
        }
        strong {
          display: flex;
          font-size: 26px;
          margin-top: 10px;
          line-height: 1.4;
        }

        p {
          font-size: 14px;
        }
      }
    }

    .accodion_item {
      dt {
        font-size: 14px;
      }
      dd {
        font-size: 12px;
      }
    }

    .section-1 {
      .inner {
        padding: 50px 20px;
        padding-bottom: 0px;
        text-align: center;
        justify-content: center;

        .text {
          span {
            font-size: 18px;
          }
          strong {
            font-size: 24px;
          }
        }
      }
    }

    .infomation {
      .caution {
        .slide_item {
          width:50%;
          label {
            font-size: 14px;
          }
          span {
            .v-icon {
              font-size: 24px;
            }
          }
        }
      }
      .repair{
        ul{
          padding:15px;
        }
      }
    }

    .section-3 {
      .inner {
        .row {
          flex-direction: column-reverse;
        }
      }
    }

    .section-5 {
      .row {
        flex-direction: column-reverse;
      }
    }
    .section-6 {
      .guide {
        ul {
          li {
            display: flex;
            text-align: left;
          }
          li:before {
            content: "";
            display: block;
            width: 5px;
            height: 5px;
            margin-right: 10px;
            margin-top: 8px;
            border-radius: 2.5px;
            background: #e2e2e2;
          }
        }
      }
    }

    .section-7 {
      background: #fff;
      border-radius: 0;
      .inner {
        padding: 0;
      }

      .customer-info {
        margin-bottom: 40px;

        .bottom {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .divider-v {
            display: none;
          }
          .time {
            margin-top: 20px;
          }
        }
      }

      .sec_image {
        background: #f8f2f4;
        border-radius: 15px;
      }
    }
  }
}
</style>
