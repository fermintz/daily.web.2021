<template>
  <div class="howUse contents">
    <div class="page-title">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <div class="text">
              <span>세탁을 간편하게!</span>
              <strong> 모바일세탁소 데일리세탁<br />이렇게 이용하세요! </strong>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image">
              <img src="@/assets/img/how_customer.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="inner">
      <div class="section section-1">
        <v-row>
          <v-col cols="12" md="6">
            <dl>
              <dt>
                <label>01</label>
                <strong>데일리세탁 앱 설치</strong>
                <span>먼저 앱스토어, 구글스토어에서 데일리세탁을 
    검색해 앱을 설치해주세요</span>

                <div class="btns">
                  <v-btn text rounded @click="openPage('https://play.google.com/store/apps/details?id=kr.co.dailywash')">
                    <v-icon>mdi-google-play</v-icon>
                    <span>구글플레이</span> 
                  </v-btn>
                  <v-btn text rounded @click="openPage('https://apps.apple.com/kr/app/%EB%8D%B0%EC%9D%BC%EB%A6%AC%EC%9B%8C%EC%8B%9C/id1495137616')">
                    <v-icon>mdi-apple</v-icon>
                    <span>앱스토어</span> 
                  </v-btn>
                </div>
              </dt>
            </dl>
          </v-col>
          <v-col cols="12" md="6">
            <div class="images">
              <img src="@/assets/img/howUse/howUse01.png">
            </div>
          </v-col>
        </v-row>
        
      </div>
      <div class="section section-2">
        <dl>
          <dt>
            <label>02</label>
            <strong>데일리세탁 앱으로 세탁예약</strong>
          </dt>
          <dd>
            <div class="appUse appUse-1">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/appUse01.png">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="cont">
                    <strong>세탁 예약하기</strong>
                    <span>앱 메인화면에서 [세탁예약하기] 버튼을 통해 세탁을 예약할 수 있습니다</span>
                  </div>
                </v-col>
              </v-row>
              <div class="number">
                01
              </div>
            </div>

            <div class="appUse appUse-2 active">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/appUse02.png">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="cont">
                    <strong>수거 날짜선택하기</strong>
                    <span>선택하신 날짜에 기사님이 방문하여 세탁물을 수거합니다</span>
                  </div>
                </v-col>
              </v-row>
              <div class="number">
                02
              </div>

            </div>

            <div class="appUse appUse-3">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/appUse03.png">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="cont">
                    <strong>상품선택</strong>
                    <span>내놓으실 세탁물의 가격을 미리 확인할 수 있습니다</span>
                  </div>
                </v-col>
              </v-row>
              <div class="number">
                03
              </div>

            </div>

            <div class="appUse appUse-3">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/appUse04.png">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="cont">
                    <strong>요청사항 작성</strong>
                    <span>세탁상세 내용 및 수선 재단에 대한 요청을 작성할 수 있습니다</span>
                  </div>
                </v-col>
              </v-row>
              <div class="number">
                04
              </div>

            </div>

            <div class="appUse appUse-3">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/appUse05.png">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="cont">
                    <strong>결제확인/결제하기</strong>
                    <span>모든 선택사항을 확인 하고 결제를 진행합니다.</span>
                  </div>
                </v-col>
              </v-row>
              <div class="number">
                05
              </div>
 
            </div>

            <div class="caution">
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
<!-- 
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
            </div> -->
          </dd>
        </dl>
      </div>
      <div class="section section-3">
        <dl>
          <dt>
            <label>03</label>
            <strong>세탁물 문앞에 내놓기</strong>
            <span>예약하신 날짜가 되면 카카오톡을 통해 수거예정 알림을 드립니다.</span>
            <span>알림 확인 후 고객님에 주소지 문 앞에 세탁물을 비닐봉투 혹은 상자에 넣어 두시면 기사님께서 방문하여 수거 합니다.</span>
          </dt>
          <dd>
            <div class="images">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/howUse03-01.gif">
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="image">
                    <img src="@/assets/img/howUse/howUse03-02.gif">
                  </div>
                </v-col>
              </v-row>
            </div>
            <p>
              <span>※ 기사님께서 최초 2회 전화 후에 연결이 안 될 경우에는 수거/배송 비용을 제외한 금액이 환불 됩니다.</span>
            </p>
          </dd>
        </dl>
      </div>
      <div class="section section-4">
        <dl>
          <dt>
            <label>04</label>
            <strong>여유있게 기다리기</strong>
            <span>고객님의 세탁물은 수거, 업체에 접수, 세탁, 배송의 과정으로 진행되어 4~5일정도 소요될 수 있습니다. </span>
            <span>조금만 참고 기다려주세요</span>
          </dt>
          <dd>
            <div class="image">
              <img src="@/assets/img/how_05.png" />
            </div>
            <p>
              <span>세탁물의 재질이나 오염 상태에 따라 소요 기간이 증가할 수 있습니다.</span>
              <span>데일리세탁은 주말/공휴일은 배송 및 수거를 진행하지 않습니다.</span>  
            </p>
          </dd>
        </dl>
      </div>
    </div> <!-- inner -->

    <div class="section section-5">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="7">
            <div class="customer-info">
              <div class="text">
                이용방법을 잘 모르시겠다면,<br />언제든 연락주세요
              </div>
              <div class="bottom">
                <dl>
                  <dt>고객센터</dt>
                  <dd>070-4709-1003</dd>
                </dl>
                <div class="divider-v"></div>
                <div class="time">
                  <span>평일 10:00 ~ 18:00</span>
                  <span>점심 12:30 ~ 13:30</span>
                  <span>주말, 공휴일 제외</span>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      obsOptions:{
        root:null,
        threshold:1,
      }
    }
  },
  mounted(){
    this.onScroll()
  },

  methods:{
    onScroll(){
      const io = new IntersectionObserver((ent)=>{
        ent.forEach((entry) => {
          console.log(ent)
          if(entry.isIntersecting){
            entry.target.classList.add('active')
          }else{
            entry.target.classList.remove('active')
          }
        })
      }, this.obsOptions);

      const box = document.querySelectorAll('.appUse')
      console.log(box)
      box.forEach((el) => io.observe(el))
    },

    openPage(url){
      window.open(url)
    },
  },
}
</script>

<style lang="scss" scoped src="./howUse.scss">

</style>