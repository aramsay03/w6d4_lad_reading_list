document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function () {
  event.preventDefault();
  const newListItem = document.createElement('li');
  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);

  const newTitleItem = document.createElement('h1');
  const newAuthorItem = document.createElement('h2');
  const newCategoryItem = document.createElement('p');

  newListItem.appendChild(newTitleItem);
  newListItem.appendChild(newAuthorItem);
  newListItem.appendChild(newCategoryItem);

  newTitleItem.textContent = event.target.title.value;

  newAuthorItem.textContent = event.target.author.value;

  newCategoryItem.textContent = event.target.category.value;



  // const title = document.querySelector('#reading-list li h1');
  // title.textContent = event.target.title.value;

  // const author = document.querySelector('#reading-list li h2');
  // author.textContent = event.target.author.value;
  //
  // const category = document.querySelector('#reading-list li p');
  // category.textContent = event.target.category.value;

  document.querySelector('#new-item-form').reset();

};
