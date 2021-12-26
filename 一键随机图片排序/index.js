let imgs = document.querySelectorAll('img')
let button = document.querySelector('button')

let imgUrl = ['./img/商务，营销.png', './img/商店，店铺，卖场.png', './img/摄像头，监控 上午9.36.01.png', './img/收藏位置.png', './img/智能手表.png', './img/游艇，船.png', './img/笑脸，表情.png', './img/系统管理.png', './img/闪电.png']

// console.log(imgs);
button.addEventListener('click', () => {
  let imgLength = imgs.length
  let num = []
  while(num.length < imgLength) {
    let randomNum = parseInt(Math.random() * imgLength)
    if(num.indexOf(randomNum) == -1) {
      num.push(randomNum)
    }
  }
  for(let i = 0; i<imgLength; i++) {
    imgs[i].src = imgUrl[num[i]]
  }
})