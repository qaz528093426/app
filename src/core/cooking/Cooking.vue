<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb
      name="生活技艺助手"
      slug="cooking"
      root="/app/cooking"
      :feedbackEnable="true"
    >
      <img slot="logo" svg-inline :src="getAppIcon('cooking')" />
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main :withoutRight="true" :withoutLeft="true">
      <div class="m-cooking">
        <div class="m-cooking-head">
          <div class="m-cooking-tabs">
            <el-radio-group v-model="type" size="medium" @change="search">
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
                v-model="state2"
                :fetch-suggestions="querySearch"
                placeholder="搜索：名称，属性"
                :trigger-on-focus="false"
                @select="handleSelect"
              ></el-autocomplete>
            </div>
            <div class="m-cooking-column">
              <el-menu @open="handleOpen" @close="handleClose">
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
                    >{{ subItem.title }}</el-menu-item
                  >
                </el-submenu>
              </el-menu>
            </div>
          </div>
          <div class="m-cooking-right">
            <el-progress :percentage="exp" status="success"></el-progress>
            <div class="m-cooking-mainItem">
              <div class="m-cooking-goods">
                <span class="icon"></span>
                <span class="goods">{{goodsObj.getGoods}}</span>
              </div>
            </div>
            <div class="m-cooking-subItem">
              <div>
                <div>货币消耗</div>
                <div>{{goodsObj.moneyExpend}}</div>
              </div>
              <div>
                <div>材料消耗</div>
                <div class="m-cooking-goods">
                  <span class="icon"></span>
                  <span class="goods">{{goodsObj.goods}}</span>
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
      client: "std",
      type: "sewing",
      exp: 0,
      goodsObj:{},
      typeColumnArr: [
        {
          title: "上衣",
          index: "1",
          subTitle: [
            {
              title: "上衣配方1",
              index: "1-1",
              focal: false,
            },
            {
              title: "上衣配方2",
              index: "1-2",
              focal: false,
            },
            {
              title: "上衣配方3",
              index: "1-3",
              focal: true,
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
            },
            {
              title: "裤子配方2",
              index: "2-2",
              focal: false,
            },
            {
              title: "裤子配方3",
              index: "2-3",
              focal: true,
            },
          ],
        },
      ],
    };
  },
  computed: {},
  methods: {
    getAppIcon,
    search() {},
    handleSelect() {},
    handleOpen() {},
    handleClose() {},
    querySearch() {},
  },
  filters: {},
  mounted: function () {},
  components: {
    Nav,
  },
};
</script>

<style lang="less">
@import "../../assets/css/cooking.less";
</style>