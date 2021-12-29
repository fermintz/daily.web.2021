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
        <div class="sns d-flex align-center" >
          <!-- <div class="sns_btn" @click="openPage('http://pf.kakao.com/_GAFDxb/chat')">
            <img src="@/assets/img/facebook.png"/>
          </div> -->
          <!-- <div class="sns_btn" @click="openPage('https://blog.naver.com/dailywash_op')">
            <img src="@/assets/img/blog.png"/>
          </div> -->
          <div class="sns_btn"  @click="openPage('http://pf.kakao.com/_GAFDxb/chat')">
            <img src="@/assets/img/kakao.png"/>
          </div>
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

    <div class="side">
      <div v-ripple class="top_btn" @click="scrollTop"> 
        <v-icon>mdi-arrow-up</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TopHeader',
  mounted(){
    addEventListener('scroll',()=>{
      this.stickyOn()
    }, false)
    
  },
  methods:{
    openPage(url){
      window.open(url)
    },
    pageMove(value){
      this.$router.push(value).catch(()=>{});
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
    },
    scrollTop(){
      window.scrollTo({top:0, behavior:'smooth'})
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
        font-family:'Roboto','SCDream';
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
      .sns_btn{
        margin-right:12px;
        border-radius:100%;
        img{
          display:block;
          height:30px;
        }
      }
      .sns_btn:first-child{
        margin-left:0px;
      }
      .sns_btn:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: all .3s;
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
  background:#fff;
  border-bottom:1px solid #e2e2e2;
  top:0px;
  width:100%;
  .inner{
    height:70px;
    transition: height .5s ease; 
  }
}

@media screen and(max-width:1264px) {
  .header{
    padding:0px;
    .inner{
      height:70px;
    }

    .logo{
      display:flex;
      align-items: center;
      margin-left:20px;
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
      margin-right:10px;
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

  .side{
    display:none;
  }
    
}


.side{
  position: fixed;
  bottom:20px;
  right:20px;

  .top_btn{
    width:60px;
    height:60px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
    background:#f2f2f2;
    border-radius:30px;

    .v-icon{
      font-size:24px;
      color:#0E8FF2;
    }
  }
  .top_btn:hover{
    cursor: pointer;
    background:#0E8FF2;
    border:0;
    transition: all 1s linear;
    .v-icon{
      color:#fff;
    }
  }
}




</style>