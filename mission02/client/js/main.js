/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const nav = document.querySelector('.nav ul');
const navAll = document.querySelectorAll('.nav li');
const body = document.querySelector('body');
const img = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');
const audio = document.querySelector('.audio');
const audioSource = document.querySelector('.audioSource');



function setBgColor(colorA, colorB) {
   body.style.background = `linear-gradient(to bottom,${colorA},${colorB})`
}

function setImage(ImgSrc, ImgAlt) {
   img.src = `./assets/${ImgSrc.toLowerCase()}.jpeg`;
   img.alt = ImgAlt;
}

function setNameText(name) {
   nickName.textContent = name;
}

function setAudio(name) {
   audioSource.src = `./assets/audio/${name.toLowerCase()}.m4a`;
   audio.load();
   audio.play();
}

function changePoster(e) {

   if (e.target.tagName === 'UL') return;

   const target = e.target.closest('li');
   const index = target.dataset.index - 1;

   for (let i = 0; i < navAll.length; i++) {
      navAll[i].classList.remove('is-active');
   }

   target.classList.add('is-active');

   setBgColor(data[index].color[0], data[index].color[1]);
   setImage(data[index].name, data[index].alt);
   setNameText(data[index].name);
   setAudio(data[index].name);
}


nav.addEventListener('click', changePoster);