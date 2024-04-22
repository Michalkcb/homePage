document.addEventListener("DOMContentLoaded", function() {
    const notifications = document.querySelector(".notifications");
    const success = document.querySelector(".success");
    const error = document.querySelector(".error");
    const info = document.querySelector(".info");
    const warning = document.querySelector(".warning");

    function createToast(type, title, text) {
        let newToast = document.createElement("div");
        newToast.className = "toast " + type;
        newToast.innerHTML = `
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
        `;
        notifications.appendChild(newToast);
        setTimeout(() => newToast.remove(), 2000);
    }

    success.addEventListener("click", function() {
        let type = "success";
        let title = "Success";
        let text = "This is a success toast notification.";
        createToast(type, title, text);
    });

    error.addEventListener("click", function() {
        let type = "error";
        let title = "Error";
        let text = "This is an error toast notification.";
        createToast(type, title, text);
    });

    info.addEventListener("click", function() {
        let type = "info";
        let title = "Info";
        let text = "This is an info toast notification.";
        createToast(type, title, text);
    });

    warning.addEventListener("click", function() {
        let type = "warning";
        let title = "Warning";
        let text = "This is a warning toast notification.";
        createToast(type, title, text);
    });
});
