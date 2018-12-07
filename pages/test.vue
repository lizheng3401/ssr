<template>
  <div>
    <el-table :data="showCaseTable" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination  class="text-right" ref="taskPage"
        @size-change="handleSizeChange" @current-change="handleCurrentChange"       
        :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pageSize" :total="taskTotal"
        layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    {{table[0]}}
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
    async asyncData ({app}) {
        let {data} = await app.$axios.get("/api/test.json")
        return {table: data}
    },
    name: "test",
    data() {
        return {
            tableData:[],
            currentPage: 1, 
            taskTotal: 0, 
            pageSize: 10, 
            caseTable: [], 
            handCaseTable: [], 
            showCaseTable: [],
        }
    },
    methods: {
        getData(){
            const self = this
            let data = null
            self.$axios.get('/api/test.json').then(resp => {
                data = resp.data
                this.refreshTable(data)
            }).catch(error => {
                self.$message.error(error)
            })
            
        },
        refreshTable(tableData){
            this.caseTable = tableData;
            this.taskTotal = tableData.length;
            this.arrSlice(this.caseTable,this.pageSize)
            this.showCaseTable=this.handCaseTable[0]
        },
      //将一维数组等距切割后组成二维数组
        arrSlice(arr,size) {//arr 被切割的数组  size切割长度
                this.handCaseTable=[];//清空之前的数据
                for (var i=0;i<Math.ceil(arr.length/size);i++) {
                    var start = i*size;
                    var end = start + size;
                    this.handCaseTable.push(arr.slice(start,end));
                }
            },
        // 选择每页显示记录数
        handleSizeChange (size) {
            this.pageSize = size
            this.arrSlice(this.caseTable,this.pageSize)
            //默认显示切割后的第一个数组的数据
            this.showCaseTable=this.handCaseTable[0]
            var maxPage = Math.ceil(this.taskTotal / size)
            if (this.currentPage > maxPage) this.currentPage = maxPage
            else this.showCaseTable=this.handCaseTable[this.currentPage-1]
        },
        // 翻页
        handleCurrentChange (current) {//current点击的页码
            this.currentPage = current
            this.showCaseTable=this.handCaseTable[this.currentPage-1]  //currentPage从1开始
        },
    },
    created(){
        // this.getData()
        // console.log(this.caseTable[0])
    }
};
</script>
 
<style scoped>
</style>
