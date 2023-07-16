import data from '../../data/db.json'

//声明一个变量来拿到button的信息
const buttonsInfo = data.buttons;

//在javascript 内写html 下面的函数是为了创造一个buttons的dom节点
function createButton(buttonsInfo){
  const buttonDom = document.createElement('i') //给button dom创建一个i标签 

  buttonDom.classList.add('button'); //class名字是button

  buttonsInfo.classNames.forEach(classNames => {
    buttonDom.classList.add(classNames)
  });//classList.add 在原来的基础上一次添加一个类名，  搭配forEach循环一起用 将数据库中的classNames全部添加进去

  return buttonDom; //此时就已经创建好了一个button 的dom节点，即创建好了一个可以根据数据库信息而创建多个class类名的一个i标签的button盒子的函数 后续只需要调用这个函数
}

//此时创建的div 盒子是套住上面button盒子的一个大盒子
export const buttonGroup = document.createElement('div');
buttonGroup.classList.add('buttonGroup');

//真正创造button节点
buttonsInfo.forEach(buttonInfo=>{
  const buttonDom = createButton(buttonInfo); //调用createButton函数来创造button的dom节点
  buttonGroup.append(buttonDom);//每创造一个dom节点，就将它放进buttonGroup这个大盒子里
})


