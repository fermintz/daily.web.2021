<template>
  <div class="service contents">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5" class="left">
            <dl class="sec-title">
              <dt>서비스지역</dt>
              <dd>전국에 모든 고객들이 이용할 수 있도록 데일리세탁은<br>노력하고 있습니다</dd>
            </dl>

            <div class="divider" />

            <h4>주문가능지역</h4>
            <ul>
              <li>서울</li>
              <li>부산</li>
            </ul>
          </v-col>
          <v-col cols="12" md="7" class="right"> 
            <div class="map_wrap">
              <div class="map">
                <div class="row" v-for="(row, index1) in colors" :key="'row_' + index1">
                  <div 
                    :class="{ item: true, active: column.split(',').splice(0, 3).reduce((a, c) => +a + +c, 0) <= 570 && !column.includes('0,0,0,0') }" 
                    v-for="(column, index2) in row" 
                    :key="'column_' + index2" 
                    :style="{backgroundColor: `rgba(${column})` }"
                  >
                    <span></span>
                  </div>       
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div> <!--inner -->
    </div> <!-- sec-1 -->

    <div class="section section-2">
      <div class="inner">
        <dl class="sec-title">
          <dt>협력사소개</dt>
          <dd>우수한 협력사들이 데일리세탁과 함께합니다</dd>
        </dl>

        <div class="shop_list">
          <v-row>
            <v-col cols="12" md="6" v-for="item in 3" :key="item">
               <div class="shop_item">
                <div class="shop_name">
                  휘주 워시앤클린
                </div>
                <div class="shop_info">
                  <div class="shop_info_item">
                    <span>대표자</span>
                    <strong>전현주</strong>
                  </div>
                  <div class="shop_info_item">
                    <span>사업자등록번호</span>
                    <strong>805-88-01606</strong>
                  </div>
                  <div class="shop_info_item">
                    <span>사업장소재지</span>
                    <strong>서울특별시 노원구 공릉로 34길 118, 201동 상가 104호</strong>
                  </div>
                  <div class="shop_info_item">
                    <span>전화번호</span>
                    <strong>010-3854-1222</strong>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
         
        </div>
      </div>
    </div>

    <canvas id="myCanvas" height="1000" width="1000" style="display:none;" />
    <img src="@/assets/img/map.png" class="mapImg" style="display:none;">
    <div class="inner">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [],
    };
  },

  mounted(){
    this.mapCanvas()
  },

  methods:{
    mapCanvas(){
      const canvas = document.querySelector('#myCanvas');
      const context = canvas.getContext('2d');
      const mapImg  = document.querySelector('.mapImg');
      
      mapImg.onload = () => {
        const GAP = 1;
        const WIDTH = mapImg.width;
        const HEIGHT = mapImg.height;
        
        context.drawImage(mapImg, 0, 0);

        const colorRows = [];

        for(let y=GAP/2; y<=HEIGHT; y+=GAP) {
          const row = [];
          for(let x=GAP/2; x<=WIDTH; x+=GAP) {
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
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.service{
 
  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .section{
    dl.sec-title{
      dt{
        font-size:32px;
      }
      dd{
        font-size:16px;
        margin-top:10px;
        color:#898989;
      }
    }
  }

  .section-1{
    padding:30px 50px;
    border-radius:30px;
    background:#f8f8f8;

    .sec-title{
      padding:50px 0;

    }

    h4{
      font-size:18px;
      font-weight:500;
      margin-bottom:15px;

    }

    ul{
      display:flex;
      flex-wrap: nowrap;
      padding:0px;
      border-radius:10px;

      li{
        display:flex;
        align-items: center;
        justify-content: center;
        background:#0E8FF2;
        padding:0 15px;
        height:30px;
        border-radius:15px;
        margin-right:10px;
        color:#fff;
      }
    }
  }

  .map_wrap{
    display:Flex;
    align-items: center;
    justify-content: center;
    background:transparent;
    border-radius:15px;
    height:100%;
    .map{
      padding:10px;

      .row{
        .item{
          width:10px;
          height:10px;
          margin:1px;
          border-radius:5px;
        }

        .item.active{
          position: relative;
          display:flex;
          align-items: center;
          justify-content: center;
          overflow:hidden;
          
          span{
            position:absolute;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            z-index:5;
            animation: map 3s forwards;
            background:#0E8FF2;
          }

          @keyframes map {
            0%{
              transform: scale(0);
            }
            100%{
              transform: scale(1);
            }
          }
        }

        .item.active:after{
          content:'';
          display:block;
          position: absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          background:#c5c5c5;
          z-index:4;
          
        }
      }
      
    }  
  }

  .section-2{ 
    margin-top:100px;

    .shop_list{
      margin-top:50px;
      padding:0px;

      border-bottom:none;

      .row{margin:-30px -40px;}
      .col-12{
        padding:30px 40px;


      }
      .col-12:nth-child(2n){
        border-right:0px;
      }

      .shop_item{       
        border-top:1px solid #292929;
        border-bottom:1px solid #e2e2e2;
        .shop_name{
          font-size:18px;
          padding:10px;
          border-radius:5px;
          border-bottom:1px solid #e2e2e2;
        }
        .shop_info{
          padding:15px;
          .shop_info_item{
            display:flex;
            align-items: center;
            margin-bottom:10px;
            span{
              font-size:13px;
              width:120px;
              color:#898989;
            }
            strong{
              flex:1;
              font-size:13px;
              font-weight:400;
            }
          }
          .shop_info_item:last-child{
            margin-bottom:0px;
          }
        }
      }
    }
  }
}

@media screen and(max-width:1300px) {
.service{
  .map_wrap{
    background:#f8f8f8;
    padding:10px;
    .map{
      .row{
        .item{
          width:6px;
          height:6px;
        }
      }
    }
  }
}
}

@media screen and(max-width:800px) {
  .service{
    padding:0px;
    

    .section-1{
      padding:0 30px;
      border-radius:0px;
      padding-top:50px;
    }
    .map_wrap{
      background:#f8f8f8;
      padding:10px;
      .map{
        .row{
          .item{
            width:3px;
            height:3px;
          }
        }
      }
    }

    .section-2{
      padding:0 20px;
    }
  }
}
</style>