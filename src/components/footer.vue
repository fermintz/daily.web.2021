<template>
  <div class="footer">
    <div class="inner">
      <div class="left">
        <div class="logo">
          <img src="@/assets/img/logo.png">
          <span>데일리세탁</span>
        </div>
        <div class="company">
          <ul>
            <li>주식회사 페이오티 | 대표 차경진 | 사업자등록번호 599-81-00659</li>
            <li>TEL 070-7807-6857 | FAX 0504-433-6857</li>
            <li>Email cs.payot@gmail.com</li>
            <li>부산광역시 강서구 대저 1동 2304-3 3층 페이오티</li>
          </ul>

          <div class="copy">
            COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
      
      <div class="btns">
        <v-btn text @click="$router.push('/terms/person')">개인정보 취급방침</v-btn>
        <v-btn text @click="$router.push('/terms/service')">서비스 이용약관</v-btn>
        <v-btn text @click="$router.push('/terms/refound')">서비스 보상정책</v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  padding-top:50px;
  min-height:300px;
  padding:50px 20px 50px 20px;

  .inner{
    display:flex;
    justify-content: space-between;

    .left{
      display:flex;
      
      .logo{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-right:80px;

        img{
          display:block;
          height:60px;
        }
        span{
          display:block;
          margin-top:10px;
        }
      }

      .company{
        ul{
          padding:0px;
          li{
            margin-bottom:5px;
          }
        }

        .copy{
          margin-top:20px;
          color:#898989;
          font-family:'Roboto';

        }
      }
      
    }

    .btns{
      display:flex;
      flex-direction: column;
      .v-btn{
        font-size:12px;
        font-weight:normal;
        background:#f2f2f2;
        height:30px;
        padding:0 10px;
        margin-bottom:10px;
        border-radius:5px;
      }
    }
  }


  @media screen and(max-width:900px) {
    .inner{
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width:100%;
      font-size:12px;
      .left{
        flex-direction: column;
        justify-content: center;
        text-align:center;
        .logo{
          text-align:center;
          margin:0;
          margin-bottom:30px;

          img{
            display:inline-block;
            height:60px;
          }
        }
      }
      .right{
        display:flex;
        align-items: center;;
      }

      .btns{
        margin-top:30px;
        flex-direction: column;
        .v-btn{
          font-size:11px;
          margin-bottom:10px;
        }
      }
    }
  }
}
</style>