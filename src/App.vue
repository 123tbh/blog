<template>
  <div id="app">
    <div class="layout">
      <div class="bg-layout">
        <div class="bg-layout-image"></div>
      </div>
      <div class="header">
        <div class="header-content">
          <p class="header-content-title">糖糖的blog</p>
        </div>
      </div>
      <div class="container">
        <aside class="left">
          <div class="left-list">
            <div v-for="(item, index) in tabtitle" :key="index">
              <router-link class="left-list-nav" :to="item.path">{{ item.name }}</router-link>
            </div>
          </div>
        </aside>
        <div class="mid"><router-view></router-view></div>
        <div class="right">right</div>
      </div>
      <div class="foot">
        <div class="foot-content">111</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabtitle: [
        { path: './pageindex', name: '首页' },
        { path: './HomeView', name: '技术专题' },
      ],
    };
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
      // background-image: url('../assets/images/bg.jpeg');
      background-image: url('http://jxdlr.com/static/media/background.85dcdad9.png');

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
      .header-content-title {
        margin: 4px 0;
        font-size: 21px;
        font-weight: 700;
        color: #000;
        font-family: DINRegular;
      }
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
    height: 60px;
    background-color: rgb(245, 245, 245);
    z-index: 12;
    .foot-content {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 1050px;
      height: 60px;
    }
  }
}
</style>
