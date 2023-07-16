import '../css/style.scss'
import { buttonGroup } from './button';

import { cardGroup } from './card';



// html中有一个app的盒子 我们要在javascript中获取到这个app dom
//疑问？是不是如果此时的html里没有任何div盒子 我们也就不用去get element by ID
//疑问？ 为什么不是create element by id 创建一个app的盒子
//疑问？什么时候用create 什么时候用get？
const appDom = document.getElementById('app');

//card group 此时讲cardGroup这个盒子
//疑问？ 什么时候append 什么时候append child
//card group为什么不加引号？
appDom.append(cardGroup)

//add button
cardGroup.append(buttonGroup)

//获取html内的 .left button
const leftButton = buttonGroup.querySelector('.left')

//获取html内的 .right button
const rightButton = buttonGroup.querySelector('.right')

//给left button添加事件
leftButton.addEventListener('click', () => {
const cardList = cardGroup.querySelectorAll('.card'); //在cardGroup里找到第一张类名为.card的卡片
 cardGroup.prepend(cardList[cardList.length-1]) // 在卡片类名内部前面添加卡片
})

//给right button添加事件
rightButton.addEventListener('click',()=>{
  const cardList = cardGroup.querySelectorAll('.card'); //在cardGroup里找到所有的类名为.card的卡片
 cardGroup.insertBefore(cardList[0],buttonGroup);// 区别insertBefore 和 append，insertBefore可以判断添加在那个元素之前，append则直接添加在了最后面
})