<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo"
             unique-opened router
             background-color="#242F42" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(menuItem,index) in menu">
        <el-submenu v-if="menuItem.subs" :index="menuItem.index" :key="index">
          <span slot="title"><i :class="menuItem.icon"></i>{{menuItem.title}}</span>
          <el-menu-item v-for="(subsItem, i) in menuItem.subs" :key="i" :index="subsItem.index">
            {{subsItem.title}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menuItem.index" :key="index">
          <span><i :class="menuItem.icon"></i>{{menuItem.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "side-bar",
    data: function () {
      return {
        menu: [
          {
            icon: 'el-icon-setting',
            index: '/overview',
            title: '总体概况'
          },
          {
            icon: 'el-icon-menu',
            index: '/system-analysis',
            title: '游戏系统分析',
            subs: [
              {
                index: '/system-analysis/heros',
                title: '斗士系统'
              },
              {
                index: '/system-analysis/instance-zones',
                title: '副本系统'
              }
            ]
          },
          {
            icon: 'el-icon-search',
            index: '/economy',
            title: '产出数据分析'
          },
          {
            icon: 'el-icon-star-on',
            index: '/apk',
            title: 'APK包分析'
          },
          {
            icon: 'el-icon-edit-outline',
            index: '/test',
            title: 'test'
          }
        ]
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 50px;
    bottom:0;
  }
  .sidebar > ul {
    height:100%;
  }
</style>