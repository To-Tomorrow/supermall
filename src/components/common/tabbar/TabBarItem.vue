<template>
  <div  class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-action"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data(){
      return {
        // isActive: true

      }
    },methods:{
      itemClick() {
        console.log(this.path);
        if(this.$route.path === this.path){

        }else {
          this.$router.replace(this.path)
        }
      }
    },computed:{
      isActive(){
        return this.$route.path === this.path
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item{
    flex :1;
    text-align: center;
    height:49px;
  }

  .tab-bar-item img{
    height: 24px;
  }
</style>
