const parentLogin = document.querySelector(".popup-login");
const parentForgot = document.querySelector(".popup-forgot");
const overlay = document.querySelectorAll(".popup__overlay");
const closeLogin = document.querySelector(".close-login");
const closeForgot = document.querySelector(".close-forgot");
const showHidePasswordBtns = document.querySelectorAll('.show-hide-password')

const loginBtn = '[data-for-tab="login"]',
      loginContent = '[data-tab="login"]',
      registerBtn = '[data-for-tab="register"]',
      registerContent = '[data-tab="register"]',
      toForgotModalBtn = '[data-ref="forgot"]';

// opening function for both modals
const openModal = (elem) => {
  body.style.overflow = "hidden";
  elem.classList.add("active");
};

// change password visibility
const showHidePassword = () => {
  showHidePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let input = btn.parentElement.firstElementChild;
      if (input.type === 'password') {
        input.type = 'text'

        setTimeout(() => {
          input.type = 'password'
        }, 5000);
      } else {
        input.type = 'password'
      }
    })
  })
}
showHidePassword()


// login modal handler
const popupLogin = (hasLogin) => {
  const loginTitle = document.querySelector('.popup-login__title')

  const tabAddActive = (btn, content) => {
    document.querySelector(btn).classList.add("active");
    document.querySelector(content).classList.add("active");
  };
  const tabRemoveActive = (btn, content) => {
    document.querySelector(btn).classList.remove("active");
    document.querySelector(content).classList.remove("active");
  };

  const closeModal = () => {
    body.style.overflow = "";
    parentLogin.classList.remove("active");
    tabRemoveActive(loginBtn, loginContent);
    tabRemoveActive(registerBtn, registerContent);
  };

  // checking if popupLogin parameter true/false
  if (hasLogin === false) {
    tabAddActive(registerBtn, registerContent);
    loginTitle.innerHTML = 'Register'
  } else if (hasLogin === true) {
    tabAddActive(loginBtn, loginContent);
    loginTitle.innerHTML = 'Login'
  }

  // click on register btn in tab
  document.querySelector(registerBtn).addEventListener("click", () => {
    tabAddActive(registerBtn, registerContent);
    tabRemoveActive(loginBtn, loginContent);
    loginTitle.innerHTML = 'Register';
  });

  // click on login btn in tab
  document.querySelector(loginBtn).addEventListener("click", () => {
    tabRemoveActive(registerBtn, registerContent);
    tabAddActive(loginBtn, loginContent);
    loginTitle.innerHTML = 'Login'
  });

  // closing listeners
  overlay.forEach(item => {
    item.addEventListener("click", closeModal);
  })
  closeLogin.addEventListener("click", closeModal);
  document
    .querySelector(toForgotModalBtn)
    .addEventListener("click", closeModal);

  document.querySelector(toForgotModalBtn).addEventListener("click", popupForgot);

  openModal(parentLogin);
};


// forgot modal handler
const popupForgot = () => {
  const forgotForm = document.querySelector('.popup-forgot__form');

  // show caption on submit form
  forgotForm.addEventListener('submit', (e) => {
    const forgotSuccess = document.querySelector('.popup-forgot__success')
    const forgotEmail = document.querySelector('.popup-forgot__input input[type="email"]')

    e.preventDefault()
    forgotSuccess.classList.add('show')
    forgotEmail.value = '';

    setTimeout(() => {
    forgotSuccess.classList.add('showing')
    }, 0);
    setTimeout(() => {
    forgotSuccess.classList.remove('showing')
    }, 3500);
    setTimeout(() => {
      forgotSuccess.classList.remove('show')
    }, 4000);
  })

  const closeModal = () => {
    body.style.overflow = "";
    parentForgot.classList.remove("active");
  }

  // closing listeners
  closeForgot.addEventListener('click', closeModal);
  overlay.forEach(item => {
    item.addEventListener("click", closeModal);
  })

  setTimeout(() => {
    openModal(parentForgot);
  }, 0);
};


// popupLogin(hasLogin = true)