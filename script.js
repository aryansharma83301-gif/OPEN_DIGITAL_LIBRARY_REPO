// ===== Book Data =====

const books = [
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    subject: "Computer Science",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910auj8?w=400&h=600&fit=crop"
  },
  {
    title: "The Elegant Universe",
    author: "Brian Greene",
    subject: "Physics",
    coverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    subject: "Coding",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    subject: "History",
    coverImage: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=600&fit=crop"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    subject: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    subject: "Economics",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    subject: "Philosophy",
    coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop"
  },
  {
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    subject: "Chemistry",
    coverImage: "https://images.unsplash.com/photo-1532187863486-abf4dbce1253?w=400&h=600&fit=crop"
  }
];

// ===== Render Book Cards =====

function renderBooks(bookList) {
  const grid      = document.getElementById('book-grid');
  const noResults = document.getElementById('no-results');

  // Clear existing cards (keep the no-results div)
  grid.querySelectorAll('.book-card').forEach(card => card.remove());

  // Book icon SVG reused in every Read button
  const bookIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`;

  if (bookList.length === 0) {
    noResults.classList.add('visible');
  } else {
    noResults.classList.remove('visible');

    bookList.forEach(book => {
      const card = document.createElement('article');
      card.classList.add('book-card');

      card.innerHTML = `
        <div class="book-card__image-wrapper">
          <img src="${book.coverImage}" alt="${book.title} cover" />
          <span class="book-card__badge">${book.subject}</span>
        </div>
        <div class="book-card__body">
          <h3 class="book-card__title">${book.title}</h3>
          <p class="book-card__author">by <span>${book.author}</span></p>
          <button class="book-card__btn" onclick="alert('Opening: ${book.title}')">
            ${bookIconSVG}
            Read
          </button>
        </div>
      `;

      // Insert before the no-results div
      grid.insertBefore(card, noResults);
    });
  }
}

// ===== Search / Filter Logic =====

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderBooks(books);

  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    if (query === '') {
      renderBooks(books);
      return;
    }

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(query)
    );

    renderBooks(filtered);
  });
});
