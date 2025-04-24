/**
 * ArticleAdapter - A class to manage article data and rendering
 */
class ArticleAdapter {
    constructor() {
        this.articles = [];
        this.filteredArticles = [];
        this.currentFilter = 'recent'; // 'recent' or 'favorites'
    }

    /**
     * Set the articles data
     * @param {Array} articles - Array of article objects
     */
    setArticles(articles) {
        this.articles = articles;
        this.applyFilter();
    }

    /**
     * Apply the current filter to the articles
     */
    applyFilter() {
        if (this.currentFilter === 'favorites') {
            this.filteredArticles = this.articles.filter(article => article.isFavorite);
        } else {
            // For 'recent', we'll just sort by date
            this.filteredArticles = [...this.articles].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
        }
    }

    /**
     * Set the current filter
     * @param {string} filter - 'recent' or 'favorites'
     */
    setFilter(filter) {
        this.currentFilter = filter;
        this.applyFilter();
    }

    /**
     * Toggle favorite status for an article
     * @param {number} id - Article ID
     */
    toggleFavorite(id) {
        const article = this.articles.find(article => article.id === id);
        if (article) {
            article.isFavorite = !article.isFavorite;
            this.applyFilter();
        }
        return article?.isFavorite;
    }

    /**
     * Render the articles to the DOM
     * @param {HTMLElement} container - Container element to render articles into
     */
    render(container) {
        container.innerHTML = '';
        
        this.filteredArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-card';
            articleElement.innerHTML = `
                <div class="article-image-container">
                    <img src="${article.imageUrl}" alt="${article.title}" class="article-image">
                    <button class="like-button ${article.isFavorite ? 'active' : ''}" data-id="${article.id}">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                                  stroke="${article.isFavorite ? '#ff4757' : '#ffffff'}" 
                                  fill="${article.isFavorite ? '#ff4757' : 'none'}" 
                                  stroke-width="2" />
                        </svg>
                    </button>
                </div>
                <div class="article-content">
                    ${article.tag ? `<div class="article-tag ${article.tag === 'New Article' ? 'tag-new' : 'tag-popular'}">${article.tag}</div>` : ''}
                    <h3 class="article-title">${article.title}</h3>
                    <a href="#" class="read-more">
                        Read more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18l6-6-6-6" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            `;
            
            container.appendChild(articleElement);
            
            // Add click event to the entire article card to navigate to details
            articleElement.addEventListener('click', (e) => {
                // Don't navigate if clicking the like button
                if (!e.target.closest('.like-button')) {
                    window.location.href = `postdetails.html?id=${article.id}`;
                }
            });
            
            // Add event listener to the like button
            const likeButton = articleElement.querySelector('.like-button');
            likeButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the article click from firing
                const id = parseInt(e.currentTarget.dataset.id);
                const isFavorite = this.toggleFavorite(id);
                
                // Update the button appearance
                if (isFavorite) {
                    likeButton.classList.add('active');
                    likeButton.querySelector('svg path').setAttribute('fill', '#ff4757');
                    likeButton.querySelector('svg path').setAttribute('stroke', '#ff4757');
                } else {
                    likeButton.classList.remove('active');
                    likeButton.querySelector('svg path').setAttribute('fill', 'none');
                    likeButton.querySelector('svg path').setAttribute('stroke', '#ffffff');
                }
                
                if (this.currentFilter === 'favorites') {
                    this.render(container);
                }
            });
        });
    }
}
