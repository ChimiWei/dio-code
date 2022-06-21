const BASE_URL = 'https://picsum.photos/200';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const getCats = async () => {
        const data = await fetch(BASE_URL)
        .catch(e => console.log(e))
    return data.url
};

const loadImg = async () => {
    catImg.src = await getCats();
    
}

catBtn.addEventListener('click', loadImg);

loadImg();