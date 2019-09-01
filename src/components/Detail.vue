<template>
    <div id="detail">
        <h2>Detail Component</h2>
        <!-- 2.2局部组件使用 -->
        <Local></Local>
    </div>
</template>

<script>
// 2局部组件
// 2.1引入局部组件
import Local from './Local'
export default {
    name:"Detail",
    components:{
        Local
    }
}
</script>

<style lang="less" scoped>

</style>