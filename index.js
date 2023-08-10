


const apiKey = `744eadbe38654b14816fc3fe4c5bef3b`;
function initial_load(){
    fetch(`https://newsapi.org/v2/everything?q=cnnnews&apiKey=${apiKey}&sortBy=publishedAt&language=en`).then(res=>res.json())
        .then(data=>{console.log(data.articles[0]);displayNews([data.articles[0]])})
        .catch(error=>{console.error('Error fetching news:', error);
                        alert('Error fetching news. Please try again later.');})
}



function searchNews() {
    const source = document.getElementById('source').value.trim();
  
    if (!source) {
      alert('Please enter a news source.');
      return;
    }
  
    const apiUrl = `https://newsapi.org/v2/everything?q=${source}&apiKey=${apiKey}&sortBy=publishedAt`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayNews(data.articles);
        //displayNewsSourceLogo(data.articles[0].source.name);
        displayNewsSourceLogo(data.articles[0]);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        alert('Error fetching news. Please try again later.');
      });
  }
  
  function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    let first_article= articles[0]
  
      //create element for each article
      const articleElement = document.createElement('div');
      //add a class called article
      articleElement.classList.add('article');
      //create an element to store the title of article
      const titleElement = document.createElement('h2');
      //store the title 
      titleElement.textContent = first_article.title;
      //create element to store the description
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = first_article.description;
  
      const publishedAtElement = document.createElement('p');
      publishedAtElement.textContent = `Published At: ${first_article.publishedAt}`;
  
      articleElement.appendChild(titleElement);
      articleElement.appendChild(descriptionElement);
      articleElement.appendChild(publishedAtElement);
  
      newsContainer.appendChild(articleElement);
    ;
  }
  
  function displayNewsSourceLogo(newsSource) {
    const logo = document.getElementById('logo');
    // Replace this with your own logic to get the logo URL based on the newsSource
    const logoUrl = getLogoUrl(newsSource);
    logo.src = logoUrl;
  }
  // function to submit comment
  function submitComment() {
    const comment = document.getElementById('comment').value.trim();
  
    if (!comment) {
      alert('Please enter your comment.');
      return;
    }
  
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    commentContainer.textContent = comment;
  
    document.getElementById('newsContainer').appendChild(commentContainer);
  }

  // Get all like buttons and like counts
const likeButtons = document.querySelectorAll('.like-button');
const likeCounts = document.querySelectorAll('.like-count');

// Add click event listeners to each like button
likeButtons.forEach((button, index) => {
  let likes = 0; // Initial like count

  button.addEventListener('click', () => {
    likes++; // Increment like count
    likeCounts[index].textContent = likes; // Update like count display
    button.disabled = true; // Disable the button after clicking (you can add more logic here to prevent multiple clicks)
  });
});

  
  
  function getLogoUrl(newsSource) {
    return newsSource.urlToImage

    
    if (newsSource === 'BBC' || newsSource=== 'bbc') {
       return 'bbc.png';
     } else if (newsSource === 'CNN' || newsSource=='cnn') {
       return 'cnn.png';
     } else {
       return 'default.jpg';
     }
    
    
  }

  initial_load()
  