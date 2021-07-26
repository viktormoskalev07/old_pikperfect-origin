const parentLogin = document.querySelector(".popup-login");
const parentForgot = document.querySelector(".popup-forgot");
const overlay = document.querySelectorAll(".popup__overlay");
const closeLogin = document.querySelector(".close-login");
const closeForgot = document.querySelector(".close-forgot");
const showHidePasswordBtns = document.querySelectorAll(".show-hide-password");

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
  showHidePasswordBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let input = btn.parentElement.firstElementChild;
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
};

// login modal handler
const popupLogin = (hasLogin) => {
  const loginTitle = document.querySelector(".popup-login__title");

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
    loginTitle.innerHTML = "Register";
  } else if (hasLogin === true) {
    tabAddActive(loginBtn, loginContent);
    loginTitle.innerHTML = "Login";
  }

  // click on register btn in tab
  document.querySelector(registerBtn).addEventListener("click", () => {
    tabAddActive(registerBtn, registerContent);
    tabRemoveActive(loginBtn, loginContent);
    loginTitle.innerHTML = "Register";
  });

  // click on login btn in tab
  document.querySelector(loginBtn).addEventListener("click", () => {
    tabRemoveActive(registerBtn, registerContent);
    tabAddActive(loginBtn, loginContent);
    loginTitle.innerHTML = "Login";
  });

  // register photographer accordion handler
  const photographerCheck = () => {
    const accordTrigger = document.querySelector(
      ".custom-checkbox__input[data-accord]"
    );
    const accordBody = document.querySelector(".custom-checkbox__accord");
    const accordInputSocial = document.querySelector('#register-social-page');
    const accordInputPurchase = document.querySelector('#register-album-purchase');

    const customFileUpload = document.querySelector('.custom-file-upload__body');
    const customFileUploadBtn = document.querySelector('.custom-file-upload__btn');
    const customFileUploadFileName = document.querySelector('.custom-file-upload__file-name');

    // input image file handler
    customFileUpload.addEventListener('change', function(e) {
      const fileName = e.target.files[0].name;
      customFileUploadFileName.innerHTML = fileName;
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('custom-file-upload__remove-btn');
      removeBtn.setAttribute('type', 'button');
      removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <rect fill='none' width="24" height="24" />
        <g style='fill:none;stroke: #575d61;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px;'>
        <path d="M3,6H21" />
        <path d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
        </g>
      </svg>`;
      customFileUploadFileName.insertAdjacentElement('beforeend', removeBtn);

      removeBtn.addEventListener('click', (e) => {
        e.preventDefault;
        customFileUploadBtn.value = null;
        customFileUploadFileName.innerHTML = ''
      })
    })

    accordTrigger.addEventListener("click", () => {

        if (accordTrigger.checked === true) {
          accordBody.style.display = 'block'
          setTimeout(() => {
            accordBody.classList.add("active");
            accordInputSocial.setAttribute('required', true)
            accordInputPurchase.setAttribute('required', true)
          }, 0);
        } else {
          accordBody.classList.remove("active");
          accordInputSocial.setAttribute('required', false)
          accordInputPurchase.setAttribute('required', false)
          setTimeout(() => {
            accordBody.style.display = 'none'
          }, 300);
        }
    });
  };

  // closing listeners
  overlay.forEach((item) => {
    item.addEventListener("click", closeModal);
  });
  closeLogin.addEventListener("click", closeModal);
  document.querySelector(toForgotModalBtn).addEventListener("click", closeModal);
  document.querySelector(toForgotModalBtn).addEventListener("click", popupForgot);

  photographerCheck();
  openModal(parentLogin);
};

// forgot modal handler
const popupForgot = () => {
  const forgotForm = document.querySelector(".popup-forgot__form");

  // show caption on submit form
  forgotForm.addEventListener("submit", (e) => {
    const forgotSuccess = document.querySelector(".popup-forgot__success");
    const forgotEmail = document.querySelector(
      '.popup-forgot__input input[type="email"]'
    );

    e.preventDefault();
    forgotSuccess.classList.add("show");
    forgotEmail.value = "";

    setTimeout(() => {
      forgotSuccess.classList.add("showing");
    }, 0);
    setTimeout(() => {
      forgotSuccess.classList.remove("showing");
    }, 3500);
    setTimeout(() => {
      forgotSuccess.classList.remove("show");
    }, 4000);
  });

  const closeModal = () => {
    body.style.overflow = "";
    parentForgot.classList.remove("active");
  };

  // closing listeners
  closeForgot.addEventListener("click", closeModal);
  overlay.forEach((item) => {
    item.addEventListener("click", closeModal);
  });

  setTimeout(() => {
    openModal(parentForgot);
  }, 0);
};

showHidePassword();
popupLogin((hasLogin = false));
