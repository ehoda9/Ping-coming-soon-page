const btn = document.querySelector(".btn");
const email = document.getElementById("email");
const error = document.getElementById("error");

addEventListener('click', () => checkEmail(email));
function checkEmail(ele) {
    const email = ele.value;
    const validateEmail = (email) => {
        let characters =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return characters.test(String(email).toLowerCase());
    };
    if (!validateEmail(email)) {
        ele.style.animation = "Shake 0.2s alternate";
        setTimeout(() => (ele.style.animation = ""), 100);
        ele.style.border = "1px solid red";
        error.innerHTML =
            "Please Provide a valid email address !";
    } else {
        ele.style.border = "1px solid green";
        error.innerHTML = "";
    }
}