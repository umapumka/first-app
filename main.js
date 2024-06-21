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
// Importing books data (assuming this is your 'books.js' file content)
/*import { books } from "./books.js";

// Function to render books based on selected genre
function renderBooks(genre, filteredBooks) {
    const booksContainer = document.getElementById("allBooks");
    booksContainer.innerHTML = ''; // Clear previous content

    filteredBooks.forEach((book) => {
        if (genre === 'All-genres' || book.genre === genre) {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("bookCard");

            const img = document.createElement("img");
            img.src = book.cover;
            img.alt = book.title;
            bookDiv.appendChild(img);

            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("detailsDiv");

            const title = document.createElement("h4");
            title.classList.add("book-title");
            title.textContent = book.title;
            detailsDiv.appendChild(title);

            const authorName = document.createElement("p");
            authorName.classList.add("author");
            authorName.textContent = book.author;
            detailsDiv.appendChild(authorName);

            bookDiv.appendChild(detailsDiv);
            booksContainer.appendChild(bookDiv);
        }
    });
}

// Initial render of all books
renderBooks("All-genres", books);

// Event listener for genre select dropdown
const genreSelect = document.getElementById('genres');
genreSelect.addEventListener('change', function() {
    const selectedGenre = genreSelect.value;
    const filteredBooks = books.filter((book) => {
        return selectedGenre === 'All-genres' || book.genre === selectedGenre;
    });
    renderBooks(selectedGenre, filteredBooks);
});


function filterBooks(genre, query) {
    return books.filter((book) => {
        const titleMatches = book.title.toLowerCase().includes(query.toLowerCase());
        const authorMatches = book.author.toLowerCase().includes(query.toLowerCase());
        const genreMatches = genre === 'All-genres' || book.genre === genre;

        return (titleMatches || authorMatches) && genreMatches;
    });
}

// Event listener for search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const selectedGenre = genreSelect.value;
    const filteredBooks = filterBooks(selectedGenre, searchInput.value.trim());
    renderBooks(selectedGenre, filteredBooks);
});*/


//fetch 

fetch("https://randomuser.me/api/?results=10")
.then((response) => response.json())
.then((result) => {
    console.log(result)
    portfolioCard(result.results)
})
.catch((error) => console.log(error))


function portfolioCard(users) {
   const userCardContainer =document.getElementById("userCardContainer");

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("userCard");
        userCard.innerHTML = `
        <div id="pic">
        <img src = ${user.picture.large} alt=${user.name.first}/>
        </div>

        <div class="details">
        <h1>${user.name.first} ${user.name.last}</h1>
        <p><strong>Email:</strong>${user.email}</p>
            <p><strong>Location:</strong>Chicago, USA</p>
            <p><strong>Occupation:</strong>${user.occupation}</p>
            <p><strong>About Me:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, optio.</p>
        </div>
        `;
        userCardContainer.appendChild(userCard)

    });
    
}

