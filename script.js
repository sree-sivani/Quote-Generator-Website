const apiUrl = "https://api.quotable.io/random";

async function getRandomQuote(url){
    const response = await fetch(url);

    let data = await response.json();

    // console.log(data);


    const quoteELe = document.querySelector('.quote');
    const quoteAuthor = document.querySelector('.quote-author');

    quoteELe.innerHTML = `" ${data.content} "`;
    quoteAuthor.innerHTML = ` -${data.author}`;

}

getRandomQuote(apiUrl);