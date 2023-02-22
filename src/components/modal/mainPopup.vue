<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="modal">
      <div class="images">
        <img src="/img/event03.png">
      </div>
      <div class="btns">
   
        <v-btn text class="store" @click="onClickgogo">
          앱 설치하기
        </v-btn>
        <div class="bar"></div>
        <v-btn text class="close" @click="popupClose">닫기</v-btn>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {

  data(){
    return{
      visible:false,
    }
  },
  mounted(){
    this.popupShow()
  },
  methods:{
    popupShow(){
      const width = window.innerWidth;
      if(width < 500 && this.$cookies.get('mainPopup') === null){
        this.visible = true;
      }else{
        this.visible = false;
      }

      window.addEventListener('resize', ()=>{
        const getWidth = window.innerWidth;
        if(getWidth > 500){
          this.visible = false;
        }
      })
    },

    popupClose(){
      this.visible = false;
      this.$cookies.set('mainPopup', 1, 60 * 1)
    },

    onClickgogo() {
      var userAgent = navigator.userAgent;

      if (userAgent.match(".*Android.*")) {
        // alert("android");
        // location.href = "dailywash://action";
        location.href = "Intent://action#Intent;scheme=dailywash;package=kr.co.dailywash;end";
      } else if (
        userAgent.match(".*iPhone.*") ||
        userAgent.match(".*iPad.*")
      ) {
        // alert("ios");
        setTimeout(function () {
          
          location.href = 'https://apps.apple.com/kr/app/%EB%8D%B0%EC%9D%BC%EB%A6%AC%EC%84%B8%ED%83%81/id1495137616';
        }, 250);
        location.href = "dailywash://";
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.modal{
  background:#fff;
  border-radius:30px 30px 0 0;
  overflow:hidden;
  padding:10px;

  .images{
    border-radius:25px;
    overflow:hidden;
    img{
      display:block;
      width:100%;
    }
  }

  .btns{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    padding:0 10px;

    .v-btn{
      flex:1;
      height:50px;
      padding:0px;
      text-align:center;
      border-radius:25px;

      &:last-child{
        margin-right:0;
      }
      .v-icon{
        font-size:20px;
      } 
    }
    .bar{
      height:30px;
      margin:0 10px;
      width:1px;
      background:#e2e2e2;
    }
    .v-btn.icon{
      background:#292929;
      color:#fff;
    }

    .v-btn.close{
      flex:1;
    }
  }

  
}
</style>