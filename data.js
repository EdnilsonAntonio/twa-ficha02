const categories = ['book', 'movie', 'game', 'music'];

const randomCategory = () =>
    categories[Math.floor(Math.random() * categories.length)];

export const items = [
    {
        id: 1, name: 'Clean Code', category: randomCategory(),
        price: 32.5, tags: ['dev', 'classic'],
        author: { name: 'R. Martin', country: 'US' }
    },
    {
        id: 2, name: 'The Pragmatic Programmer', category: randomCategory(),
        price: 41.9, tags: ['dev', 'best-practice'],
        author: { name: 'A. Hunt', country: 'US' }
    },
    {
        id: 3, name: 'JavaScript: The Good Parts', category: randomCategory(),
        price: 28.75, tags: ['js', 'classic'],
        author: { name: 'D. Crockford', country: 'US' }
    },
    {
        id: 4, name: 'Head First Design Patterns', category: randomCategory(),
        price: 39.9, tags: ['design', 'java'],
        author: { name: 'E. Freeman', country: 'US' }
    },
    {
        id: 5, name: 'You Dont Know JS', category: randomCategory(),
        price: 26.4, tags: ['js', 'deep-dive'],
        author: { name: 'K. Simpson', country: 'US' }
    },
    {
        id: 6, name: 'Refactoring', category: randomCategory(),
        price: 35.5, tags: ['dev', 'maintenance'],
        author: { name: 'M. Fowler', country: 'UK' }
    },
    {
        id: 7, name: 'Introduction to Algorithms', category: randomCategory(),
        price: 58.9, tags: ['cs', 'algorithms'],
        author: { name: 'T. Cormen', country: 'US' }
    },
    {
        id: 8, name: 'Domain-Driven Design', category: randomCategory(),
        price: 46.8, tags: ['architecture', 'design'],
        author: { name: 'E. Evans', country: 'US' }
    },
    {
        id: 9, name: 'Patterns of Enterprise Application Architecture', category: randomCategory(),
        price: 44.2, tags: ['architecture', 'enterprise'],
        author: { name: 'M. Fowler', country: 'UK' }
    },
    {
        id: 10, name: 'The Linux Command Line', category: randomCategory(),
        price: 22.1, tags: ['cli', 'sysadmin'],
        author: { name: 'W. Shotts', country: 'US' }
    }
]