<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
    async asyncData() {
        let data = await axios.get('/api/bins/rwyw2')
        console.log(data[0])
        return data
    },
  name: "test",
  data() {
    return {
        tableData:[]
    };
  },
  methods: {
      getData(){
          for (let i = 0; i < 1500; i++) {
              this.tableData.push({
                  date: "2018-11-28",
                  name: "vine",
                  address: "四川省成都市电子科技大学沙河小区",
              })           
          }
      }
  },
  created(){
      this.getData()
  }
};
</script>
 
<style scoped>
</style>
