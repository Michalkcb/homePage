const notifications = document.querySelector(".notifications");
const succes = document.querySelector(".succes");
const error = document.querySelector(".error");
const info = document.querySelector(".info");
const warning = document.querySelector(".warning");

function createToast(typ, title, txt) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
    <div class="toast ${typ}">
        <div class="content">
            <div class="title">${title}</div>
            <span>${txt}</span>
        </div>
    </div>
    `;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(()=>newToast.remove(),2000)
};

succes.onclick = function(){
    let typ = "succes";
    let title = "succes";
    let txt = "This is success toast notification.";
    createToast(typ, title, txt);
}

error.onclick = ()=>{
    let typ = "error";
    let title = "error";
    let txt = "This is error toast notification.";
    createToast(typ, title, txt);
}

info.addEventListener("click", ()=>{
    let typ = "info";
    let title = "info";
    let txt = "This is info toast notification.";
    createToast(typ, title, txt)});

