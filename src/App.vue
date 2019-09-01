<template>
  <div class="container">
    
        <ul class="nav nav-tabs">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/detail">Detail</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <router-view></router-view>
    <!-- 1.2使用全局组件Global -->
    <Global></Global>
    
</div>
</template>
<script>

export default {
  name: 'app'
}
</script>

<style lang="less">

</style>
