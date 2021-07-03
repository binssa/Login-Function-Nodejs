"use strict";

class UserStorage{
    // 인증 시 필요한 계정 정보 
    // 데이터 은닉화
    static #users = { // #을 통해서 private 설정
        id: ["shb", "abc", "bin"],
        pw: ["123", "1234", "12345"], 
        name: ["김커피", "사마우스", "박가방"],
    };
    // Method로 Data 전달 
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        console.log(users);
        return {success: true};

    }
};

module.exports = UserStorage;