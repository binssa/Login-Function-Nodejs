"user strict";

//register Function Implement
const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerBtn = document.querySelector("#button");

// Button Event(Click)
registerBtn.addEventListener("click", register);

function register(){
    if (!id.value){
        return alert("ID를 입력해주세요.");
    }
    if (pw.value !== confirmPw.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) =>{
        //console.log(res.success);
        if (res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
};
