<template>
  <div class="orderAlert contents">
    <div class="inner">
      <h2>명품의류 및 명품 신발 선택 시 유의사항</h2>

      <div class="cont">
        <span
          >아래 예시에 준하는 브랜드들은 명품류로 선정되며, 반드시 명품류로
          접수해주시길 바랍니다. 이에 이행하지 않고 일반품목으로 접수해주신
          부분에 대해서 저희 데일리세탁은 책임지지 않습니다.</span
        >
        <span
          >일반세탁과 다른공정으로 세탁이 진행되기에 유의하여 접수 해주시기
          바랍니다.</span
        >
        <span
          >명품접수시 일반세탁과는 달리 시간이 많이 소요되기에 여유있게
          맡겨주셔야 합니다. (부분가죽 및 전체가죽 신발류는 7~10일정도
          소요되시니 여유있게 맡겨주세요)</span
        >
        <span
          >그 외 한정판, 주문제작, 해외직구 등 고가의 의류 및 신발류 또한
          명품류로 접수해주셔야 하며, 요청사항 기입란에 주의요망이라고
          적어주시면 해당품목 꼼꼼히 확인하여 세탁진행 도와드리겠습니다.</span
        >
      </div>

      <div class="divider" />

      <h4>의류</h4>

      <brand-list-component title="명품 및 스트릿브랜드" :datas="list['의류/명품']" />
      <brand-list-component title="준명품 및 스트릿브랜드" :datas="list['의류/준명품']" />

      <div class="divider" />

      <h4>신발류</h4>

      <brand-list-component title="명품 및 스트릿브랜드" :datas="list['신발류/명품']" />
      <brand-list-component title="준명품 및 스트릿브랜드" :datas="list['신발류/준명품']" />
     
    </div>
  </div>
</template>

<script>
import { groupBy } from "lodash";
import BrandListComponent from '@/components/brand-list.vue';

export default {
  components: { BrandListComponent },
  metaInfo: {
    title: "명품주의사항 | 데일리세탁",
  },

  data() {
    return {
      brands: require("@/assets/docs/brands.json"),
      list: [],
    };
  },
  mounted() {
    const category = groupBy(this.brands, (value) =>
      [value.category, value.type].join("/")
    );
    this.list = category;

    // const categoryResult = Object.keys(category).map((key) => {
    //   return category[key].map((item) => {
    //     return { type: item.type, name: item.name, file: item.file };
    //   });
    // });

    // this.datas = categoryResult
  },

};
</script>

<style lang="scss" scoped>
.orderAlert {
  h2 {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    padding: 70px 0;
  }

  .cont {
    span {
      display: block;
      margin-bottom: 10px;
      background: #f8f8f8;
      padding: 10px;
    }
  }

  h4 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 40px 0;
  }

  .brand {
    margin-bottom: 70px;
    &:last-child {
      margin-bottom: 0px;
    }
    dt {
      font-size: 18px;
      margin-bottom: 30px;
    }
    .item {
      span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px solid #e2e2e2;

        img {
          width: 100%;
          position: absolute;
        }

        &:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
      }

      label {
        display: block;
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
      }
    }

    p{
      margin-top:50px;
      color:#898989;
      background:#f8f8f8;
      padding:15px;
    }
  }
}
</style>
