<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 蜡笔小新
 * @Date: 2020-09-11 08:49:25
 * @LastEditors: 蜡笔小新
 * @LastEditTime: 2020-09-11 09:07:30
-->
<template>
    <div>
        <dl v-for="(item,index) in list" :key="index">
            <dd>
                <img :src="item.img" alt />
            </dd>
            <dt>
                <img :src="item.img" alt />
            </dt>
        </dl>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        Axios.get('/getList').then(res => {
            this.list = res.data.data
        })
    }
}
</script>

<style lang='scss'>
dl {
    height: 300px;
    dd {
        float: left;
    }
    dt {
        float: right;
    }
}
</style>