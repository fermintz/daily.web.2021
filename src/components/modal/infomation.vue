<template>
  <v-dialog
    v-model="visible"
    max-width="900"
  >
    <div class="infomation">
      <div class="top">
        <h4>제목입니다.</h4>
      </div>
      <div class="middle">
        내용입니다.
      </div>
      <div class="bottom">
        <v-btn text>닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false
    }
  }
}
</script>

<style lang="scss" scoped>
.infomation{
  background:#fff;
  border-radius:10px;
  .top{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:50px;
    padding:0 15px;

    h4{
      font-size:18px;
    }
  }
  .middle{
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    padding:20px;
  }
  .bottom{
    padding:10px 0;
    text-align:center;
    .v-btn{
      min-width:100px;
      height:36px;
      background:#292929;
      color:#fff;
      border-radius:18px;
      padding:0px;
    }
  }
}
</style>