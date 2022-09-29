<template>
  <a-carousel autoplay>
    <div v-for="(item, index) in imgData" :key="index">
      <h3>
        <img class="bg-image" :src="item.src" alt="" />
      </h3>
    </div>
    <!-- <div>
      <h3>
        <img class="bg-image" src="~@/assets/images/lb.jpeg" alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img class="bg-image" src="~@/assets/images/lb2.jpeg" alt="" />
      </h3>
    </div>
    <div>
      <h3>
        <img class="bg-image" src="../assets/images/lb3.jpeg" alt="" />
      </h3>
    </div> -->
  </a-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        { title: 'img1', src: require('~@/assets/images/lb.jpeg') },
        { title: 'img2', src: require('~@/assets/images/lb2.jpeg') },
        { title: 'img3', src: require('~@/assets/images/lb3.jpeg') },
        { title: 'img4', src: require('~@/assets/images/lb4.jpeg') },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
/* For demo */
/deep/.ant-carousel :deep(.slick-slide) {
  text-align: center;
  width: 600px;
  height: 113.18px;
  line-height: 113.18px;
  background: rgb(221, 10, 10);
  overflow: hidden;
}

.bg-image {
  width: 600px;
  height: 113.18px;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
