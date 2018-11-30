<template>
  <div>
    <template v-if="login">
      <Top></Top>
      <side-bar></side-bar>
    </template>
     <div class="content">
      <transition name="move" mode="out-in">
        <nuxt/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Top from '@/components/common/Top'
  import SideBar from '@/components/common/SideBar'
  export default {
    name: "home",
    data: function () {
      return {
        login: true
      }
    },
    components:{
      Top,
      SideBar
    },
  }
</script>

<style>
@import "@/static/css/main.css";
</style>