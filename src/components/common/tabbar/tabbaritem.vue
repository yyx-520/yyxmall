<template>
  <div class="tartBarItem" @click="itemclicked">
    <div v-if="notAcitve" > <slot name="item-icon"></slot></div>
    <div v-else><slot name="item-activeicon"></slot></div>
    <div :style="myacitvecss"><slot name="item-text"></slot></div>
<!--    <img src="../../assets/imag/tarbar/canku.png" alt="">-->
<!--    <div>商品</div>-->
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
   props:{
    path:String,
     mycolor:{
      type:String,
       default:'red'
     }
   },
  data:function ()
  {
    return{
      // notAcitve:false
    }
  },
  methods:{
    itemclicked:function () {
      this.$router.push('/location').catch(err=>{console.log(err)});
       this.$router.replace(this.path)
    }
  },
  computed:{
     notAcitve(){
       return this.$route.path.indexOf(this.path);
     },
    myacitvecss(){
        return this.notAcitve ? {}:{color:this.mycolor}
    }
  }
}
</script>

<style scoped>
.tartBarItem{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

  /*box-shadow: 0px -1px 1px rgba(100,100,100,.2);*/
}
.tartBarItem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: lightcoral;

}
</style>
