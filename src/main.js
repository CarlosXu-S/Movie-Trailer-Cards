 // 获取小卡片的元素，带penel类的元素
 const panel = document.querySelectorAll('.panel')
 //使用forEach遍历panel，并监听鼠标的click事件
 panel.forEach(panel => {
     panel.addEventListener('click', () => {
         removeActiveClasses()
         panel.classList.add('active')  //添加类
     })
 })

 //removeActiveClasses函数是遍历panel，将每个panel里面的active类取消
 function removeActiveClasses() {
     panel.forEach(panel => {
         panel.classList.remove('active')
     })
 }


//     window.onload = function(){
//      //获取DOM元素
//      const container = document.getElementsByClassName('container')[0];
//      const panel = document.getElementsByClassName('panel');

//      //绑定点击事件（事件委托）
//      container.onclick = function(e){
//             e = window.event || e;
//          const target = e.target;  //从target属性获取被点击的元素
//          //首先将所以卡片设置未小卡片
//          for(let i=0;i<panel.length;i++){
//             panel[i].classList.remove('active');
//          }

//          //被点击的卡片设置为大卡片
//          target.classList.add('active');

//      }
//  }