"user strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User{
    // 생성자
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        // const {id, pw} = UserStorage.getUsers("id", "pw");
        const {id, pw} = UserStorage.getUserInfo(client.id);
        if(id){
            if (id === client.id && pw === client.pw){
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg:"존재하지 않는 ID입니다. "};
        //console.log(id, pw);
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;