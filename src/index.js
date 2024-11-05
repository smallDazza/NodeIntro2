console.log("This file is running!");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URI: "asdasd:asdasd",
    JWT_SECURITY_KEY: "asdasdas",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "sdfas76d5f7as6d5fasd"
};

let contentToWrite = "";

// What it should look like:
// PORT=5050
// DATABASE_URI="asdasd:asdasd"
// JWT_SECURITY_KEY="asdasdas"
// SECRET_KEY="apple"
// SECURE_API_KEY="sdfas76d5f7as6d5fasd"

Object.keys(defaultEnv).forEach(
    envKey => {
        contentToWrite += `${envKey} = ${defaultEnv[envKey]}\n`;
    }
);

// Give us an idea of what gets stored in the file
console.log(contentToWrite);

// All the file handling operations will be performed using fs
// const fs = require("node:fs");

//Synchronus way:
// fs.writeFileSync(filepath, fileContents);

// Asynchronous way:
// fs.writeFile(filepath, fileContents, callback);

// console.log("before the fs callback !!");
// fs.writeFile(".env", contentToWrite, (error) => {
//     console.log("Reached the callback function..")
//     if (error){
//         console.log("Error encountered: ", error.message);
//     }
//     else{
//         console.log("File written successfully.");
//     }
// })
// console.log("After the fs callback !");

// console.log("File has been written");

// Promise version of node-fs
const fs = require("node:fs/promises");

// console.log("Before the promise");
// fs.writeFile(".env", contentToWrite)
// .then(() => {
//     console.log("After the file has been created.");
// }).then(() => {
//     fs.writeFile(".testenv", contentToWrite)
//     .then(() => {
//         console.log("After the file has been written in the 2nd file.");

//         fs.writeFile(".testenv1", contentToWrite)
//         .then(() => {
//             console.log("Writing to the third file...");
//         }).catch((error) => {
//             console.log("Error countered in the third file storage: ", error.message);
//         });

//     })
//     .catch ((error) => {
//         console.log("Error countered in the second file storage: ", error.message)
//     });
// }).catch((error) => {
//     console.log("Error encountered: ", error.message);
// }).finally(() => {
//     console.log("All the file writing operations has been executed."); 
// });
// console.log("After the promise");

//Async functions:
async function writeEnvFile(){
    console.log("Before the await");
    try {
        let result = await fs.writeFile(".env", contentToWrite);
        console.log("Await process executed here...");
    } catch (error) {
        console.log("Error occured: ", error.message);
    }
    console.log("After the await");
}

writeEnvFile();

async function app() {
    console.log("Before calling the app function");
    await writeEnvFile().then(() => {
        console.log("Did this work? Lets find out.");
    });
    console.log("After calling");
}

app()