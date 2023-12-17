"use strict";

const btnOpenModal = document.querySelector(".btn__open__modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn__close__modal");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    closeModal();
  }
});

// event deligation
const outerInput = document.querySelector(".theme");

outerInput.addEventListener("click", (event) => {
  if (event.target.classList.contains("inner__one")) {
    document.body.style.backgroundColor = "whitesmoke";
  }
  if (event.target.classList.contains("inner__two")) {
    document.body.style.backgroundColor = "black";
  }
});

// to do list
const todoInput = document.querySelector(".todo__input");
const addBtn = document.querySelector(".add__btn");
const todoList = document.querySelector(".todo__list");

const createNewTodo = (task) => {
  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", function () {
    this.remove();
  });

  return li;
};

const addTodo = () => {
  const task = todoInput.value;

  if (task !== "") {
    const newTodo = createNewTodo(task);
    todoInput.value = "";
    todoList.appendChild(newTodo);
  } else {
    alert("Please enter valid task");
  }
};

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
