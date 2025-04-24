document.addEventListener('DOMContentLoaded', function() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        showError('No article ID provided');
        return;
    }
    
    // Fetch article data
    fetchArticle(articleId);
    
    // Set up button event listeners
    setupButtons();
});

async function fetchArticle(articleId) {
    try {
        const response = await fetch(`https://mobiappave.xyz/api/article.php?id=${articleId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.message || 'Error fetching article');
        }
        
        displayArticle(data.data);
        
    } catch (error) {
        showError(error.message);
    }
}

function displayArticle(article) {
    document.getElementById('post-title').textContent = article.title;
    document.getElementById('post-image').src = article.imageUrl;
    document.getElementById('post-image').alt = article.title;
    document.getElementById('post-content').innerHTML = article.content;
    document.getElementById('likes-count').textContent = article.likes;
    document.querySelector('.author').textContent = `By ${article.author}`;
    document.querySelector('.date').textContent = article.date;
    
    // Set tag if it exists
    const tagElement = document.querySelector('.tag');
    if (article.tag) {
        tagElement.textContent = article.tag;
        tagElement.style.display = 'inline-block';
    } else {
        tagElement.style.display = 'none';
    }
}

function setupButtons() {
    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', function() {
        const likesCount = document.getElementById('likes-count');
        let currentLikes = parseInt(likesCount.textContent);
        likesCount.textContent = currentLikes + 1;
        
        // In a real app, send this to your API
        console.log('Liked article');
    });
    
    const shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', function() {
        // Simple share implementation
        if (navigator.share) {
            navigator.share({
                title: document.getElementById('post-title').textContent,
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
            });
        } else {
            // Fallback for browsers without Web Share API
            alert('Share this article: ' + window.location.href);
        }
    });
    
    // Back button functionality
    document.querySelector('.back-button').addEventListener('click', goBack);
}

function goBack() {
    window.history.back();
}

function showError(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="error-message">
            <h2>Error Loading Article</h2>
            <p>${message}</p>
            <button onclick="goBack()">Go Back</button>
        </div>
    `;
}