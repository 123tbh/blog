<template>
  <div class="layout">
    <div class="bg-layout">
      <div class="bg-layout-image"></div>
    </div>
    <div class="header">
      <div class="header-content">
        <p class="title">糖糖的blog</p>
        <!-- <p class="motto">忙着可爱</p> -->
      </div>
    </div>
    <div class="container">
      <aside class="left">
        <div class="left-list">
          <a
            href=""
            class="left-list-nav"
            v-for="(item, index) in tabtitle"
            :key="index"
          >
            <span>{{ item }}</span>
          </a>
        </div>
      </aside>
      <div class="mid">midmidmidmidmidmidmidmid</div>
      <div class="right">right</div>
    </div>
    <div class="foot">111</div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      tabtitle: ["tab1", "tab2", "tab3"],
    };
  },
  methods: {
    checkof(newval) {
      console.log(newval, "newval111111");
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  padding-top: 80px;
  .bg-layout {
    .bg-layout-image {
      position: absolute;
      width: 100%;
      height: 100%;
      background-position: 50%;
      background-image: url("../assets/images/bg.jpeg");
      background-size: cover;
      opacity: 0.3;
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(238, 238, 238);
    z-index: -1;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background-color: rgb(248, 248, 248);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 12;
    .header-content {
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 1050px;
      height: 60px;
    }
  }
  .container {
    position: relative;
    display: flex;
    margin: 0 auto;
    padding-bottom: 30px;
    width: 1050px;
    min-height: calc(100vh - 140px);
    .left {
      margin-right: 20px;
      width: 150px;
      height: auto;
      .left-list {
        position: fixed;
        width: 150px;
        .left-list-nav {
          display: block;
          margin-bottom: 8px;
          padding: 0 1rem;
          height: 3em;
          line-height: 3em;
          color: var(--text-secondary);
          border-radius: 4px;
          transition: background 0.4s, color 0.4s;
        }
      }
    }
    .mid {
      width: 600px;
    }

    .right {
      margin-left: 20px;
      width: 260px;
    }
  }
  .foot {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 1050px;
    height: 60px;
  }
}
</style>
