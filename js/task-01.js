const categoriesListEl = document.querySelector('#categories');

const getCategoriesListInfo = categories => {
  const itemsEl = categories.children;

  console.log(`Number of categories: ${itemsEl.length}`);

  [...itemsEl].forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
  });
};

getCategoriesListInfo(categoriesListEl);
