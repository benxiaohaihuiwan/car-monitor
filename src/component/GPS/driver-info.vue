<template>
  <el-dialog :visible.sync="dialogVisible" width="20%" :before-close="handleClose" center>
    <p>
      <span class="span">
        车牌：
        <span class="span-content">{{num}}</span>
      </span>
      <span class="span">
        ACC状态：
        <span class="span-content">{{accStatus}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        司机：
        <span class="span-content">{{driver}}</span>
      </span>
      <span class="span">
        速度：
        <span class="span-content">{{speed}}</span>
      </span>
    </p>
    <p>
      <span style="color:blue">
        手机：
        <span class="span-content">{{telNum}}</span>
      </span>
    </p>
    <p>
      <span style="color:blue">
        时间：
        <span class="span-content">{{time}}</span>
      </span>
    </p>
    <p>
      <span style="color:blue">
        位置：
        <span class="span-content">{{area}}</span>
      </span>
    </p>
    
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      num: "434232",
      accStatus: "ON",
      speed: "rs",
      driver: "是个人",
      telNum: "18372373344",
      time: "2019-04-23 12:43:32",
      area: "陕西省西安是周至县尚存直流电的假也就是哲瀚的",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
.span {
  display: inline-block;
  width: 45%;
  color: blue;
}
.span-content {
  color: black;
}
.el-dialog--center .el-dialog__body {
    padding:0px 15px 10px;
}
p {
    margin: 0px
}
</style>
