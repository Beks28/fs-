const dataAlt = [ 
 
    { 
        name: 'Южнопортовая', 
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_642d9bb4060bd70d22a3381a_64510af2f6bdac56beee05e8/scale_1200', 
        price: 100, 
        category: 'Bishkek' 
    }, 
    { 
        name: 'Майданакская ', 
        img: 'https://gstrong.ru/upload/iblock/8bf/feetc4yw47q7yjigy53m4u99ou3p7afz/10.jpg', 
        price: 150, 
        category: 'Bishkek' 
    }, 
    { 
        name: ' Пулковская ', 
        img: 'https://prorus.ru/_/manager/files/5d3/2f917bb5a2/0C3A6545.jpg', 
        price: 130, 
        category: 'Bishkek' 
    }, 
    { 
        name: 'Шамахинская ', 
        img: 'https://i.playground.ru/p/EpWXDSIu15yKCyqLdh7CpQ.jpeg', 
        price: 180, 
        category: 'Bishkek' 
    }, 
    { 
        name: 'Тюменская', 
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/6/33/755839920041336.jpeg', 
        price: 360, 
        category: 'Moscow' 
    }, 
    { 
        name: 'Люберцы' ,
         img: 'https://flexoffice-moscow.ru/upload/gallery/078/916844618-6.jpg', 
        price: 320, 
        category: 'Moscow' 
    }, 
    { 
        name: 'Маяковская', 
        img: 'https://www.arendator.ru/data/editor_imgs/9/abc-editor_img-9165.jpg', 
        price: 400, 
        category: 'Moscow' 
    }, 
    { 
        name: 'Смоленская', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D1%84%D0%B8%D1%81_Tele2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F_%28%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%29.jpg/2560px-%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D1%84%D0%B8%D1%81_Tele2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F_%28%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%29.jpg', 
        price: 415, 
        category: 'Moscow' 
    }, 
    { 
        name: 'Белорусская', 
        img: 'https://prometr.by/upload/medialibrary/d23/d23bb2802bbee5d9372764f31f44e09c.png', 
        price: 580, 
        category: 'Minsk' 
    }, 
    { 
        name: 'Новослободская', 
        img: 'https://m.realt.by/typo3temp/pics/03/77/03773d2b6e791e9de7915249d456bfd6.jpg', 
        price: 1030, 
        category: 'Minsk' 
    }, 
    { 
        name: 'Комсомольская ', 
        img: 'https://www.belta.by/uploads/lotus/news/000022_6B555922ECEBC5F44325834E00341FFE_443305.jpg', 
        price: 1345, 
        category: 'Minsk' 
    }, 
    { 
        name: 'Замоскворецкая', 
        img: 'https://vseokoree.com/media/k2/items/cache/d6e0c71ca3722c71ddd73a242718257f_XL.jpg', 
        price: 2199 , 
        category: 'Minsk' 
    }, 
] 
 
 
const output = document.querySelector('.output') 
let category ='All'
 
const categoriesRender = (data) => { 
    output.innerHTML = '' 
    data.forEach(el => { 
        const wrap = document.createElement('div') 
        const image = document.createElement('img') 
        const name = document.createElement('p') 
        const obr = document.createElement('div') 
        const price = document.createElement('p') 
        const show = document.createElement('h4') 
        const category = document.createElement('p') 
 
 
        category.classList = 'catBtn' 
        wrap.classList = 'wrap' 
        obr.classList = 'obr' 
        show.classList = 'show' 
 
        image.src = el.img 
        name.textContent = el.name 
        show.textContent = 'show info' 
 
        show.addEventListener('click', () => { 
            const isVisible = category.classList.toggle('show-info') 
            if (isVisible) { 
                price.textContent = el.price 
                category.textContent = el.category 
            } else { 
                price.textContent = '' 
                category.textContent = '' 
            } 
        }) 
         
        obr.append(price,category) 
        wrap.append(image,name,show,obr) 
        output.append(wrap) 
    }); 
} 
 
categoriesRender(dataAlt) 
 
 
 
const categoryChoise = ['all', 'Bishkek', 'Moscow', 'Minsk'];

const categoriesChoise = ['all', 'Bishkek', 'Moscow', 'Minsk'];

const outputButtonContainer = document.querySelector('.wrap-btn');
let activeButton = null;


function toggleButtonState(button) {
   if (activeButton) {
      activeButton.style.backgroundColor = ''; 
      activeButton.classList.remove('active'); 
   }
   button.style.backgroundColor = 'blue'; 
   button.classList.add('active'); 
   activeButton = button; 
}

categoriesChoise.forEach((el) => {
   const categoryButton = document.createElement('button');

   categoryButton.classList = 'category__button';

   categoryButton.textContent = el;
   categoryButton.value = el;

   categoryButton.addEventListener('click', () => {
      const selectedCategory = categoryButton.value;

      if (selectedCategory === 'all') {
         categoriesRender(dataAlt);
      } else {
         const result = dataAlt.filter(item => item.category === selectedCategory);
         categoriesRender(result);
      }

     
      toggleButtonState(categoryButton);
   });

   outputButtonContainer.append(categoryButton);
});




