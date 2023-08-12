const stars = document.querySelectorAll('.star');
const selectedClass = 'selected';

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    setRating(value);
  });
});

function setRating(value) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= value) {
      star.classList.add(selectedClass);
    } else {
      star.classList.remove(selectedClass);
    }
  });
}

const reviewText = document.getElementById('review-text');
const reviewsContainer = document.querySelector('.reviews');

reviewText.addEventListener('input', () => {
  const text = reviewText.value.trim();
  if (text !== '') {
    reviewText.classList.add('has-content');
  } else {
    reviewText.classList.remove('has-content');
  }
});

function addReview(text) {
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review');
  reviewContainer.innerHTML = `<p>${text}</p>`;
  reviewsContainer.appendChild(reviewContainer);
}