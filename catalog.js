// 1. List by category
export function byCategory(list, cat) {
    const filteredBooks = list.filter(b => b.category === cat);
    return filteredBooks
}

// 2. Search by title or category
export function search(list, text) {
    
    // 1. Normalize the text
    const query = text.toLowerCase();

    // 2. Filter the items
    return list.filter(
        ({name, tags}) => {
            return name.toLowerCase().includes(query) ||
            tags.some((tag => tag.toLowerCase().includes(query)))
        }
    )
}

// 3. Total price of the list
export function total(list) {
    return list.reduce((acc, book) => acc + book.price , 0);
}

// 4. Top n most expensives
export function top(list, n) {
    const orderedList = [...list].sort((a, b) => {
        return b.price - a.price
    })

    const topn = orderedList.slice(0, n);

    return topn
}

// 5. Distinct categories in order
export function categories(list) {
    // 1. Grab the distinct categories and sort them
    const distinctCategories = [...new Set(list.map(book => book.category))].sort((a,b) => b.localeCompare(a));

    // 2. Return the result
    return distinctCategories;
     
}

// 6. New products with discount
export function withDiscount(list, pct) {
    return list.map((product) => ({
        ...product,
        price: product.price * (1 - pct / 100)
    }))
}