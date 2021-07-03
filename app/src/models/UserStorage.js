"use strict";

const fs = require("fs").promises;


class UserStorage{
    // 
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    // Method로 Data 전달 
    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        }) //Logic 성공 시
        .catch(console.error); //Logic 실패 시
    };

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }) //Logic 성공 시
        .catch(console.error); //Logic 실패 시
    }
    
    static async save(userInfo){
        // Data를 불러온 뒤 추가 하고 작성
        const users = await this.getUsers(true);
        // console.log(users);
        // console.log(userInfo);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 ID입니다.";
        }
        // console.log("존재안함?");
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        // Data 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
};

module.exports = UserStorage;