<template>
  <div class="test contents">
    <div class="inner">
      <ul>
        <li v-for="(item, index) in pageData()" :key="index">
          <label>{{item.id}}</label>
          <strong>{{item.title}}</strong>
          <span>{{item.body}}</span>
        </li>
      </ul>

      <div class="paging">
        <span 
          v-ripple
          v-for="(item, index) in pageCounter()" 
          :key="index"
          @click="pageNum = index"
          :class="{active: index === pageNum}"
        >
          {{item}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {

  data(){
    return{
      datas:[],
      pageNum:0,
      pageSize:8,
    }
  },

  async mounted() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.datas = data.data;
  },

  methods:{
    pageCounter(){
      let listLeng = this.datas.length
      let listSize = this.pageSize
      let page = Math.floor(listLeng / listSize);

      if(listLeng % listSize > 0) page += 1; //여기가 좀 이해가 안되네

      return page
    },
    pageData(){
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      const sliceData = this.datas.slice(start, end)

      return sliceData
    }
  }
}
</script>

<style lang="scss" scoped>

.test{
  padding-top:90px;
  ul{
    li{
      border-bottom:1px solid #e2e2e2;
      padding:20px 0;

      strong{
        display:block;
        font-size:18px;
        font-weight:500;
      }
      span{
        display:block;
        color:#898989;
      }
    }
    li:last-child{
      border-bottom:0px;
    }
  }

  .paging{
    margin-top:50px;
    display:flex;
    align-items: center;
    justify-content: center;
    span{
      display:flex;
      align-items: center;
      justify-content: center;
      width:26px;
      height:26px;
      border:1px solid #e2e2e2;
      font-size:12px;
      margin:0 2px;
    }
    span.active{
      border:0;
      color:#fff;
      background:#292929;
    }
    span:hover{
      cursor: pointer;
    }
  }
}
</style>