<template>
  <div class="header">
    <div class="inner d-flex justify-space-between align-center">

      <div class="logo" @click="pageMove('/')">
        <img src="@/assets/img/logo.png">
        <span>데일리세탁</span>
      </div>

      <div class="gnb">
        <ul class="menu d-flex align-center">
          <li @click="pageMove('/howUse')">
            이용방법
          </li>
          <li @click="pageMove('/service')">
            서비스지역
          </li>
          <li @click="pageMove('/customer')">
            고객센터
          </li>
        </ul>
        <div class="sns d-flex align-center">
          <v-btn text class="facebook"></v-btn>
          <v-btn text class="blog"></v-btn>
          <v-btn text class="kakao"></v-btn>
        </div>
      </div>

      <v-btn 
        icon
        class="mobile_btn"
        @click="drawerHandle(true)"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    addEventListener('scroll',()=>{
      this.stickyOn()
    })
    
  },
  methods:{
    pageMove(value){
      this.$router.push(value);
    },
    stickyOn(){
      const screen = window.scrollY
      const header = document.querySelector('.header')
        if(screen > 0){
          header.classList.add('active')
        }
        else{
          header.classList.remove('active')
        }
    },
    drawerHandle(value){
      this.$emit('update', value)
    }
  },
}
</script>

<style lang="scss" scoped>
.header{
  position:absolute;
  width:100%;
  top:0px;
  z-index:10;
  padding:0 20px;

  .inner{
    height:90px;
    transition: height .5s ease; 
  }

  .logo{
    display:flex;
    align-items: center;
    img{
      height:30px;
      padding:0px;
      margin:0px;
    }
    span{
      font-size:20px;
      margin-left:10px;
      font-weight:500;
    }
  }
  .logo:hover{
    cursor: pointer;
  }

  .gnb{
    display:flex;
    align-items: center;
    
    .menu{
      padding:0px;
      li{
        margin-left:50px;
        font-size:16px;
        font-weight:500;
      }
      li:hover{
        cursor: pointer;
        color:#0E8FF2;
      }
    }
    .sns{
      margin-left:60px;
      padding:0px;
      .v-btn{
        padding:0px;
        min-width:30px;
        height:30px;
        border-radius:25px;
        margin-left:10px;
        background:#f8f8f8;
      }
      .v-btn:first-child{
        margin-left:0px;
      }

      .v-btn.facebook{
        background:#3A569A
      }
      .v-btn.blog{
        background:#04C959;
      }
      .v-btn.kakao{
        background:#F7D500
      }
    }
  }

  .mobile_btn{
    width:50px;
    height:50px;
    display:none;
  }
}

.header.active{
  position: fixed;
  background:rgba(255,255,255,0.8);
  backdrop-filter: blur(5px);
  top:0px;
  width:100%;
  .inner{
    height:70px;
    transition: height .5s ease; 
  }
}

@media screen and(max-width:1264px) {
  .header{
    .inner{
      height:70px;
    }

    .logo{
      display:flex;
      align-items: center;
      img{
        height:20px;
        padding:0px;
        margin:0px;
      }
      span{
        font-size:18px;
        margin-left:10px;
        font-weight:500;
      }
    }

    .gnb{
    display:none;
    }
    .mobile_btn{
      display:block;
    }  
  }

  .header.active{
    background:rgba(255,255,255,0.8);
    backdrop-filter: blur(5px);
    transition:background 1s ease;
    .inner{
      height:60px;
    }
  }
    
}





</style>