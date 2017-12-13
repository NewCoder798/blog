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
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link :to="item.action">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <section>这是内容</section>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      navList:[
        {
          title:'首页',
          action:'/index',
        },
        {
          title:'文章',
          action:'/articles',
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
  },
  methods:{
    
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
  background:#000;
  .select{
    position: absolute;
    left:50%;
    top:50%;
    width:500px;
    margin-left:-250px;
    color:#fff;
    text-align: center;
    form{
      input[type="text"]{
        background: none;
        border:2px solid #fff;
        width:100%;
        height: 45px;
        padding-left:5px;
        color:#fff;
        font-size: 1rem;
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
nav{
  ul {
    text-align: center;
    li{
      list-style: none;
      display: inline-block;
      padding:0 2rem;
      font-size: 1.5rem;
      line-height: 3rem;
      a{
        text-decoration: none;
        color:#000;
      }
    }
  }
}
section{
  padding:0 2rem;
  width:100%;
}
</style>
