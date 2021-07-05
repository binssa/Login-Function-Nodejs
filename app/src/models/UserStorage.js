"use strict";

// const fs = require("fs").promises;
const db =require("../config/db");

class UserStorage{
    // File System 사용 시 
    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const userInfo = Object.keys(users).reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
        
    //     return userInfo;
    // }
    
    // static #getUsers(data, isAll, fields){
    //     const users = JSON.parse(data);
    //     if(isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if (users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }

    // Method로 Data 전달 
    static getUsers(isAll, ...fields){
        // 1. File System
        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //     return this.#getUsers(data, isAll, fields);
        // }) //Logic 성공 시
        // .catch(console.error); //Logic 실패 시

        // 2. DB - MySQL
        // db.query
    };

    static getUserInfo(id){
        // 1. File System
        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //     return this.#getUserInfo(data, id);
        // }) //Logic 성공 시
        // .catch(console.error); //Logic 실패 시
        
        // 2. DB - MySQL
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?";
            //내부 구문이 성공하면 resolve, 실패하면 reject
            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
        
        
    }
    
    static async save(userInfo){
        // 1. File System
        // Data를 불러온 뒤 추가 하고 작성
        // const users = await this.getUsers(true);        
        // if(users.id.includes(userInfo.id)){
        //     throw "이미 존재하는 ID입니다.";
        // }
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.pw.push(userInfo.pw);
        // // Data 추가
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return { success: true };

        // 2. DB - MySQL
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pw) VALUES(?, ?, ?);";
            //내부 구문이 성공하면 resolve, 실패하면 reject
            db.query(query, [userInfo.id, userInfo.name, userInfo.pw], (err) => {
                if(err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
};

module.exports = UserStorage;