<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right    
    temporary
    touchless
    style="z-index:99;"
  >
    <div class="drawer_in">
      <ul>
        <li v-ripple @click="$router.push('/')">
          홈으로
        </li>
        <li v-ripple @click="$router.push('/howUse')">
          이용방법
        </li>
        <li v-ripple @click="$router.push('/service')">
          서비스지역
        </li>
        <li v-ripple @click="$router.push('/price-table')">
          세탁가격표
        </li>
        <li v-ripple @click="$router.push('/customer')">
          고객센터
        </li>
      </ul>

      <div class="sns">
        <!-- <div class="sns_btn" v-ripple>
          <img src="@/assets/img/facebook.png">
          <span>페이스북</span>
        </div> -->
        <!-- <div class="sns_btn" v-ripple @click="openPage('https://blog.naver.com/dailywash_op')">
          <img src="@/assets/img/blog.png">
          <span>블로그</span>
        </div> -->
        <div class="sns_btn" v-ripple @click="openPage('http://pf.kakao.com/_GAFDxb/chat')">
          <img src="@/assets/img/kakao.png">
          <span>카카오톡</span>
        </div>
      </div>

    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name:'Drawer',
  data(){
    return{
      drawer:false,
    }
  },
  methods:{
    openPage(url){
      window.open(url)
    },
    drawerHandle(value){
      this.drawer = value
    },
    
  },
}
</script>

<style lang="scss" scoped>
.drawer_in{
  width:100%;
  background:#fff;
  padding:20px;

  ul{
    padding:0px;

    li{
      font-size:18px;
      margin-bottom:10px;
      padding:10px; 
      border-radius:10px;
    }
    li:hover{
      cursor: pointer;
    }
  }

  .sns{
    width:100%;
    margin-top:40px;

    .sns_btn{
      flex:1;
      display:flex;
      height:40px;
      margin-bottom:5px;
      align-items: center;
      border-radius:20px;
      padding:0 10px;

      img{
        display:block;
        height:24px;
      }

      span{
        font-size:11px;
        margin-left:10px
      }
    }
  }
}
</style>