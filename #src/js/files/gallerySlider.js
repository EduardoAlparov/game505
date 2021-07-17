const sliderItem = document.querySelectorAll('.slider__swiper');
const sliderBtn = document.querySelector('.slider__button');

let sliderMod = [
  "slider__swiper_first",
  "slider__swiper_second",
  "slider__swiper_third"
];

if (document.querySelector('.slider__button')) {
  if (document.querySelector('.pagination')) {
    let bulletContainer = document.querySelector('.pagination');
  
    for (let index = 0; index < sliderItem.length; index++) {
      let bulletdiv = document.createElement('div');
      bulletdiv.classList.add('pagination__bullet');
      bulletdiv.setAttribute('id', `${index}`);
      bulletContainer.appendChild(bulletdiv);
    }

    bulletContainer.firstChild.classList.add('pagination__bullet_active');
  }

  sliderBtn.addEventListener('click', () => {
    sliderItem.forEach(item => {
      sliderMod.forEach(el => {
        if (item.classList.contains(el)) {
          item.classList.remove(el);
        }
      })
    });
  
    let k = 1;
    sliderMod = sliderMod.concat(sliderMod.splice(0, sliderMod.length - k));
    let t = 0; 
    sliderItem.forEach(elem => {
      elem.classList.add(sliderMod[t]);
      t++;
    });

    sliderItem.forEach(element => {
      if (element.classList.contains('slider__swiper_first')) {
        document.querySelectorAll('.pagination__bullet').forEach(item => {
          item.classList.remove('pagination__bullet_active');
        });
        
        let id = element.getAttribute('data-role');
        let bullet = document.getElementById(id);
        bullet.classList.add('pagination__bullet_active')
      }
    });
  })

}




