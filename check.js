import assert from 'node:assert/strict'
import { byCategory, search, total, top, categories, withDiscount } from './catalog.js'

const lista = [
    { id: 1, name: 'A', category: 'book', price: 10, tags: ['x'] },
    { id: 2, name: 'B', category: 'game', price: 20, tags: ['y'] },
]

assert.equal(total(lista), 30); // Passou

// byCategory: só os itens dessa categoria (deepEqual, porque é um array)
assert.deepEqual(byCategory(lista, 'book'), [lista[0]])
assert.deepEqual(byCategory(lista, 'xyz'), [])

// search: por nome, por tag, e sem distinguir maiúsculas
assert.deepEqual(search(lista, 'a'), [lista[0]])
assert.deepEqual(search(lista, 'Y'), [lista[1]])

// top: o mais caro primeiro, e a lista original não muda de ordem
assert.deepEqual(top(lista, 1), [lista[1]])
assert.equal(lista[0].id, 1)

// categories: únicas e por ordem alfabética
assert.deepEqual(categories(lista), ['book', 'game'])

// withDiscount: preço novo certo E o original intacto
const novos = withDiscount(lista, 10)
assert.equal(novos[0].price, 9)
assert.equal(lista[0].price, 10)