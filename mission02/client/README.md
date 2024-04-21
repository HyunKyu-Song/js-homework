### JS 로직
``` js
const nav = document.querySelector('.nav ul');
const navAll = document.querySelectorAll('.nav li');
const body = document.querySelector('body');
const img = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');


function setBgColor(colorA, colorB = '#000') {
   body.style.background = `linear-gradient(to bottom,${colorA},${colorB})`
}


function setImage(imgSrc, imgAlt) {
   img.src = imgSrc;
   img.alt = imgAlt;
}


function setNameText(name) {
   nickName.textContent = name;
}


function setAudio(src) {
   
   // audio.js에서 작성한 AudioPlayer 클래스를 사용해서 audio 객체를 생성
   const audio = new AudioPlayer(src);
  
   // 클래스에 있는 play 메서드로 클릭한 캐릭터 목소리가 나온다.
   audio.play();
}


function changePoster(e) {
  
   // 캐릭터 포스터가 아닌 주변 부분(ul태그)을 클릭 시 동작하지 않게 설정
   if (e.target.tagName === 'UL') return;

   // 누른 곳에 가장 가까운 li태그를 찾아준다
   const target = e.target.closest('li');
  
   // html에 작성한 dataset값을 찾아준다
   // data.js에 배열 인덱스는 0부터 시작하고, dataset은 1부터 작성했기 때문에 -1을 해준다.
   const index = target.dataset.index - 1;

   // 모든 캐릭터 포스터에 is-active를 제거
   for (let i = 0; i < navAll.length; i++) {
      navAll[i].classList.remove('is-active');
   }

   // 클릭한 캐릭터 포스터에 is-active를 추가
   target.classList.add('is-active');

   setBgColor(data[index].color[0], data[index].color[1]);
   setImage(`./assets/${data[index].name.toLowerCase()}.jpeg`, data[index].alt);
   setNameText(data[index].name);
   setAudio(`./../assets/audio/${data[index].name.toLowerCase()}.m4a`);
}


// 캐릭터 포스터 각각에 이벤트를 걸지 않고 모든 포스터를 감싸는 부모태그에 한번만 이벤트를 걸었다. (이벤트 위임)
nav.addEventListener('click', changePoster);
```

---
<br>

### 구현 화면
![](https://velog.velcdn.com/images/thdgusrbek/post/17c8846b-55ca-4b42-801f-4ad433438aef/image.gif)

---
<br>

### [💻 Demo](https://song0331.github.io/Front_End_JavaScript/elemental_movie_poster/index.html)
