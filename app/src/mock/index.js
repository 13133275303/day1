/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 蜡笔小新
 * @Date: 2020-09-11 08:44:14
 * @LastEditors: 蜡笔小新
 * @LastEditTime: 2020-09-11 09:08:20
 */
import Mock from 'mockjs'

Mock.mock('/getList', 'get', {
    code: 200,
    'data|6': [{
        img: '@image(150x300,@color)'
    }]
})