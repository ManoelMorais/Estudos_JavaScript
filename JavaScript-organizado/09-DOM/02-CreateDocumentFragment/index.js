'use strick';

// para criar os elementos
const Ul = document.querySelector('ul')
const fragment = document.createDocumentFragment();

const lanches = ["lanche1", "lanche2", "lanche3", "lanche4"]

lanches.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    fragment.append(li);
});

Ul.append(fragment)

/**
 * para remover os elementos
 * só precisa usar a tag remove()
 * 
 * caso queira pegar algo específico
 * li[2].remove()
 */
