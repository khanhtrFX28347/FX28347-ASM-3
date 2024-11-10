document.addEventListener("DOMContentLoaded", function () {
  const personal = document.querySelectorAll(".personal"); // Lấy tất cả các phần tử có class "personal"
  const emailForm = document.querySelector(".emailForm");
  const emailInput = document.querySelector(".emailInput");
  const submitBtn = document.querySelector("#submitBtn"); // Chọn phần tử nút submit
  const languageBtn = document.querySelector(".languageBtn");
  const languageText = document.querySelector(".languageText");
  const experienceBtn = document.querySelector(".experienceBtn");
  const experienceText = document.querySelector(".experienceText");
  const skillBtn = document.querySelector(".skillBtn");
  const skillText = document.querySelector(".skillText");
  const hobbyBtn = document.querySelector(".hobbyBtn");
  const hobbyText = document.querySelector(".hobbyText");
  const workBtn = document.querySelector(".workBtn");
  const workText = document.querySelector(".workText");
  const educationBtn = document.querySelector(".educationBtn");
  const educationText = document.querySelector(".educationText");
  educationBtn.addEventListener("click", function () {
    if (educationText.classList.contains("hidden")) {
      educationText.classList.remove("hidden");
      educationBtn.textContent = "VIEW LESS";
    } else {
      educationText.classList.add("hidden");
      educationBtn.textContent = "VIEW MORE";
    }
  });
  hobbyBtn.addEventListener("click", function () {
    if (hobbyText.classList.contains("hidden")) {
      hobbyText.classList.remove("hidden");
      hobbyBtn.textContent = "VIEW LESS";
    } else {
      hobbyText.classList.add("hidden");
      hobbyBtn.textContent = "VIEW MORE";
    }
  });
  workBtn.addEventListener("click", function () {
    if (workText.classList.contains("hidden")) {
      workText.classList.remove("hidden");
      workBtn.textContent = "VIEW LESS";
    } else {
      workText.classList.add("hidden");
      workBtn.textContent = "VIEW MORE";
    }
  });
  skillBtn.addEventListener("click", function () {
    if (skillText.classList.contains("hidden")) {
      skillText.classList.remove("hidden");
      skillBtn.textContent = "VIEW LESS";
    } else {
      skillText.classList.add("hidden");
      skillBtn.textContent = "VIEW MORE";
    }
  });
  languageBtn.addEventListener("click", function () {
    if (languageText.classList.contains("hidden")) {
      languageText.classList.remove("hidden");
      languageBtn.textContent = "VIEW LESS";
    } else {
      languageText.classList.add("hidden");
      languageBtn.textContent = "VIEW MORE";
    }
  });
  experienceBtn.addEventListener("click", function () {
    if (experienceText.classList.contains("hidden")) {
      experienceText.classList.remove("hidden");
      experienceBtn.textContent = "VIEW LESS";
    } else {
      experienceText.classList.add("hidden");
      experienceBtn.textContent = "VIEW MORE";
    }
  });

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  submitBtn.addEventListener("click", function () {
    const newEmail = emailInput.value; // Lấy giá trị từ input
    if (newEmail.match(regex)) {
      personal.forEach((element) => {
        element.classList.remove("hidden"); // Hiển thị các phần tử có class "personal"
      });
      emailForm.classList.add("hidden"); // Ẩn form email
    } else {
      alert("Vui lòng nhập email hợp lệ!"); // Thông báo lỗi nếu email không hợp lệ
    }
  });
});
