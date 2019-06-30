<template>
  <div>
    <el-dialog
      title="今日数据统计"
      class="title"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span class="tip-content">
        <i class="el-icon-mobile-phone icon"></i>车况
      </span>
      <div class="detail-content">
        <p>
          <span class="monitor-span-data">20</span>
          <span class="monitor-span-data">17</span>
        </p>
        <p>
          <span class="monitor-span-desc">车辆总数</span>
          <span class="monitor-span-desc">运行车辆</span>
        </p>
        <p>
          <span class="monitor-span-data">1000km</span>
          <span class="monitor-span-data">0.8h</span>
        </p>
        <p>
          <span class="monitor-span-desc">总里程数</span>
          <span class="monitor-span-desc">总运行时间</span>
        </p>
      </div>
      <hr>
      <span class="tip-content">
        <i class="el-icon-mobile-phone icon"></i>安全
      </span>
      <div class="detail-content">
        <p>
          <span class="monitor-span-data">10</span>
          <span class="monitor-span-data">3</span>
        </p>
        <p>
          <span class="monitor-span-desc">超速次数</span>
          <span class="monitor-span-desc">疲劳驾驶</span>
        </p>
      </div>
      <hr>
      <span class="tip-content">
        <i class="el-icon-mobile-phone icon"></i>能耗
      </span>
      <div class="detail-content">
        <p>
          <span class="monitor-span-data">1l</span>
          <span class="monitor-span-data">0.01l</span>
        </p>
        <p>
          <span class="monitor-span-desc">总油耗数</span>
          <span class="monitor-span-desc">每公里油耗数</span>
        </p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true
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
.icon {
  margin-left: -30px;
  margin-right: 10px;
}
hr {
  height: 10px;
  border: none;
  border-top: 6px solid #f5f7fa;
  margin: 0px;
}
.el-dialog__header {
  background-color: #409eff;
}
.detail-content {
  padding: 5px 45px;
}
.monitor-span-data {
  display: table-cell;
  margin-right: 110px;
  width: 130px;
  color: black;
}
.tip-content {
  margin-left: 45px;
  font-size: 20px;
  color: black;
}
.monitor-span-desc {
  display: table-cell;
  margin-right: 110px;
  color: grey;
  width: 130px;
  font-size: 16px;
}
.el-dialog__body {
  padding: 15px 0px;
}
</style>
