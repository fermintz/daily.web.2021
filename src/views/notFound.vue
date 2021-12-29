<template>
  <div class="notFound contents">
    <div class="inner">
      <h2>404</h2>
      <h4>찾을 수 없는 페이지입니다.</h4>
      <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br>입력하신 주소가 정확한지 다시 한 번 확인해주세요</p>

      <div class="btns">
        <v-btn text @click="$router.push('/').catch(()=>{})">
          메인으로
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notFound{
  .inner{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:600px;

    h2{
      font-size:150px;
      font-weight:100;
      line-height:1;
      margin-bottom:30px;
      color:#de0059;
    }

    h4{
      font-size:24px;
    }

    p{
      padding:0px;
      margin:0px;
      margin-top:10px;
      color:#898989;
      text-align:center;
    }

    .btns{
      margin-top:50px;
      .v-btn{
        border:1px solid #292929;
      }
    }
  }
}
</style>