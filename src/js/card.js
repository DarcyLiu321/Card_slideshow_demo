import data from '../../data/db.json' //导入图片的信息 data

//声明一个变量来拿到所有图片的信息
const imagesInfo = data.images;

//在javascript 内写html 下面的函数是为了创造一个card的dom节点
function createCard(imagesInfo) {
  const cardDom = document.createElement('div') //创建一个div 
  cardDom.classList.add('card'); //class名字是card
  cardDom.style.backgroundImage = `url(${imagesInfo.address})`; 
  return cardDom;
};

export const cardGroup = document.createElement('div') //此时创建的div 盒子是套住上面卡片盒子的一个大盒子
cardGroup.classList.add('cardGroup')//该div盒子的class名称为cardGroup  classList.add是在原来基础上添加 且一次只能加一个类名

//此时已经有了创建卡片的方法函数 以及放卡片的盒子 此时就要真正开始创建卡片并且把卡片放进盒子里
imagesInfo.forEach(imagesInfo=>{
  const cardDom = createCard(imagesInfo); //调用createCard函数来创造card的dom节点
  cardGroup.append(cardDom);//每创造一个dom节点，就将它放进cardGroup这个大盒子里
})