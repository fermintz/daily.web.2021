<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right    
    temporary
    style="z-index:99;"
  >
    <div class="drawer_in">
      <ul>
        <li v-ripple @click="$router.push('/')">
          홈으로
        </li>
        <li v-ripple @click="$router.push('howUse')">
          이용방법
        </li>
        <li v-ripple @click="$router.push('service')">
          서비스지역
        </li>
        <li v-ripple @click="$router.push('customer')">
          고객센터
        </li>
      </ul>

      <div class="sns">
        <div class="sns_btn" v-ripple>
          <v-icon>mdi-facebook</v-icon>
          <span>페이스북</span>
        </div>
        <div class="sns_btn" v-ripple>
          <v-icon>mdi-facebook</v-icon>
          <span>카카오톡</span>
        </div>
        <div class="sns_btn" v-ripple>
          <v-icon>mdi-facebook</v-icon>
          <span>블로그</span>
        </div>
      </div>

    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      drawer:false,
    }
  },
  methods:{
    drawerHandle(value){
      this.drawer = value
    }
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
  }

  .sns{
    width:100%;
    margin-top:40px;

    .sns_btn{
      flex:1;
      display:flex;
      height:40px;
      margin-bottom:10px;
      align-items: center;
      background:#f2f2f2;
      border-radius:20px;
      padding:0 10px;

      .v-icon{
        font-size:28px;
      }
      span{
        font-size:11px;
        margin-left:5px
      }
    }
  }
}
</style>