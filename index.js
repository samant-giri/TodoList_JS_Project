// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const form = document.querySelector("form");
// const container = document.querySelector(".container");
// const addBtn = document.querySelector(".addBtn");
// // const taskElement = document.querySelector(".task");


// const task = [];

// // form.addEventListener("submit", (e) => {
// //     e.preventDefault();

// // })

function removeAllTasks() {
    tasks.forEach(() => {
        let removeTask = document.querySelector(".task");
        removeTask.remove();
    })
}

// function removeTasks() {
//     tasks.forEach(() => {
//         const div = document.querySelector(".task");
//         div.remove();
//     });
// }


// const showTask = (e) => {
//     if (title.value != "" && description.value != "") {
//         e.preventDefault();
//         removeAllTask();
//         taskElm = { title: title.value, desc: description.value };
//         task.unshift(taskElm);
//         task.forEach((value, index) => {
//             const outerDiv = document.createElement("div");
//             outerDiv.setAttribute("class", "task");
//             const innerDiv = document.createElement("div");
//             const para = document.createElement("p");
//             const span = document.createElement("span");
//             para.innerText = task[index].title;
//             span.innerText = task[index].desc;
//             const btn = document.createElement("button");
//             btn.setAttribute("class", "deletebtn");
//             btn.innerText = "-";
//             innerDiv.append(para);
//             innerDiv.append(span);
//             outerDiv.append(innerDiv);
//             outerDiv.append(btn);
//             container.append(outerDiv);

//             btn.addEventListener("click", () => {
//                 removeAllTask();
//                 task.splice(index, 1);
//                 // localStorage.setItem("tasks", JSON.stringify(tasks));
//                 showTask();
//             });
//         })
//     }
// }




// addBtn.addEventListener("click", showTask);



const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];



function showAllTasks() {
    tasks.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deleteBtn");

        btn.innerText = "-";

        btn.addEventListener("click", () => {
            removeAllTasks();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTasks();
        });

        div.append(btn);
        container.append(div);
    });
}

// function removeTasks() {
//     tasks.forEach(() => {
//         const div = document.querySelector(".task");
//         div.remove();
//     });
// }

showAllTasks();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeAllTasks();

    tasks.push({
        title: title.value,
        description: description.value,
    });

    // localStorage.setItem("tasks", JSON.stringify(tasks));
    // if (title.value != "" && description.value != "") {
    //     e.preventDefault();
    //     removeAllTasks();
    //     taskElm = { title: title.value, desc: description.value };
    //     tasks.unshift(taskElm);
        tasks.forEach((value, index) => {
            const outerDiv = document.createElement("div");
            outerDiv.setAttribute("class", "task");
            const innerDiv = document.createElement("div");
            const para = document.createElement("p");
            const span = document.createElement("span");
            para.innerText = task[index].title;
            span.innerText = task[index].desc;
            const btn = document.createElement("button");
            btn.setAttribute("class", "deletebtn");
            btn.innerText = "-";
            innerDiv.append(para);
            innerDiv.append(span);
            outerDiv.append(innerDiv);
            outerDiv.append(btn);
            container.append(outerDiv);
        });
    }
)
