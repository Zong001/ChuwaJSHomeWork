const todoApi = {
  todos: [
    { content: "write some code", isCompleted: false },
    { content: "watch some movies", isCompleted: true },
    { content: "listen some music", isCompleted: false },
  ],
  getAllTodos: async function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ todos: this.todos });
      }, 500);
    });
  },
  addTodo: async function (todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!todo || !todo.content) {
          reject({ error: "content is empty !" });
        }
        this.todos.push(todo);
        console.log(this.todos);
        resolve({ addTodo: "succeed" });
      }, 500);
    });
  },
  modTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({ error: "index is not valid !" });
        }

        this.todos[index].isCompleted = !this.todos[index].isCompleted;
        resolve({ modTodo: "succeed" });
      }, 500);
    });
  },
  delTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({ error: "index is not valid !" });
        }

        this.todos = [
          ...this.todos.slice(0, index),
          ...this.todos.slice(index + 1),
        ];
        resolve({ delTodo: "succeed" });
      }, 500);
    });
  },
};

let InputText = document.getElementById("inputTodoField");

let button = document.getElementById("addTodoBtn");

let unorderList = document.createElement("ul");

document.getElementById("content").appendChild(unorderList);
printList();

function addUx(event) {
  let obj = { content: InputText.value, isCompleted: false };
  todoApi.addTodo(obj).then((messsage) => {
    alert("add " + event.content + " " + event.addTodo);
  });
  printList();
}

InputText.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // let obj = { content: InputText.value, isCompleted: false };
    // todoApi.addTodo(obj).then((messsage) => {
    //   alert("add " + event.content + " " + event.addTodo);
    // });
    // printList();
    addUx(event);
  }
});

button.addEventListener("click", (event) => addUx(event));

function clear(params) {
  unorderList.innerHTML = "";
}

function printList(params) {
  clear();
  todoApi
    .getAllTodos()
    .then((value) => {
      console.log(value);
      value.todos.forEach((element, a) => {
        unorderList.appendChild(creatListItem(element, a)); //这个index是哪里定义的呢🤔
        //搞明白了https://www.w3schools.com/jsref/jsref_foreach.asp#100
      });
    })
    .catch((error) => console.log(error));
}

function creatListItem(params, index) {
  let li = document.createElement("li");
  let line = document.createElement("p");
  let text = document.createElement("span");
  let button = document.createElement("button");
  text.textContent = params.content;
  if (params.isCompleted) {
    text.style = "text-decoration:line-through";
  }
  text.value = index;
  text.addEventListener("dblclick", () => {
    todoApi.modTodo(parseInt(text.value)).then((value) => {
      alert("mod " + params.content + " " + value.modTodo);
      printList();
    });
  });

  button.textContent = "DEL";
  button.value = index;
  button.addEventListener("click", () => {
    todoApi.delTodo(parseInt(button.value)).then((value) => {
      alert("delete " + params.content + " " + value.delTodo);
      printList();
    });
  });

  line.appendChild(text);
  line.appendChild(button);
  li.appendChild(line);
  console.log(text);
  console.log(index);
  console.log(typeof index);
  console.log(typeof text.value);
  console.log(typeof parseInt(button.value));
  return li;
}
