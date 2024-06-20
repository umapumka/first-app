/*
js of "convert"


function convertTemperature() {


    const celsiusInput = document.getElementById('celsiusInput').value;
    const ConvertForm = document.getElementById('ConvertForm').value;
    const convertTo = document.getElementById('convertTo').value;


    let result;


    if (ConvertForm === convertTo) {
        result = parseInt(celsiusInput);
    } else if (ConvertForm === 'C' && convertTo === 'F') {
        result = (celsiusInput * 9/5) + 32;
    } else if (ConvertForm === 'F' && convertTo === 'C') {
        result = (celsiusInput - 32) * 5/9;
    }

    document.getElementById('showResult').innerText = `${parseFloat(result).toFixed(2)}°${convertTo}`;
}

document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    convertTemperature()
}*/

/*const users = [
    {
        id: 1,
        fullname: "John Doe"
    },
    {
        id: 2,
        fullname: "George Smith"
    },
    {
        id: 3,
        fullname: "Angelina Jolie"
    },
    {
        id: 4,
        fullname: "Sponge Bob"
    },
];
function getUser(fullname) {
    const getUserPromise = new Promise((resolve, reject) => {

        setTimeout(() => {

            const foundUser = users.find(user => user.fullname === fullname);
            
            if (foundUser !== undefined) {
                resolve(foundUser);
            }else{
                reject(`User with id ${fullname} doesn't exist.`);
            }
        }, 2000);
    });

    return getUserPromise;
}

getUser("Sponge Bab").then((result) =>{
    console.log(result);

})

.catch((error) => {
    console.error(error);
})*/

//books js

import { books } from "./books.js";

const booksContainer = document.getElementById("allBooks")

books.forEach(book => {
    const bookDiv = document.createElement("div")
    bookDiv.classList.add("bookCard");

    const img = document.createElement("img")
    img.src = book.cover;
    img.alt = book.title;

    bookDiv.appendChild(img);

    const detailsDiv =document.createElement("div");
    detailsDiv.classList.add("detailsDiv");

    const title = document.createElement("h4");
    title.classList.add("book-title");
    title.textContent = book.title;
    detailsDiv.appendChild(title);

    const authorName = document.createElement("p");
    authorName.classList.add("author");
    authorName.textContent = book.author;
    detailsDiv.appendChild(authorName)

    bookDiv.append(detailsDiv)
    booksContainer.append(bookDiv)

   
});






