// define source and view-switch boolean
const url = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed';
let listDisplay = false;

// pull json data
async function getAuthorInformation() {
    const response = await fetch(url);
    const data = await response.json();
    displayGrid(data.author);
}
getAuthorInformation()

// define grid display
const displayGrid = (Author) => {
    const cards = document.querySelector('section.AuthorInformation'); // select the output container element

    AuthorInformation.forEach((Author) => {
        // Create elements to add to the section element
        let ID = document.createElement("h2");
        let Date = document.createElement("ul");
        let Title = document.createElement("ul");
        let Author = document.createElement("li");

        // Build the other content out to show the AuthorData information
        ID.textContent = `${Author.ID}`;
        Date.textContent = `${Author.Date}`;
        Title.textContent = `${Author.Title}`;
        Author.textContent = `${Author.Author}`;
        
    
        // Append the section(card) with the created elements
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
    
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

