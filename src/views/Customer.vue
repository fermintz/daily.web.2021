<template>
  <div class="customer contents">
    <div class="section section-1">
      <div class="inner">
        <div class="left">
          <h2>무엇을 도와드릴까요?</h2>
          <strong>070-4709-1003</strong>

          <div class="time">
            <dl>
              <dt>평일</dt>
              <dd>10:00 ~ 18:00</dd>
            </dl>
            <dl>
              <dt>점심시간</dt>
              <dd>12:30 ~ 13:30</dd>
            </dl>
            <dl>
              <dd>주말, 공휴일 휴무</dd>
            </dl>
          </div>

          <v-btn text>
            카카오톡 상담하기
          </v-btn>
        </div>
      </div>
    </div> <!-- section-1 -->

    <div class="section-2">
      <div class="inner">
        <h2>자주묻는 질문</h2>

        <div class="list">
          <dl v-for="(item, index) in 10" :key="index" 
            class="accodion_item"
          >
            <dt>
              <span>주문 수량을 잘못 입력했어요</span>
              <v-icon>
                mdi-chevron-down-circle-outline
              </v-icon>
            </dt>
            <dd>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe, cum, repellendus libero iure sequi ex adipisci porro quos delectus quod tenetur quidem. Autem, vero assumenda ex iste repellendus recusandae?
            </dd>
          </dl>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      boxIndex:0,
      boxShow:false
    }
  },
  mounted(){
    this.accodionFunc()
  },
  methods:{
    accodionFunc(){
      const item = document.querySelectorAll('.accodion_item');
      const defaultHt = 80

      for(let i=0;i<=item.length;i++){
        item[i].addEventListener('click',() =>{
          
          item[i].classList.toggle('active')

          if(item[i].classList.contains('active')){
            item[i].style.height = defaultHt + item[i].querySelector('dd').clientHeight + 'px'
          }else{
            item[i].style.height = defaultHt + 'px'
          }
        })

        window.addEventListener('resize',()=>{
          item[i].style.height = defaultHt + 'px'
          item[i].classList.remove('active')
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-1{
  background:#f8f8f8;
  border-radius:30px;
  padding:0 30px;
  
  .inner{
    display:flex;
    align-items: center;
    background:#f8f8f8;
    min-height:600px;

    .left{
      h2{
        font-weight:500;
      }
      strong{
        display:block;
        font-family:'Roboto';
        font-weight:600;
        font-size:42px;
        line-height:1;
        margin-top:10px;
      }
      .time{
        margin:20px 0;
        dl{
          display:flex;
          align-items: center;
          margin-bottom:5px;
          font-size:13px;
          
          dt{width:80px;}
        }
      }
      .v-btn{
        background:#FFBB00;
        border-radius:100px;
        margin-top:30px;
      }
    }
  }
}

.section-2{
  margin-top:70px;

  h2{
    font-size:24px;
    text-align:center;
    font-weight:500;
  }

  .list{
    margin-top:50px;
    border-top:1px solid #292929;

    .accodion_item{
      height:80px;
      overflow:hidden;
      transition: all .2s linear;
      border-bottom:1px solid #e2e2e2;

      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:18px;
        padding:0 20px;
        height:80px;
        
      }

      dd{
        padding:20px;
        background:#f8f8f8;
      }
    }

    .accodion_item.active{
      transition: all .2s linear;
      dt{
        .v-icon{
          transform:rotate(180deg)
        }
      }
    
    }
    .accodion_item:last-child{
      margin-bottom:0px;
    }
    .accodion_item:hover{
      cursor: pointer;
      background:#f8f8f8;
    }
  }
}
</style>