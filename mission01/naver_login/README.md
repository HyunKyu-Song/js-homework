# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

<br><br>

## 코드 설명
### index.html에 추가한 코드
``` html
<input role="none" class="login-fail" style="display: none;" />
<span class="error-message">아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br> 입력하신 내용을 다시 확인해주세요.</span>
<button type="button" class="btn-login">로그인</button>
```
기존에 있던 css를 재사용하기 위해 `input 태그`를 만들었다.
- 웹접근성을 위해 `role='none'`
- 활성화 전에는 화면에 숨겨야 해서 `style="display: none;"`를 inline-style로 주었다.
- js로 조작하기 위해 `class="login-fail"`을 주었다.

![](https://velog.velcdn.com/images/thdgusrbek/post/abae40fe-55f7-4411-ab6e-b7a7a5e041d1/image.png)

---
<br>

### main.js 코드
``` js
const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};
const userEmail = document.querySelector('.user-email-input'); // 이메일 input 요소
const userPw = document.querySelector('.user-password-input'); // 비밀번호 input 요소
const login = document.querySelector('.btn-login'); // 로그인 버튼 요소
const login_fail = document.querySelector('.login-fail'); // 로그인 실패 시 보여줄 에러 메시지 요소


function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 정규식 검사 후 에러 메시지 add or remove
function validation(node, reg, e) { // node: 접근 요소, reg: 정규식 형식, e: event 객체
  if (reg(e.target.value) === false && e.target.value.length !== 0) {
    node.classList.add('is--invalid');
  } else {
    node.classList.remove('is--invalid');
  }
}

// 이메일 입력할 때마다 작동
userEmail.addEventListener('keyup', e => validation(userEmail, emailReg, e));

// 비밀번호 입력할 때마다 작동
userPw.addEventListener('keyup', e => validation(userPw, pwReg, e));


// 로그인 버튼을 클릭 시 이벤트 발생
login.addEventListener('click', () => {

  // 입력한 이메일, 비밀번호 모두 일치한다면 welcome 페이지로 이동
  if (userEmail.value === 'asd@naver.com' && userPw.value === 'spdlqj123!@') {
    window.location.href = 'welcome.html';
  } 
  else { // 하나라도 불일치 시 작동
    login_fail.classList.add('is--invalid'); // 로그인 에러 메시지 화면에 보여준다.
    userEmail.classList.remove('is--invalid'); // 이메일 에러 메시지 화면에 보여준다.
    userPw.classList.remove('is--invalid'); // 비밀번호 에러 메시지 화면에 보여준다.
    userEmail.value = ''; // 이메일에 작성한 문자 초기화
    userPw.value = ''; // 비밀번호에 작성한 문자 초기화
  }
})
```

---
<br>

### 로그인 성공
![](https://velog.velcdn.com/images/thdgusrbek/post/6704776b-1172-4fe3-abd7-33c21ab4e012/image.gif)

---
<br>

### 로그인 실패
![](https://velog.velcdn.com/images/thdgusrbek/post/f5b2a8d0-2605-4504-a7ed-617b8396110a/image.gif)
