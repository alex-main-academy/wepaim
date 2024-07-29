const todoContent = document.querySelectorAll(".js-todo-content");

const updateTodoCountValues = () => {
    todoContent.forEach((content) => {
        const allTasks = content.querySelector(".js-todo-all");
        const readyTasks = content.querySelector(".js-todo-ready");
        allTasks.textContent = content.querySelectorAll(".todo__button").length;
        readyTasks.textContent = content.querySelectorAll(
            ".todo__button.active"
        ).length;
    });
};

if (localStorage.getItem("list-1")) {
    todoContent[0].innerHTML = localStorage.getItem("list-1");
}
if (localStorage.getItem("list-2")) {
    todoContent[1].innerHTML = localStorage.getItem("list-2");
}
updateTodoCountValues();

const todoToggleBtns = document.querySelectorAll(".js-todo-btn");

todoToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        } else {
            btn.classList.add("active");
        }
        updateTodoCountValues();
        localStorage.setItem("list-1", todoContent[0].innerHTML);
        localStorage.setItem("list-2", todoContent[1].innerHTML);
    });
});

const tabToggleBtns = document.querySelectorAll(".js-tab-toggle");

tabToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabToggleBtns.forEach((b) => {
            b.classList.remove("active");
        });

        todoContent.forEach((content) => {
            content.classList.remove("active");
        });

        btn.classList.add("active");
        const btnType = btn.getAttribute("data-type");

        document
            .querySelector(`[data-content="${btnType}"]`)
            .classList.add("active");

        localStorage.setItem("activeTab", btnType);
    });
});

const activeTab = localStorage.getItem("activeTab");
if (activeTab) {
    const activeTabBtn = document.querySelector(
        `.js-tab-toggle[data-type="${activeTab}"]`
    );
    const activeContent = document.querySelector(
        `[data-content="${activeTab}"]`
    );

    if (activeTabBtn && activeContent) {
        tabToggleBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        todoContent.forEach((content) => {
            content.classList.remove("active");
        });

        activeTabBtn.classList.add("active");
        activeContent.classList.add("active");
    }
}

const tabCountValue = document.querySelector(".js-tab-count");
const programmContent = document.querySelector("[data-content='programm']");
tabCountValue.textContent =
    programmContent.querySelectorAll(".todo__item").length;
