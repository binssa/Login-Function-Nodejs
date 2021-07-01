"use strict"

// 인증 시 필요한 계정 정보 
const users = {
    id: ["shb", "abc", "bin"],
    pw: ["123", "1234", "12345"], 
}
// Modularity
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login")
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
        const id = req.body.id;
        const pw = req.body.pw;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    },
};

module.exports = {
    output,
    process,
};
