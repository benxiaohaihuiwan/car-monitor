<template>
  <el-dialog :visible.sync="dialogVisible" 
  width="30%" 
  :before-close="handleClose"
  lock-scroll="true">
    <div style="margin: 15px 0px;">
      <el-input placeholder="请输入车牌号查询" v-model="input3"  style="background-color:#DCDFE6;">
        <el-button slot="append" icon="el-icon-search" style="background-color:white"></el-button>
      </el-input>
    </div>
    <div style="height:360px;overflow:auto">
    <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>
   </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      input3: "",
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      },
      count: 1
    };
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "无锡泓源建设集团有限公司" }]);
      }
      if (node.level > 2) return resolve([]);

      var hasChild;
      if (node.data.name.indexOf("泓源建设") != -1) {
        hasChild = true;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          if (node.data.name === "无锡泓源建设集团有限公司") {
            data = [
              {
                name: "泓源建设"
              }
            ];
          }
          if (node.data.name === "泓源建设") {
            data = [
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              }
              ,{
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B5555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              }
            ];
          }
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
};
</script>

<style>
.el-dialog__body {
    padding-top:15px
}
.el-input__inner {
    background-color: #dcdfe6;
}
</style>
