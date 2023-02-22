<template>
  <div class="price-table contents">
    <div class="inner">
      <div class="alert">
        <p>
          이 가격은 <span>부산지역의 가격표</span>입니다. 다른지역은 가격이 다를
          수 있습니다.
        </p>
      </div>
      <v-row>
        <v-col cols="12" md="4">
          <div class="left">
            <h2>세탁가격을<br />알려드립니다</h2>
            <div class="menu">
              <div class="item"
                v-for="(item, i) in products"
                :key="i"
                :class="{ active: item.category === select }"
              >
                <span @click="select = item.category">
                  {{ item.category }}
                </span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="right">
            <dl v-for="sub in selectedProducts" :key="sub.title">
              <dt>{{ sub.title }}</dt>
              <dd v-for="product in sub.products" :key="product.name">
                <div class="name">
                  <label>{{ product.name }}</label>
                  <span>{{ product.description }}</span>
                </div>
                <strong>{{ product.amount.toLocaleString() }}원</strong>
              </dd>
            </dl>
            <!-- <dl>
              <dt>서브카테고리</dt>
              <dd>
                <div class="name">
                  <label>상품명입니다.</label>
                  <span>상품설명입니다.</span>
                </div>
                <strong>4,900원</strong>
              </dd>
            </dl> -->
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { groupBy } from "lodash";

export default {
  data() {
    return {
      products: [],
      select: null,
    };
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    selectedProducts() {
      const { products, select } = this;
      const targetProducts =
        products.filter((value) => value.category === select)[0] ?? [];
      const subCategoryGroup = groupBy(
        targetProducts.products,
        (value) => value.group
      );
      return Object.keys(subCategoryGroup).map((key) => {
        return { title: key, products: subCategoryGroup[key] };
      });
    },
  },
  methods: {
    async getProducts() {
      const url = "https://v2.dailywash.co.kr/api/products";
      const data = await fetch(url).then((res) => res.json());
      if (data.length > 0) {
        const [luxury, ...other] = data;
        this.products = other.concat([luxury]);
        this.select = other[0]?.category;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.price-table {
  margin-top: 30px;

  .inner {
    min-height: 800px;
  }

  .alert {
    p {
      margin: 0px;
      background: #f8f2f4;
      padding: 10px;
      text-align: center;
      border-radius: 100px;
      margin-bottom: 40px;
      span {
        color: #de0059;
      }
    }
  }

  .left {
    h2 {
      font-size: 32px;
      font-weight: 500;
    }
    .menu {
      padding: 0px;
      margin-top: 30px;

      .item {
        margin-bottom: 15px;

        span {
          font-size: 18px;
          cursor: pointer;
        }
      }

      .item.active {
        color: #0e8ff2;
      }
    }
  }

  .right {
    dl {
      margin-bottom: 50px;

      &:last-child {
        border-bottom: 0px;
      }

      dt {
        font-size: 18px;
        margin-bottom: 20px;
      }
      dd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        background: #eef2f5;
        padding: 15px;
        border-radius: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        .name {
          label {
            display: block;
            font-size: 15px;
          }
          span {
            display: block;
            font-size: 12px;
            color: #898989;
          }
        }

        strong {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}

@media screen and(max-width:960px) {
  .price-table {
    padding: 40px 0px;
 

    .alert {
      padding: 0 20px;
      p {
        border-radius: 5px;
      }
    }
    
    .inner{
      height:100%;
    }

    .left {

      h2 {
        padding: 0 20px;
      }
      .menu {
        position: sticky;
        top:60px;
        overflow-x: auto;
        display: flex;
        padding-left: 20px;

        &::-webkit-scrollbar {
          display: none;
        }

        .item {
          span {
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            margin-right: 10px;
            background: #f2f2f2;
            border-radius: 25px;
            min-width: 100px;
          }
        }

        .item.active {
          span {
            color: #fff;
            background: #292929;
          }
        }
      }
    }
    .right {
      padding: 0 20px;
    }
  }
}
</style>
