<template>
  <div class="service contents">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5" class="left">
            <dl class="sec-title">
              <dt>서비스지역</dt>
              <dd>
                전국에 모든 고객들이 이용할 수 있도록 데일리세탁은<br />노력하고
                있습니다
              </dd>
            </dl>

            <div class="divider" />

            <div class="area">
              <h4>주문가능지역</h4>
              <ul>
                <li>서울시</li>
                <li>하남시</li>
                <li>남양주시</li>
                <li>부산시</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="7" class="right">
            <div class="map_wrap">
              <div class="map">
                <div
                  class="row"
                  v-for="(row, index1) in colors"
                  :key="'row_' + index1"
                >
                  <div
                    :class="{
                      item: true,
                      mapColumn:
                        column
                          .split(',')
                          .splice(0, 3)
                          .reduce((a, c) => +a + +c, 0) > 0,
                      active:
                        column
                          .split(',')
                          .splice(0, 3)
                          .reduce((a, c) => +a + +c, 0) <= 570 &&
                        !column.includes('0,0,0,0'),
                    }"
                    v-for="(column, index2) in row"
                    :key="'column_' + index2"
                    :style="{ backgroundColor: `rgba(${column})` }"
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <!--inner -->
    </div>
    <!-- sec-1 -->

    <div class="section section-2">
      <div class="inner">
        <dl class="sec-title">
          <dt>협력사소개</dt>
          <dd>우수한 협력사들이 데일리세탁과 함께합니다</dd>
        </dl>

        <div class="shop_list">
          <v-row>
            <v-col cols="12" md="4">
              <div class="shop_item">
                <div class="shop_img">
                  <img src="/img/shop01.png" />
                </div>
                <dl>
                  <dt>휘주 워시앤클린</dt>
                  <dd>
                    <span class="ceo">대표 전현주</span>
                    <span class="phone">010-3854-1222</span>
                    <span class="address">서울특별시 노원구 공릉로 34길 118, 201동 상가 104호</span>
                    <span class="company_num">사업자번호 805-88-01606</span>
                  </dd>
                </dl>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="shop_item">
                <div class="shop_img">
                  <img src="/img/shop02.png" />
                </div>
                <dl>
                  <dt>자탁소(부산대연점)</dt>
                  <dd>
                    <span class="ceo">대표 김지예</span>
                    <span class="phone">010-8504-8966</span>
                    <span class="address">부산 남구 수영로208번길 43 1층 자탁소</span>
                    <span class="company_num">사업자번호 741-37-00655</span>
                  </dd>
                </dl>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="shop_item">
                <div class="shop_img">
                  <img src="/img/shop03.png" />
                </div>
                <dl>
                  <dt>월드크리닝(덕포지사)</dt>
                  <dd>
                    <span class="ceo">대표 이현정</span>
                    <span class="phone">051-302-6002</span>
                    <span class="address">부산광역시 사상구 덕상로 1 (덕포동) 월드크리닝 덕포지사</span>
                    <span class="company_num">사업자번호 609-15-18918</span>
                  </dd>
                </dl>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <canvas id="myCanvas" height="1000" width="1000" style="display: none" />
    <img src="@/assets/img/map.png" class="mapImg" style="display: none" />

    <div class="section section-3"></div>
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
    this.mapCanvas();
  },

  methods: {
    mapCanvas() {
      const canvas = document.querySelector("#myCanvas");
      const context = canvas.getContext("2d");
      const mapImg = document.querySelector(".mapImg");

      mapImg.onload = () => {
        const GAP = 0.75;
        const WIDTH = mapImg.width;
        const HEIGHT = mapImg.height;

        context.drawImage(mapImg, 0, 0);

        const colorRows = [];

        for (let y = GAP / 2; y <= HEIGHT; y += GAP) {
          const row = [];
          for (let x = GAP / 2; x <= WIDTH; x += GAP) {
            const img_data = context.getImageData(x, y, 1, 1).data;
            const R = img_data[0];
            const G = img_data[1];
            const B = img_data[2];
            const A = img_data[3];
            const rgba = `${R},${G},${B},${A}`;
            row.push(rgba);
          }
          colorRows.push(row);
        }

        this.colors = colorRows;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.service {
  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 30px 0;
  }

  .section {
    dl.sec-title {
      dt {
        font-size: 32px;
        font-weight:500;
      }
      dd {
        font-size: 16px;
        margin-top: 10px;
        color: #898989;
      }
    }
  }

  .section-1 {
    padding: 20px 50px;
    border-radius: 30px;

    .sec-title {
      padding: 50px 0;
    }

    .area {
      h4 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 15px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
        border-radius: 10px;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0e8ff2;
          padding: 0 15px;
          height: 30px;
          border-radius: 15px;
          margin-right: 10px;
          margin-bottom:10px;
          color: #fff;
        }
      }
    }
  }

  .map_wrap {
    display: Flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 15px;
    height: 100%;
    .map {
      padding: 10px;

      .row {
        .item {
          width: 7px;
          height: 7px;
          margin: 1px;
        }

        .item.active {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 5;
            animation: map 3s forwards;
            background: #0e8ff2;
          }

          @keyframes map {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
        }

        .item.mapColumn {
          background: #d4d9dd !important;
        }
      }
    }
  }

  .section-2 {
    padding: 80px 50px;
    background: #f8f8f8;
    border-radius: 30px;

    .shop_list {
      margin-top: 50px;
      padding: 0px;
      border-bottom: none;

      .row {
        margin: -20px;
      }
      .col-12 {
        padding: 20px;
      }
      .col-12:nth-child(2n) {
        border-right: 0px;
      }

      .shop_item {
        margin-bottom:50px;
        .shop_img{
          position: relative;
          display:flex;
          align-items: center;
          justify-content: center;
          height:100%;
          overflow:hidden;
          border-radius:10px;
          background:#f8f8f8;

          img{
            position: absolute;;
            display:block;
            width:100%;
          }
        }

        .shop_img:after{
          content:'';
          display:block;
          padding-bottom:53.4%;
        }

        dl{

          dt{
            font-size:16px;
            font-weight:500;
            border-bottom:1px solid #e2e2e2;
            padding:15px 0;
          }

          dd{
            margin-top:15px;
            span{
              display:block;
              font-size:12px;
              margin-bottom:5px;
              color:#898989;
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width:1300px) {
  .service {
    .map_wrap {
      border:1px solid #e2e2e2;
      padding: 0px;
      .map {
        .row {
          .item {
            width: 5px;
            height: 5px;
          }
        }
      }
    }
  }
}

@media screen and(max-width:800px) {
  .service {
    .section-1 {
      padding: 0px;
      border-radius: 30px;
      margin-bottom: 30px;

      .sec-title {
        text-align: center;
      }

      .area {
        text-align: center;
        ul {
          justify-content: center;
        }
      }
    }
    .map_wrap {

      .map {
        .row {
          .item {
            width: 3px;
            height: 3px;
            margin:1px;
          }
        }
      }
    }

    .section-2 {
      padding: 0px;
      margin-top: 100px;
      background: none;

      .sec-title{
        text-align:center
      }

      .shop_list {
        .row {
          margin:-10px;
        }
        .col-12 {
          padding: 10px;
        }
      }
    }
  }
}

#line {
  stroke-dasharray: 4000;
  stroke-dashoffset: 8000;
  animation: dash 3s linear infinite;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
