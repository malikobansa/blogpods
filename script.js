function setArticles(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `
        <img src="${article.urlToImage}" alt="${article.title}" class="key">
            <h2 class="h2">${article.title}</h2>
            <button class='btn'>Read More</button>
        `;

        div.querySelector('.btn').addEventListener('click', () => {
            window.location.href = article.url;
        });
        newsContainer.appendChild(div);
    });
}

fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=5923c983e11d4d01a29b697669f485a4")
    .then((res) => res.json())
    .then((data) => {
        setArticles(data.articles);
    })
    .catch((error) => {
        console.error("Error fetching articles:", error);
    });
