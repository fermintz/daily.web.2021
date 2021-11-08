<template>
  <div class="home contents">
      <div class="main_visual section">
        <div class="inner">
          <v-row>
            <v-col cols="12" lg="6">
              <div class="visual_title">
                <span class="text1 sa sa-up" data-sa-delay="0" data-sa-margin="0">DAILY WASH</span>
                <span class="text2 sa sa-up" data-sa-delay="200" data-sa-margin="0">세탁을 간편하게</span>
                <span class="text2 sa sa-up" data-sa-delay="400" data-sa-margin="0">모두를 위한 모바일세탁소</span>
                <span class="text3 sa sa-up" data-sa-delay="600" data-sa-margin="0">데일리세탁 앱으로<br>간편하게 세탁을 예약하세요</span>
              </div>
              <div class="download">
                <div class="btn sa sa-up" v-ripple data-sa-delay="800" data-sa-margin="0">
                  <div class="icon">
                    <v-icon>mdi-apple</v-icon>
                  </div>
                  <div class="label">
                    <strong>Apple store</strong>
                    <span>다운로드</span>
                  </div>
                </div>

                <div class="btn sa sa-up" v-ripple data-sa-delay="1000" data-sa-margin="0">
                  <div class="icon">
                    <v-icon>mdi-google-play</v-icon>
                  </div>
                  <div class="label">
                    <strong>Play store</strong>
                    <span>다운로드</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="visual_animation">
                <div class="phone_bg">
                  <span class="item star"></span>
                  <span class="item city-1"></span>
                  <span class="item city-2"></span>
                  <span class="item car sa sa-right"></span>
                </div>                
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="section section-2">
        <div class="inner">
          <div class="sec_title sa sa-up" data-sa-margin="0">
            <strong><b>All In One</b> 세탁서비스</strong>
            <span>수거에서 부터 세탁, 배달까지 세탁 올인원서비스</span>
          </div>

          <div class="sec_cont">
            <v-row>
              <v-col cols="12" md="4" class="sa sa-up" data-sa-delay="200" data-sa-margin="0">
                <div class="item">
                  <div class="line">
                    <div class="bar sa sa-left-bar"  data-sa-delay="400"  data-sa-margin="0"/>
                  </div>
                  <dl>
                    <dt>
                      <strong>수거</strong>
                      <span>1</span>
                    </dt>
                    <dd>박스나 비닐을 이용해 집앞에 세탁물을 놓아주시면 기사님이 픽업합니다</dd>
                  </dl>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="sa sa-up" data-sa-delay="400"  data-sa-margin="0">
                <div class="item">
                  <div class="line">
                    <div class="bar sa sa-left-bar" data-sa-delay="800"  data-sa-margin="0"/>
                  </div>
                  <dl>
                    <dt>
                      <strong>세탁</strong>
                      <span>2</span>
                    </dt>
                    <dd>데일리세탁소에서 선정한 최고의 파트너 세탁소에서 세탁을 진행합니다</dd>
                  </dl>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="sa sa-up" data-sa-delay="600"  data-sa-margin="0">
                <div class="item">
                  <div class="line">
                    <div class="bar sa sa-left-bar"  data-sa-delay="1200"  data-sa-margin="0"/>
                  </div>
                  <dl>
                    <dt>
                      <strong>배달</strong>
                      <span>3</span>
                    </dt>
                    <dd>고객님이 집앞까지 세탁물을 안전하게 배송해드립니다</dd>
                  </dl>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>

      <div class="section section-3">
        <div class="sec_title sa sa-up" >
          <strong>앱으로 간편하게,<br/>원하는 날짜에 <b>예약</b>해보세요</strong>
          <!-- <span>원하는 날짜를 선택해 세탁을 예약해보세요<br />해당날짜에 기사님이 방문합니다</span> -->
        </div>
        <div class="sec_cont">
          <div class="phone sa sa-rotate" data-sa-delay="500">
            <div class="phone_top"></div>
            <div class="phone_inner">

            </div>
          </div>
          <div class="bg sa sa-up" >
            <span class="pattern"></span>
          </div>
        </div>
      </div> <!-- section-3 -->

      <div class="section section-4">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="6"  class="sa sa-left">
              <div class="item">
                <dl>
                  <dt>합리적인 가격</dt>
                  <dd>데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들에게 세탁을 맏겨 깨끗한 세탁을 완성합니다</dd>
                </dl>
                <div class="image_box">
                  500x500px
                </div>
              </div>
            </v-col>
            <v-col cols="12"  md="6" class="sa sa-up">
              <div class="item">
                <dl>
                  <dt>단독클리닝 세탁서비스</dt>
                  <dd>데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들에게 세탁을 맏겨 깨끗한 세탁을 완성합니다</dd>
                </dl>
                <div class="image_box">
                  500x500px
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="sa sa-left">
              <div class="item">
                
                <dl>
                  <dt>셀프빨래방 대행서비스</dt>
                  <dd>데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들에게 세탁을 맏겨 깨끗한 세탁을 완성합니다</dd>
                </dl>
                <div class="image_box">
                  500x500px
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="sa sa-right">
              <div class="item">
                <dl>
                  <dt>새벽배송</dt>
                  <dd>데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들에게 세탁을 맏겨 깨끗한 세탁을 완성합니다</dd>
                </dl>
                <div class="image_box">
                  500x500px
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="sa sa-up">
              <div class="item">
                <dl>
                  <dt>명품케어</dt>
                  <dd>데일리세탁이 PICK한 빨래경력 10년이상의 세탁전문가들에게 세탁을 맏겨 깨끗한 세탁을 완성합니다</dd>
                </dl>
                <div class="image_box">
                  500x500px
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div> <!-- section-4 -->

      <div class="section section-5">
        <div class="inner">
          <div class="sec_title sa sa-up">          
            <strong>세탁으로 부터 찾는 나의 시간, <br/>이제 <b>데일리세탁</b>에 맏기세요</strong>
          </div>
        </div>
        <div class="sec_cont">
          <div class="sec-5-img">
    
          </div>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  data(){
    return{}
  },
  mounted(){
    this.saFunc();
    window.addEventListener('scroll',this.saFunc)
  },
  methods:{
    saFunc(){
      const saDefaultMargin = 300;
      let saTriggerMargin = 0;
      let saTriggerHeight = 0;
      const saElementList = document.querySelectorAll('.sa');

      for(let element of saElementList){
        if(!element.classList.contains('show')){
          if(element.dataset.saMargin){
            saTriggerMargin = parseInt(element.dataset.saMargin);
          } else{
            saTriggerMargin = saDefaultMargin
          }

          if(element.dataset.saTrigger){
            saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
          } else{
            saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
          }

          if(window.innerHeight > saTriggerHeight){
            let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
            setTimeout(function(){
              element.classList.add('show');
            }, delay);
          }
        }
      }
    }
  },
};
</script>


<style lang="scss" scoped>

.main_visual.section{
  margin-top:50px;

  .row{
    align-items: center;
  }
  .col{
    display:flex;
    align-items: center;
  }
  .visual_title{     
    span{
      display:block;
    }
    span.text1{
      font-size:18px;
      font-family:'Roboto';
      letter-spacing: 10px;
      margin-bottom:20px;
      font-weight:500;
      color:#0E8FF2;
    }
    span.text2{
      font-size:48px;
      line-height:1.3;
      font-weight:300;
    }
    span.text3{
      font-size:18px;
      margin-top:20px;
      color:#888;
    }

  }
  .download{
    display:flex;
    margin-top:60px;
    .btn{
      display:flex;
      align-items: center;
      background:#191919;
      height:60px;
      border-radius:30px;
      margin-right:15px;
      padding:0 30px 0 10px;
      .icon{
        display:Flex;
        align-items: center;
        justify-content: center;
        width:40px;
        height:40px;
        border-radius:20px;
        background:#000;
        align-self: center;
        margin-right:10px;
        .v-icon{
          color:#fff;
        }
      }
      .label{
        text-align:left;
        strong{
          font-size:14px;
          display:block;
          color:#fff;
          font-weight:500;
        }
        span{
          display:block;
          font-size:11px;
          color:#999;
        }
      }
    }
    .btn:last-child{
      margin-right:0px;
    }
    .btn:hover{
      cursor: pointer;
    }
  } 
  
  .visual_animation{
    display:flex;
    justify-content: flex-end;

    .phone_bg{
      position: relative;
      background: rgb(13,36,97);
      background: linear-gradient(0deg, rgba(13,36,97,1) 0%, rgba(6,16,41,1) 100%);
      width:320px;
      height:640px;
      border-radius:40px;
      overflow:hidden;

      .item{
        display:block;
        position: absolute;
        width: 100%;
        height:100%;
        top:0px;
        left:0px;
      }

      .star{
        background: url('/img/star.png') repeat-x;
        opacity: 0.5;
        animation: star 3s infinite linear, move 100s infinite linear;
        z-index:1;
      }
      .city-1{
        background: url('/img/city1.png') repeat-x;
        background-position-y:75%;
        animation: move 60s infinite linear;
        z-index:3;
      }
      .city-2{
        background: url('/img/city2.png') repeat-x;
        animation: move 80s infinite linear;
        background-position-y:70%;
        z-index:2;
        opacity: 0.4;
      }
      .car{
        background: url('/img/car.png') no-repeat;
        background-position-y:85%;
        z-index:4;
      }

      @keyframes star {
        0%{
          opacity: 0.2;
        }
        50%{
          opacity: 0.5;
        }
        100%{
          opacity: 0.2;
        }
      }
      @keyframes move {
        0%{
          background-position-x: 0px;
        }
        100%{
          background-position-x: 3000px;
        }
      }
    }
  }
}

.section{
  border-radius:30px;
  margin-top:200px;
  padding:0px;

  .sec_title{
    text-align:center;
    strong{
      font-size:36px;
      display:block;
      font-weight:normal;

      b{
        color:#0E8FF2;
        font-weight:normal;
      }
    }
    span{
      font-size:18px;
      display:block;
      color:#898989;
      margin-top:10px;
    }
  }
  .sec_cont{
    margin-top:100px;
  }
}

.section-2{
  .sec_cont{
    margin-top:100px;

    .row{
      margin:-50px;
    }
    .col-12{
      padding:50px;
    }
    .item{
      .line{
        height:6px;
        background:#e2e2e2;
        margin-bottom:30px;
        border-radius:3px;
        overflow:hidden;

        .bar{
          height:6px;
          background:#0E8FF2;
          border-radius:3px;
        }
        .bar.sa{
          transition-duration: 1s;
        }
      }
      dl{
        dt{
          display:flex;
          align-items: center;
          justify-content: space-between;
          strong{
            font-size:24px;
            font-weight:500;
          }
          span{
            font-size:18px;
            font-weight:500;
            font-family:'Roboto';
            display:flex;
            align-items: center;
            justify-content: center;
            width:30px;
            height:30px;
            background:#f2f2f2;
            border-radius:15px;
          }
        }
        dd{
          font-size:16px;
          margin-top:15px;
          color:#898989;
        }
      }
    }      
  }
}

.section-3{

  position: relative;
  .sec_cont{
    margin-top:70px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .phone{
      position: relative;
      width:320px;
      height:640px;
      background:#fff;
      border-radius:50px;
      z-index:2;
      padding:10px;
      overflow:hidden;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.15);

      .phone_top{
        position: absolute;
        top:-20px;
        left:50%;
        margin-left:-70px;
        width:140px;
        height:50px;
        border-radius:15px;
        background:#fff;
        z-index:2;
      }
      .phone_inner{
        background:#f2f2f2;
        height:100%;
        border-radius:45px;
      }
    }
    .bg{
      position: absolute;
      width:100%;
      height:300px;
      background:#0E8FF2;
      border-radius:30px;
      z-index:1;
      overflow:hidden;
    }
  }
}

.section-4{
  margin-top:700px;

  .row{
    margin:-100px;
    margin-bottom:-40px;
  }
  .col-12{
    padding:100px;
    padding-bottom:40px;
  }
  .col-12:nth-child(odd){
    margin-top:-30%;
  }

  .item{
    .image_box{
      position: relative;
      display:flex;
      align-items: center;
      justify-content: center;
      border-radius:15px;
      overflow:hidden;
      background:#f8f8f8;
      img{
        position: absolute;
        height:150%;
      }
    }
    .image_box:after{
      content:'';
      display:block;
      padding-bottom:100%
    }
    dl{
      margin-bottom:30px;
      dt{
        font-size:24px;
        font-weight:500
      }
      dd{
        font-size:16px;
        margin-top:10px;
        color:#898989;
      }
    }    
  }
}

.section-5{

  .sec_title{
    text-align:left;
  }
  .sec_cont{
    margin-top:50px;
  }
  .sec-5-img{
    display:flex;
    align-items: center;
    justify-content: center;
    background:#f2f2f2;
    border-radius:30px;
    height:100%;
    overflow:hidden;
    background:url('/img/main_05_img.jpg') no-repeat center / 100%
  }
  .sec-5-img:after{
    content:'';
    display:block;
    padding-bottom:40%
  }
}


@media screen and(max-width:1264px) {
  .contents{
    padding:0px;
  }

  .main_visual.section{
    margin-top:0px;
    padding:0px 30px;
    padding-top:100px;
    height:100vh;
    background:url('/img/mobile_main_bg.jpg') no-repeat top center;
    background-attachment: fixed;

    .visual_title{     
      span{
        display:block;
      }
      span.text1{
        font-size:14px;
      }
      span.text2{
        font-size:36px;
        line-height:1.2;
        font-weight:300;
      }
      span.text3{
        font-size:18px;
        font-weight:300;
      }
    }

    .download{
      margin-top:30px;
      display:flex;
      flex-direction: column;
      align-items: flex-start; 
      
      .btn{
        margin-bottom:15px;
      }
    }
    .visual_animation{
      display:none;
    }
  }

  .section{
    border-radius:0px;
    margin-top:120px;
    padding:0 30px;

    .sec_title{
      text-align:center;
      strong{
        font-size:24px;
        display:block;
        font-weight:normal;

        b{
          color:#0E8FF2;
          font-weight:normal;
        }
      }
      span{
        font-size:14px;
        display:block;
        color:#898989;
        margin-top:10px;
      }
    }
    .sec_cont{
      margin-top:70px;
    }
  }

  .section-2{

    .sec_cont{
      .row{
        margin:-40px;
      }
      .col-12{
        padding:40px 60px;
      }   
    }
  }

  .section-3{
    padding:0;
    .sec_cont{
      .phone{
        width:260px;
        height:520px;
        border-radius:40px;
        .phone_top{
          top:-15px;
          margin-left:-60px;
          width:120px;
          height:40px;
        }
        .phone_inner{
          border-radius:35px;
        }
      }
      .bg{
        border-radius:0px;
      }
    }
  }

  .section-4{
    .row{
      margin:-20px;
    }
    .col-12{
      padding:20px;
      margin-bottom:70px;
    }
    .col-12:nth-child(odd){
      margin-top:0;
    }

    .item{
      .image_box{
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:15px;
        overflow:hidden;
        background:#f8f8f8;
        img{
          position: absolute;
          height:150%;
        }
      }
      .image_box:after{
        content:'';
        display:block;
        padding-bottom:100%
      }
      dl{
        margin-bottom:30px;
        dt{
          font-size:24px;
          font-weight:500
        }
        dd{
          font-size:16px;
          margin-top:10px;
          color:#898989;
        }
      }    
    }
  }
}
</style>