const categories = document.querySelector(`#categories`);
const categoriesItems = categories.querySelectorAll(`.item`);

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => {
 
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul li');
  
  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements.length);
});
