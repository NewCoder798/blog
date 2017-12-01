<template>
  <div class="layout">
    <header>
      <canvas></canvas>
      <div class="select">
        <h1>Look For Less,Do More</h1>
        <form action="">
          <input type="text"/>
          <input type="button"/>
        </form>
      </div>
    </header>
    <nav>
      <div v-for="(item,index) in navList" :key="index">
        {{ item.title }}
      </div>
    </nav>
    <section>这是内容</section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navList:[
        {
          title:'首页',
          action:'/',
        },
        {
          title:'文章',
          action:'/',
        },
        {
          title:'作品',
          action:'/',
        },
        {
          title:'关于',
          action:'/',
        }
      ]
    }
  }
}
</script>
<style lang="less">
body{
  overflow: hidden;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
header{
  position: relative;
  padding-top:30%;
  .select{
    position: absolute;
    left:50%;
    top:50%;
    width:500px;
    margin-left:-250px;
    color:#fff;
    form{
      input[type="text"]{
        background: none;
        border:2px solid #fff;
        width:100%;
        height: 45px;
      }
    }
  }
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width:100% !important;
  height:100% !important;
  cursor: pointer;
}
</style>
