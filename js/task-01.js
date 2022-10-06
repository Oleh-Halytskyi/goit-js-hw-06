// const numberOfCategories = document.querySelectorAll('h2')
// console.log(`Number of categories: ${numberOfCategories.length}`);

// const ulFef = document.querySelectorAll('.item > ul')

// console.log(`Category: ${numberOfCategories[0].textContent}`)
// console.log(`Elements: ${ulFef[0].children.length}`)

// console.log(`Category: ${numberOfCategories[1].textContent}`)
// console.log(`Elements: ${ulFef[1].children.length}`)

// console.log(`Category: ${numberOfCategories[2].textContent}`)
// console.log(`Elements: ${ulFef[2].children.length}`)


// ==============================

const categories = document.querySelector('#categories');
const category = categories.querySelectorAll('.item');

const count = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${count(secondElem)}`);
    });
};
console.log(`Number of categories: ${count(categories)}`);
message(category);