const parentLogin = document.querySelector(".popup-login");
const parentForgot = document.querySelector(".popup-forgot");
const overlay = document.querySelectorAll(".popup__overlay");
const closeLogin = document.querySelector(".close-login");
const closeForgot = document.querySelector(".close-forgot");

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

// login modal handler
const popupLogin = (hasLogin) => {

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
  } else if (hasLogin === true) {
    tabAddActive(loginBtn, loginContent);
  }

  // click on register btn in tab
  document.querySelector(registerBtn).addEventListener("click", () => {
    tabAddActive(registerBtn, registerContent);
    tabRemoveActive(loginBtn, loginContent);
  });

  // click on login btn in tab
  document.querySelector(loginBtn).addEventListener("click", () => {
    tabRemoveActive(registerBtn, registerContent);
    tabAddActive(loginBtn, loginContent);
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

