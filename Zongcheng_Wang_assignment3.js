//1

const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];
// console.log(Object.keys(tableInfo[0]));

// const myTable = document.createElement("table");
// const thread = myTable.createTHead();
// const row = thread.insertRow();

// Object.keys(tableInfo[0]).forEach((ele) => {
//   if (ele == "Phone") {
//     ele = `${ele}\n#`;
//   }
//   row.insertCell().innerHTML = ele;
// });

// for (let i of tableInfo) {
//   const bodyRow = myTable.insertRow();
//   // console.log(i);
//   for (let j in i) {
//     // console.log(i[j]);
//     bodyRow.insertCell().innerHTML = i[j];
//   }
// }

// document.getElementById("myTable").appendChild(myTable);

const myTable = document.createElement("table");
document.getElementById("myTable").appendChild(myTable);

let thead = myTable.createTHead();
let rowHead = thead.insertRow();
let tbody = myTable.createTBody();

Object.keys(tableInfo[0]).forEach((ele) => {
  if (ele == "Phone") {
    ele = `${ele}\n#`;
  }
  let th = document.createElement("th");
  let text = document.createTextNode(ele);
  th.appendChild(text);
  rowHead.appendChild(th);
});

for (let ele of tableInfo) {
  let rowBody = tbody.insertRow();
  for (key in ele) {
    let cell = rowBody.insertCell();
    let text = document.createTextNode(ele[key]);
    cell.appendChild(text);
  }
}

//2

const mySearch = document.getElementById("google-demo");

mySearch.addEventListener("keyup", function (params) {
  // if(this.enterKeyHint)
  if (params.key === "Enter") {
    alert(params.target.value);
  }
});

//3

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const parent = document.getElementById("parent");

//const myOl = document.createElement("ol");
// document.getElementById("Ol").appendChild(myOl);

//parent.insertBefore(myOl, myOl.nextSibling);
// const myOl = document.createElement("ol");

// list.forEach((ele) => {
//   const myOlList = document.createElement("li");
//   myOlList.textContent = ele + "+";
//   myOl.appendChild(myOlList);
// });

const myOL = document.createElement("ol");
//document.body.appendChild(myOL);
list.forEach((ele) => {
  const myOLList = document.createElement("li");
  myOLList.textContent = ele;
  myOL.append(myOLList);
});

parent.appendChild(myOL);

let div = document.createElement("div");
div.id = "content";
div.className = "note";
div.textContent = "This is ol ";
parent.insertBefore(div, myOL);

const myUL = document.createElement("ul");
// document.body.appendChild(myUL);
list.forEach((ele) => {
  const myULList = document.createElement("li");
  myULList.textContent = ele;
  myUL.append(myULList);
});
// parent.insertBefore(myUL, myOL.nextSibling.nextSibling);
parent.appendChild(myUL);

let div2 = document.createElement("div");
div2.id = "content";
div2.className = "note";
div2.textContent = "This is ul";
parent.insertBefore(div2, myUL);

//4

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const mySelect = document.createElement("select");
dropDownList.forEach((ele) => {
  const myOption = document.createElement("option");
  myOption.value = ele.value;
  const myContent = document.createTextNode(ele.content);
  myOption.appendChild(myContent);
  mySelect.appendChild(myOption);
});

document.getElementById("mySelect").appendChild(mySelect);
