const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};
const userEmail = document.querySelector('.user-email-input');
const userPw = document.querySelector('.user-password-input');
const login = document.querySelector('.btn-login');
const login_fail = document.querySelector('.login-fail');

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validation(node, reg, e) {
  if (reg(e.target.value) === false && e.target.value.length !== 0) {
    node.classList.add('is--invalid');
  } else {
    node.classList.remove('is--invalid');
  }
}


userEmail.addEventListener('keyup', e => validation(userEmail, emailReg, e));
userPw.addEventListener('keyup', e => validation(userPw, pwReg, e));

login.addEventListener('click', () => {

  if (userEmail.value === 'asd@naver.com' && userPw.value === 'spdlqj123!@') {
    window.location.href = 'welcome.html';
  } else {
    login_fail.classList.add('is--invalid');
    userEmail.classList.remove('is--invalid');
    userPw.classList.remove('is--invalid');
    userEmail.value = '';
    userPw.value = '';
  }
})