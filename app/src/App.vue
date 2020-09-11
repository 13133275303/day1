<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 蜡笔小新
 * @Date: 2020-09-11 08:38:21
 * @LastEditors: 蜡笔小新
 * @LastEditTime: 2020-09-11 08:54:22
-->
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/about">关注</router-link>
            <router-link to="/home">发现</router-link>
            <router-link to="/tc">同城</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    height: 30px;
    display: flex;
    justify-content: space-around;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
