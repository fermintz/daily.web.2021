<template>
  <dl class="brand">
    <dt>{{ title }}</dt>
    <dd>
      <v-row>
        <v-col
          cols="4"
          sm="3"
          md="2"
          lg="1"
          v-for="(item, index) in datas"
          :key="index"
        >
          <div class="item">
            <span>
              <img :src="'/img/brand/' + item.file + '.png'" />
            </span>
            <label>{{ item.name }}</label>
          </div>
        </v-col>
      </v-row>

      {{ content }}
      <!-- <p>
        조던(구입가50만원이상) 나이키 사카이(베이퍼 와플 및 프라그먼트 등 한정판
        운동화류) 나이키 스투시 줌 스피리돈 케이지 2 나이키 피스마이너원,
        아디다스 바이 퍼렐 윌리엄스 알렉산더 맥퀸 골든구스, 이지부스트 아디다스
        퍼렐(윌리엄스) X NMD, 발렌티노
      </p> -->
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    datas: Array,
  }
}
</script>

<style lang="scss" scoped>
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
</style>