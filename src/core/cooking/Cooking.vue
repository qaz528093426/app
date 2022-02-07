<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb
      name="生活技艺助手"
      slug="cooking"
      root="/app/cooking"
      :feedbackEnable="true"
    >
      <img
        slot="logo"
        svg-inline
        :src="getAppIcon('cooking')"
      />
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main
      :withoutRight="true"
      :withoutLeft="true"
    >
      <div class="m-cooking">
        <div class="m-cooking-head">
          <div class="m-cooking-tabs">
            <el-radio-group
              v-model="type"
              size="medium"
              @change="search"
            >
              <el-radio-button label="sewing">缝纫</el-radio-button>
              <el-radio-button label="forging">锻造</el-radio-button>
              <el-radio-button label="cooking">烹饪</el-radio-button>
              <el-radio-button label="pharmacy">制药</el-radio-button>
              <el-radio-button label="furniture">匠梓</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="m-cooking-main">
          <div class="m-cooking-left">
            <div class="m-cooking-search">
              <el-autocomplete
                class="m-cooking-input"
                v-model="searchValue"
                :fetch-suggestions="querySearch"
                placeholder="搜索：名称，属性"
                :trigger-on-focus="false"
                @select="handleSelect"
              ></el-autocomplete>
            </div>
            <div class="m-cooking-column">
              <el-menu
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu
                  v-for="item in typeColumnArr"
                  :key="item.index"
                  :index="item.index"
                >
                  <template slot="title">
                    <span>{{ item.title }}</span>
                  </template>
                  <el-menu-item
                    v-for="subItem in item.subTitle"
                    :key="subItem.index"
                    :index="subItem.index"
                    @click="handleClick(subItem)"
                  >{{ subItem.title }}
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
          <div class="m-cooking-right">
            <div class="m-cooking-expNav">
              <div class="font20">
                {{level}}级
              </div>
              <div class="m-cooking-progress">
                <el-progress
                  :percentage="exp"
                  status="success"
                ></el-progress>
              </div>
            </div>
            <div class="m-cooking-mainItem">
              <div class="m-cooking-goods">
                <span class="icon"></span>
                <span class="goods">{{goodsObj.title}}</span>
              </div>
              <el-input-number
                v-if="goodsObj.title"
                size="mini"
                @change="handleNumber"
                v-model="buildNumber"
              ></el-input-number>
            </div>
            <div class="m-cooking-subItem">
              <div class="font18">
                <span class="fontW600">货币消耗：</span>
                <span>{{goodsObj.moneyExpend}}</span>
              </div>
              <div class="m-cooking-consumeItem">
                <div class="font18 fontW600">材料消耗：</div>
                <div
                  v-for="(item,index) in goodsObj.consumeList"
                  :key="index"
                  class="m-cooking-goods"
                >
                  <span class="icon"></span>
                  <span class="goods">
                    <span>{{item.title}}</span>
                    <span>{{`(x${item.index})`}}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-cooking-foot"></div>
      </div>
      <Footer></Footer>
    </Main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
  name: "Cooking",
  props: [],
  data: function () {
    return {
      searchValue: "",
      client: "std",
      type: "sewing",
      exp: 0,
      needExp: 3000,
      level: 1,
      buildNumber: 1,
      goodsObj: {},
      typeColumnArr: [
        {
          title: "上衣",
          index: "1",
          subTitle: [
            {
              title: "上衣配方1",
              index: "1-1",
              focal: false,
              getExp: 100,
              moneyExpend: "600精力",
              consumeList: [
                {
                  title: "上衣材料1",
                  index: "1",
                },
                {
                  title: "上衣材料2",
                  index: "80",
                },
                {
                  title: "上衣材料3",
                  index: "2",
                },
              ],
            },
            {
              title: "上衣配方2",
              index: "1-2",
              getExp: 500,
              focal: false,
              moneyExpend: "300精力",
              consumeList: [
                {
                  title: "上衣材料1",
                  index: "90",
                },
                {
                  title: "上衣材料2",
                  index: "80",
                },
                {
                  title: "上衣材料3",
                  index: "55",
                },
              ],
            },
            {
              title: "上衣配方3",
              index: "1-3",
              focal: true,
              getExp: 900,
              moneyExpend: "200精力",
              consumeList: [
                {
                  title: "上衣材料1",
                  index: "9",
                },
                {
                  title: "上衣材料2",
                  index: "5",
                },
                {
                  title: "上衣材料3",
                  index: "2",
                },
              ],
            },
          ],
        },
        {
          title: "裤子",
          index: "2",
          subTitle: [
            {
              title: "裤子配方1",
              index: "2-1",
              focal: false,
              moneyExpend: "500精力",
              getExp: 200,
              consumeList: [
                {
                  title: "上衣材料1",
                  index: "5",
                },
                {
                  title: "上衣材料2",
                  index: "7",
                },
                {
                  title: "上衣材料3",
                  index: "5",
                },
              ],
            },
            {
              title: "裤子配方2",
              index: "2-2",
              focal: false,
              getExp: 300,
              moneyExpend: "1600精力",
              consumeList: [
                {
                  title: "裤子材料1",
                  index: "1",
                },
                {
                  title: "裤子材料2",
                  index: "80",
                },
                {
                  title: "裤子材料3",
                  index: "2",
                },
              ],
            },
            {
              title: "裤子配方3",
              index: "2-3",
              focal: true,
              getExp: 100,
              moneyExpend: "700精力",
              consumeList: [
                {
                  title: "裤子材料1",
                  index: "1",
                },
                {
                  title: "裤子材料2",
                  index: "80",
                },
                {
                  title: "裤子材料3",
                  index: "2",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {},
  methods: {
    getAppIcon,
    search() {
      console.log("search");
    },
    handleSelect() {
      console.log("handleSelect");
    },
    handleOpen() {
      console.log("handleOpen");
    },
    handleClose() {
      console.log("handleClose");
    },
    querySearch() {
      console.log("querySearch");
    },
    handleClick(item) {
      this.goodsObj = item;
      this.buildNumber = 1;
      console.log("handleClick", item);
    },
    handleNumber(e) {
      let number = this.goodsObj.getExp * e;
      console.log(e, number, (number % this.needExp)%100);
    },
  },
  filters: {},
  // mounted() {},
  components: {
    Nav,
  },
};
</script>

<style lang="less">
@import "../../assets/css/cooking.less";
.el-menu {
  border:none,
  .is-opened {
    .el-submenu__title {
      background-color: #0366d6;
    }
  }
}
</style>