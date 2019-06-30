<template>
  <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="handleClose" center>
    <span style="color:blue">报警处理</span>
    <p>
      <span class="span">
        车牌号：
        <span class="span-content">{{num}}</span>
      </span>
      <span class="span">
        车牌颜色：
        <span class="span-content">{{color}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        所属车队：
        <span class="span-content">{{carTeam}}</span>
      </span>
      <span class="span">
        车辆类型：
        <span class="span-content">{{carType}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        司机：
        <span class="span-content">{{driver}}</span>
      </span>
      <span class="span">
        电话号码：
        <span class="span-content">{{telNum}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        报警类型：
        <span class="span-content">{{alarmType}}</span>
      </span>
      <span class="span">
        报警内容：
        <span class="span-content">{{alarmContent}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        报警时间：
        <span class="span-content">{{alarmTime}}</span>
      </span>
      <span class="span">
        报警地点：
        <span class="span-content">{{alarmArea}}</span>
      </span>
    </p>
    <p>
      <span class="span">
        处理状态：
        <span class="span-content">{{handelStatus}}</span>
      </span>
      <span class="option-content">操作日志：</span>
      <input style="width: 40%" type="text">
    </p>
    <p class="pr">
      <span class="pa">处理意见：</span>
      <em></em>
      <textarea style="width:81.2%;height:100px;"></textarea>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">处 理</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      num: "434232",
      color: "",
      carTeam: "",
      carType: "rs",
      driver: "",
      telNum: "gddhf",
      alarmType: "55",
      alarmContent: "",
      alarmTime: "44",
      alarmArea: "334",
      handelStatus: "1234"
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
  color: gray;
}
.span-content {
  color: black;
}

.option-content {
  display: inline;
  color: gray;
}
em {
  display: inline-block;
  width: 70px;
  text-align: right;
  margin-right: 20px;
}
.pa {
  position: absolute;
  color: gray;
}
.pr {
  position: relative;
}
</style>
