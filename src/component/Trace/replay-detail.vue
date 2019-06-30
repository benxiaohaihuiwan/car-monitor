<template>
  <div>
    <el-dialog :visible.sync="centerDialogVisible" center width="32%">
      <span class="title">回放模式</span>
      <p>
        <span>
          回放超速：
          <el-input class="input-content" v-model="input_speed"></el-input>公里/小时
        </span>
      </p>
      <p>
        <span>轨迹类型：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </p>
      <hr>
      <span class="title">其他设置</span>
      <el-checkbox v-model="checkAllPlatform" @change="handleCheckAllPlatformChange">全选</el-checkbox>
      <div style="margin: 13px 0;"></div>
      <el-checkbox-group v-model="checkedPlatform" @change="handleCheckedAlarmPlatformChange">
        <el-checkbox
          v-for="alarmPlatform in alarms"
          :label="alarmPlatform"
          :key="alarmPlatform"
          style="margin-bottom:2vh;width:100px"
        >{{alarmPlatform}}</el-checkbox>
      </el-checkbox-group>
      <hr>
      <span class="title">导出时间间隔设置</span>
      <p>
        <span>
          时间间隔：
          <el-input class="input-content" v-model="input_time"></el-input>秒
        </span>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">保 存</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const alarmOptions = [
  "紧急报警",
  "超速报警",
  "车辆被盗(器)",
  "疲劳驾驶",
  "GNss发生块",
  "GNss被剪短"
];
export default {
  data() {
    return {
      centerDialogVisible: true,
      checkAllPlatform: false,
      checkedPlatform: ["车辆被盗(器)", "疲劳驾驶"],
      alarms: alarmOptions,
      input_speed: "",
      input_time:"",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleCheckedAlarmPlatformChange(value) {
      let checkedCount = value.length;
      this.checkAllPlatform = checkedCount === this.alarms.length;
    },
    handleCheckAllPlatformChange(val) {
      this.checkedPlatform = val ? alarmOptions : [];
    }
  }
};
</script>

<style>
.el-input {
  display: table-cell;
}
.el-input__inner {
  height: 30px;
  line-height: 30px;
}
.input-content {
  width: 80px;
}
.title {
    color:blue;
}
</style>



