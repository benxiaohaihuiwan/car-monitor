<template>
<div>
<el-dialog
  :visible.sync="centerDialogVisible" center width='40%'>
  <span>终端报警</span>
  <el-checkbox  v-model="checkAllTerminal" @change="handleCheckAllTerminalChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedTerminal" @change="handleCheckedAlarmTerminalChange">
    <el-checkbox v-for="alarmTerminal in alarms" :label="alarmTerminal" :key="alarmTerminal" style='margin-bottom:2vh;width:130px'>{{alarmTerminal}}</el-checkbox>
  </el-checkbox-group>
  <hr />
  <span>平台报警</span>
  <el-checkbox  v-model="checkAllPlatform" @change="handleCheckAllPlatformChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedPlatform" @change="handleCheckedAlarmPlatformChange">
    <el-checkbox v-for="alarmPlatform in alarms" :label="alarmPlatform" :key="alarmPlatform" style='margin-bottom:2vh;width:130px'>{{alarmPlatform}}</el-checkbox>
  </el-checkbox-group>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">保 存</el-button>
    <el-button @click="centerDialogVisible = false">取 消</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
const alarmOptions = ['紧急报警', '超速报警','车辆被盗(通过车辆防盗器)', '疲劳驾驶', 'GNss发生故障模块','GNss天线未接或被剪短'];
export default {
    data() {
      return {
        centerDialogVisible:true,
        checkAllTerminal: false,
        checkAllPlatform: false,
        checkedTerminal: ['紧急报警', '超速报警'],
        checkedPlatform: ['车辆被盗(通过车辆防盗器)', '疲劳驾驶'],
        alarms: alarmOptions,
        
      };
    },
    methods: {
      handleCheckAllTerminalChange(val) {
        this.checkedTerminal = val ? alarmOptions : [];
      },
      handleCheckedAlarmTerminalChange(value) {
        let checkedCount = value.length;
        this.checkAllTerminal = checkedCount === this.alarms.length;
      },
      handleCheckedAlarmPlatformChange(value) {
        let checkedCount = value.length;
        this.checkAllPlatform = checkedCount === this.alarms.length;
      },
      handleCheckAllPlatformChange(val) {
        this.checkedPlatform = val ? alarmOptions : [];
      },
    }
}
</script>

<style>

</style>


