<template>
  <div class="title">
    <el-select v-model="value5" multiple placeholder="请选择车辆">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="～"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <p style="display:inline-block">
      <span class="dayDetial">今天</span>
      <span class="dayDetial">|</span>
      <span class="dayDetial">近2天</span>
      <span class="dayDetial">|</span>
      <span class="dayDetial">近3天</span>
      <span class="dayDetial">|</span>
      <span class="dayDetial">近3天</span>
    </p>
    <el-button icon="el-icon-search" type="primary" class="button-content">查询</el-button>
    <div class="container_table">
      <div style="margin:10px 25px">
        <span class="dayDetial">上一辆</span>
        <span class="dayDetial">下一辆</span>
        <span style="margin-left:20px;margin-right:10px">开</span>
        <el-switch v-model="value1"></el-switch>
        <span style="margin-left:20px;margin-right:10px">关</span>
        <el-switch v-model="value2"></el-switch>
      </div>
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column prop="appname" label="车牌号码"></el-table-column>
        <el-table-column prop="apkname" label="时间"></el-table-column>
        <el-table-column prop="type" label="行车记录仪速度(km/h)"></el-table-column>
        <el-table-column label="制动开关" >
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="点火开关" >
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="左转向灯" >
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="右转向灯">
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="远光灯">
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="近光灯" >
          <template>
            <el-switch v-model="value2"></el-switch>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="fy"
        layout="prev, pager, next"
        @current-change="current_change"
        :total="total"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "list11",
  data() {
    return {
      total: 100,
      pagesize: 9, //每页的数据条数
      currentPage: 1, //默认开始页面
      istag: true,
      input: "",
      input21: "",
      value1: true,
      value2: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value5: [],
      tableData: [
        {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
        },
        {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          
        },
        {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          
        },
        {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          
        },
        {
          appname: "2喵喵直播",
          apkname: "2bdkdl",
          type: "2视频直播",
         
        },
        {
          appname: "3喵喵直播",
          apkname: "1bdkdl",
          type: "3视频直播",
          
        },
        {
          appname: "4喵喵直播",
          apkname: "4bdkdl",
          type: "4视频直播",
         
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "th";
      }
      return "";
    },
    switchChange() {
      this.istag = !this.istag;
    },
    beforeCreated: function() {
      this.total = this.tableData.length;
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>

<style>
.button-content {
  padding: 0px 5px;
  height: 30px;
  line-height: 17px;
}
.dayDetial {
  margin: 0px 5px;
  color: #409eff;
}
.title {
  height: 100%;
}
.container_table {
  border: 10px solid #d8d8d8;
}
</style>