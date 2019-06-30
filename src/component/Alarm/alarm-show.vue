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
    <el-select v-model="value5" multiple placeholder="请选择处理状态">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="value5" multiple placeholder="请选择处理状态">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button icon="el-icon-search" type="primary">查询</el-button>
    <el-button style="color:blue">报警批量处理</el-button>
    <el-button style="color:blue">execl导出</el-button>
    <div class="container_table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column prop="appname" label="车牌号码"></el-table-column>
        <el-table-column prop="apkname" label="报警类型"></el-table-column>
        <el-table-column prop="type" label="车组"></el-table-column>
        <el-table-column prop="comp_name" label="报警发生时间" width="160"></el-table-column>
        <el-table-column prop="type_number" label="报警发生地点" width="360"></el-table-column>
        <el-table-column prop="update_date" label="报警内容" width="160"></el-table-column>
        <el-table-column prop="download_num" label="报警来源"></el-table-column>
        <el-table-column prop="download_num_1" label="处理状态"></el-table-column>
        <el-table-column prop="download_num_2" label="处理时间" width="160"></el-table-column>
        <el-table-column label="操作" width="140">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">报警处理</el-button>
            <el-button type="text" size="small">定位</el-button>
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
  name: "AlarmShow",
  data() {
    return {
      total: 100,
      pagesize: 9, //每页的数据条数
      currentPage: 1, //默认开始页面
      istag: true,
      input: "",
      input21: "",

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
          comp_name: "2019-10-21 23:23:12",
          type_number: "陕西省西安市周至县尚存真留存小学第二条接到叛变",
          update_date: "速度:33 方向:正西",
          download_num: "终端报警",
          download_num_1: "处理完毕",
          download_num_2: "2019-10-21 23:23:12"
        },
         {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          comp_name: "2019-10-21 23:23:12",
          type_number: "陕西省西安市周至县尚存真留存小学第二条接到叛变",
          update_date: "速度:33 方向:正西",
          download_num: "终端报警",
          download_num_1: "处理完毕",
          download_num_2: "2019-10-21 23:23:12"
        },
         {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          comp_name: "2019-10-21 23:23:12",
          type_number: "陕西省西安市周至县尚存真留存小学第二条接到叛变",
          update_date: "速度:33 方向:正西",
          download_num: "终端报警",
          download_num_1: "处理完毕",
          download_num_2: "2019-10-21 23:23:12"
        },
         {
          appname: "苏BX1010",
          apkname: "疲劳驾驶",
          type: "宏远建设",
          comp_name: "2019-10-21 23:23:12",
          type_number: "陕西省西安市周至县尚存真留存小学第二条接到叛变",
          update_date: "速度:33 方向:正西",
          download_num: "终端报警",
          download_num_1: "处理完毕",
          download_num_2: "2019-10-21 23:23:12"
        },
        {
          appname: "2喵喵直播",
          apkname: "2bdkdl",
          type: "2视频直播",
          comp_name: "2广大科技公司",
          type_number: "2V1.2",
          update_date: "22016-05-02",
          download_num: "223.6"
        },
        {
          appname: "3喵喵直播",
          apkname: "1bdkdl",
          type: "3视频直播",
          comp_name: "3广大科技公司",
          type_number: "3V1.2",
          update_date: "32016-05-02",
          download_num: "323.6"
        },
        {
          appname: "4喵喵直播",
          apkname: "4bdkdl",
          type: "4视频直播",
          comp_name: "4广大科技公司",
          type_number: "4V1.2",
          update_date: "42016-05-02",
          download_num: "423.6"
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
.title {
  height: 100%;
}
.container_table {
  border: 10px solid #d8d8d8;
}
</style>