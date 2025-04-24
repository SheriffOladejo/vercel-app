document.addEventListener("DOMContentLoaded", () => {
    // Configuration
    let currentPage = 1
    const articlesPerPage = 6
    const apiUrl = "https://mobiappave.xyz/api/articles.php"
  
    // DOM Elements
    const articlesContainer = document.getElementById("articles")
    const loadingIndicator = document.getElementById("loading")
    const paginationContainer = document.getElementById("pagination")
    const paginationInfo = document.getElementById("pagination-info")
    const tabs = document.querySelectorAll(".tab")
    const filters = document.querySelectorAll(".filter")
  
    // Initialize the app
    initEventListeners()
    fetchArticles(currentPage)
  
    function initEventListeners() {
      // Tab switching
      tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          tabs.forEach((t) => t.classList.remove("active"))
          this.classList.add("active")
          fetchArticles(currentPage)
        })
      })
  
      // Filter dropdown simulation
      filters.forEach((filter) => {
        filter.addEventListener("click", () => fetchArticles(currentPage))
      })
    }
  
    async function fetchArticles(page = 1) {
      currentPage = page
      showLoadingState()
  
      try {
        const response = await fetch(`${apiUrl}/?page=${page}&per_page=${articlesPerPage}`)
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
  
        const data = await response.json()
  
        if (!data.success) {
          throw new Error(data.message || "Error fetching articles")
        }
  
        renderArticles(data.data)
        renderPagination(data.pagination)
      } catch (error) {
        showErrorState(error)
      } finally {
        loadingIndicator.style.display = "none"
      }
    }
  
    function showLoadingState() {
      articlesContainer.innerHTML = ""
      paginationContainer.innerHTML = ""
      paginationInfo.textContent = ""
      loadingIndicator.style.display = "flex"
    }
  
    function showErrorState(error) {
      articlesContainer.innerHTML = `
              <div class="error-message">
                  Failed to load articles. 
                  ${error.message.includes("CORS") ? "Please try again later or contact support." : error.message}
              </div>
          `
    }
  
    function renderArticles(articles) {
      articlesContainer.innerHTML = ""
  
      if (articles.length === 0) {
        articlesContainer.innerHTML = '<div class="error-message">No articles found</div>'
        return
      }
  
      articles.forEach((article) => {
        const articleElement = createArticleElement(article)
        articlesContainer.appendChild(articleElement)
      })
  
      setupArticleInteractions()
    }
  
    function createArticleElement(article) {
      const articleElement = document.createElement("div")
      articleElement.className = "article"
      articleElement.dataset.id = article.id
  
      articleElement.innerHTML = `
              <div class="article-image-container">
                  <img src="${article.imageUrl}" alt="${article.title}" class="article-image" loading="lazy">
                  <button class="like-button" data-article-id="${article.id}">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" stroke="#ffffff" stroke-width="2" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                      </svg>
                  </button>
              </div>
              <div class="article-content">
                  ${article.tag ? `<div class="article-tag ${article.tag.includes("New") ? "new" : "popular"}">${article.tag}</div>` : ""}
                  <h2>${article.title}</h2>
                  <a href="#" class="read-more" data-article-id="${article.id}">
                      Read more
                      <svg viewBox="0 0 24 24" width="16" height="16">
                          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                      </svg>
                  </a>
              </div>
          `
  
      return articleElement
    }
  
    function setupArticleInteractions() {
      setupLikeButtons()
      setupReadMoreLinks()
  
      // Article click handler
      articlesContainer.addEventListener("click", (e) => {
        const article = e.target.closest(".article")
        if (article && !e.target.closest(".like-button") && !e.target.closest(".read-more")) {
          const articleId = article.dataset.id
          window.location.href = `postdetails.html?id=${articleId}`
        }
      })
    }
  
    function setupLikeButtons() {
      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.stopPropagation()
          this.classList.toggle("liked")
          const svgPath = this.querySelector("svg path")
          svgPath.setAttribute("fill", this.classList.contains("liked") ? "#ff4081" : "none")
  
          // In a real app, send to API
          console.log(`Article ${this.dataset.articleId} ${this.classList.contains("liked") ? "liked" : "unliked"}`)
        })
      })
    }
  
    function setupReadMoreLinks() {
      document.querySelectorAll(".read-more").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.stopPropagation()
          const articleId = this.dataset.articleId
          window.location.href = `postdetails.html?id=${articleId}`
        })
      })
    }
  
    function renderPagination(pagination) {
      paginationContainer.innerHTML = ""
      paginationInfo.textContent = `Page ${pagination.current_page} of ${pagination.total_pages}`
  
      if (pagination.total_pages <= 1) return
  
      let html = ""
  
      // Previous button
      if (pagination.has_prev_page) {
        html += `<button class="page-btn page-nav" onclick="fetchArticles(${pagination.current_page - 1})">&laquo; Prev</button>`
      }
  
      // Page numbers
      const startPage = Math.max(1, pagination.current_page - 2)
      const endPage = Math.min(pagination.total_pages, pagination.current_page + 2)
  
      // First page and ellipsis
      if (startPage > 1) {
        html += `<button class="page-btn" onclick="fetchArticles(1)">1</button>`
        if (startPage > 2) html += `<span class="page-ellipsis">...</span>`
      }
  
      // Middle pages
      for (let i = startPage; i <= endPage; i++) {
        html += `<button class="page-btn ${i === pagination.current_page ? "active" : ""}" onclick="fetchArticles(${i})">${i}</button>`
      }
  
      // Last page and ellipsis
      if (endPage < pagination.total_pages) {
        if (endPage < pagination.total_pages - 1) html += `<span class="page-ellipsis">...</span>`
        html += `<button class="page-btn" onclick="fetchArticles(${pagination.total_pages})">${pagination.total_pages}</button>`
      }
  
      // Next button
      if (pagination.has_next_page) {
        html += `<button class="page-btn page-nav" onclick="fetchArticles(${pagination.current_page + 1})">Next &raquo;</button>`
      }
  
      paginationContainer.innerHTML = html
    }
  
    // Make fetchArticles available globally
    window.fetchArticles = fetchArticles
  })
  
  // Quiz functionality
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab")
    const articlesContainer = document.querySelector("#articles")
    const quizContainer = document.getElementById("quiz-container")
    const resultsContainer = document.getElementById("results-container")
    const paginationInfo = document.getElementById("pagination-info")
    const pagination = document.getElementById("pagination")
    const loading = document.getElementById("loading")
  
    // Tab switching
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"))
        this.classList.add("active")
  
        if (this.textContent === "Articles") {
          articlesContainer.style.display = "grid" // Change from 'block' to 'grid'
          quizContainer.style.display = "none"
          resultsContainer.style.display = "none"
          paginationInfo.style.display = "block"
          pagination.style.display = "flex"
        } else if (this.textContent === "Quizzes") {
          articlesContainer.style.display = "none"
          quizContainer.style.display = "block"
          resultsContainer.style.display = "none"
          paginationInfo.style.display = "none"
          pagination.style.display = "none"
          startQuiz()
        }
      })
    })
  
    // Quiz variables
    let currentQuestionIndex = 0
    let score = 0
    let questions = []
  
    // Quiz elements
    const quizQuestionElement = document.getElementById("quiz-question")
    const quizOptionsElement = document.getElementById("quiz-options")
    const currentQuestionElement = document.getElementById("current-question")
    const totalQuestionsElement = document.getElementById("total-questions")
    const currentScoreElement = document.getElementById("current-score")
    const nextQuestionBtn = document.getElementById("next-question-btn")
    const quizResultElement = document.getElementById("quiz-result")
    const finalScoreElement = document.getElementById("final-score")
    const finalTotalElement = document.getElementById("final-total")
    const restartQuizBtn = document.getElementById("restart-quiz-btn")
  
    // Start the quiz
    function startQuiz() {
      currentQuestionIndex = 0
      score = 0
      updateScore()
  
      // Reset UI
      quizResultElement.style.display = "none"
      quizQuestionElement.style.display = "block"
      quizOptionsElement.style.display = "block"
      nextQuestionBtn.style.display = "block"
      nextQuestionBtn.textContent = "Next Question"
      nextQuestionBtn.disabled = true
  
      // Fetch questions from the server
      fetch(`https://mobiappave.xyz/api/getQuestions.php`)
        .then((response) => response.json())
        .then((data) => {
          questions = data
          totalQuestionsElement.textContent = questions.length
          showQuestion()
        })
        .catch((error) => {
          console.error("Error fetching questions:", error)
          quizQuestionElement.textContent = "Failed to load questions. Please try again."
        })
    }
  
    // Show current question
    function showQuestion() {
      if (currentQuestionIndex >= questions.length) {
        showResult()
        return
      }
  
      const question = questions[currentQuestionIndex]
      currentQuestionElement.textContent = currentQuestionIndex + 1
      quizQuestionElement.textContent = question.question
  
      // Clear previous selections
      nextQuestionBtn.disabled = true
      quizOptionsElement.querySelectorAll(".quiz-option").forEach((option) => {
        option.classList.remove("selected", "correct", "incorrect")
        option.style.pointerEvents = "auto"
      })
  
      // Populate options
      const options = quizOptionsElement.querySelectorAll(".option-text")
      options.forEach((option, index) => {
        option.textContent = question.options[index]
      })
    }
  
    // Handle option selection
    quizOptionsElement.addEventListener("click", (e) => {
      const optionElement = e.target.closest(".quiz-option")
      if (!optionElement) return
  
      const selectedIndex = Number.parseInt(optionElement.dataset.index)
  
      // Clear previous selection
      quizOptionsElement.querySelectorAll(".quiz-option").forEach((opt) => {
        opt.classList.remove("selected")
      })
  
      // Mark selected option
      optionElement.classList.add("selected")
      nextQuestionBtn.disabled = false
    })
  
    // Handle next question
    nextQuestionBtn.addEventListener("click", () => {
      const selectedOption = quizOptionsElement.querySelector(".quiz-option.selected")
      if (!selectedOption) return
  
      const selectedIndex = Number.parseInt(selectedOption.dataset.index)
      const question = questions[currentQuestionIndex]
  
      // Check if answer is correct
      if (selectedIndex === question.correctAnswer) {
        score++
        updateScore()
        selectedOption.classList.add("correct")
      } else {
        selectedOption.classList.add("incorrect")
        // Highlight correct answer
        quizOptionsElement.querySelector(`.quiz-option[data-index="${question.correctAnswer}"]`).classList.add("correct")
      }
  
      // Disable all options
      quizOptionsElement.querySelectorAll(".quiz-option").forEach((opt) => {
        opt.style.pointerEvents = "none"
      })
  
      // Change button text for last question
      if (currentQuestionIndex === questions.length - 1) {
        nextQuestionBtn.textContent = "See Results"
      }
  
      // Move to next question after a delay
      setTimeout(() => {
        currentQuestionIndex++
  
        // If this was the last question and button was clicked, show results
        if (currentQuestionIndex >= questions.length) {
          showResult()
        } else {
          showQuestion()
          // Re-enable options for new question
          quizOptionsElement.querySelectorAll(".quiz-option").forEach((opt) => {
            opt.style.pointerEvents = "auto"
          })
        }
      }, 1500)
    })
  
    // Update score display
    function updateScore() {
      currentScoreElement.textContent = score
    }
  
    // Show final result
    function showResult() {
      // Hide question-related elements but keep the quiz container visible
      quizQuestionElement.style.display = "none"
      quizOptionsElement.style.display = "none"
      nextQuestionBtn.style.display = "none"
  
      // Update and show the result element
      finalScoreElement.textContent = score
      finalTotalElement.textContent = questions.length
      quizResultElement.style.display = "block"
    }
  
    // Restart quiz
    restartQuizBtn.addEventListener("click", () => {
      startQuiz()
    })
  })
  
  async function verifyAndRedirect(targetPage = 'options.html') {
    try {
        // Fetch the API key from PHP endpoint
        const response = await fetch('https://mobiappave.xyz/api/get_api_key.php');
        const data = await response.json();
        
        if (data.api_key === 'test') {
            // Navigate without back button access
            window.location.replace(targetPage);
            
            // Alternative method that also prevents going back
            // window.location.href = targetPage;
            // window.history.pushState(null, null, targetPage);
            // window.addEventListener('popstate', function() {
            //     window.history.pushState(null, null, targetPage);
            // });
        } else {
            
            // Handle invalid key case (show error, redirect to login, etc.)
        }
    } catch (error) {
        console.error('Error fetching API key:', error);
    }
  }

  verifyAndRedirect();
