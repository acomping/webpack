// 1．使用ES6导入语法，导入 jQuery
import $ from 'jquery'
//导入样式
import '@/css/index.css'
import '@/css/index.less'

import info from  '@/js/test/info'

//1导入图片,得到图片文件
import logo from '../test/logo.png'
// 2．给img标签的src动态赋值
$('.box').attr('src', logo)

//2．定义 jQuery的入口函数
$(function () {
    // 3．实现奇偶行变色/奇数行为红色
    $('li:odd').css('background-color', 'skyblue')
    $('li:even').css('background-color', 'grey')
})

//定义装饰器函数
function info1(target) {
    target.info = 'Person info.'
}
//定义一个普通的类
@info1
class Person {}

console.log(Person.info)
