<template>
  <el-dialog :visible.sync="centerDialogVisible" center width="30%">
    <el-checkbox-group v-model="checkedTerminal" @change="handleCheckedAlarmTerminalChange">
      <el-checkbox
        v-for="alarmTerminal in alarms"
        :label="alarmTerminal"
        :key="alarmTerminal"
        class="checkbox-content"
      >{{alarmTerminal}}</el-checkbox>
    </el-checkbox-group>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false" style="height:35px">保 存</el-button>
      <el-button @click="centerDialogVisible = false" style="height:35px">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
const alarmOptions = ["紧急", "超速", "车辆", "疲劳驾驶", "故障模块", "被剪短"];
export default {
  data() {
    return {
      form: {
        name: ""
      },
      centerDialogVisible: true,
      checkAllTerminal: false,

      checkedTerminal: ["紧急", "超速"],

      alarms: alarmOptions
    };
  },
  methods: {
    handleCheckedAlarmTerminalChange(value) {
      let checkedCount = value.length;
      this.checkAllTerminal = checkedCount === this.alarms.length;
    }
  }
};
</script>

<style>
.checkbox-content {
  margin-bottom: 2vh;
  width: 120px;
  margin-right: 0px;
}
.el-dialog--center .el-dialog__body {
  padding: 0px 0px 0px 25px;
}
</style>
