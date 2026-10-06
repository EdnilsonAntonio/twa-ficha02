import {writeFile} from 'node:fs/promises'
import { byCategory, search, total, top, categories, withDiscount } from "./catalog.js";
import { items } from "./data.js";
const [cmd, args] = process.argv.slice(2);

const print = (list) => {
    console.log(
        list.length === 0
            ? 'Sem resultados'
            : list.map(({ id, name, price }) => `${id}. ${name}. €${price.toFixed(2)}`).join('\n')
    )
}

// 1. No comand
if (cmd === undefined) {
    print(items);
// 2. Search
} else if (cmd === 'search') {
    print(search(items, args));
} // 3. Total price
else if (cmd === 'total') {
    console.log(`Total: ${total(items).toFixed(2)} EUR`)
} else if (cmd === 'top') {
    print(top(items, args))
} else if (cmd === 'categories') {
    console.log(categories(items).join('\n'));
} else if (cmd === 'discount') {
    print(discount(items, Number(args)))
}
// 4. By Category
else if (cmd === 'category'){
    print(byCategory(items, args))
} else if (cmd === 'report') {
    const report = {
        count: items.length,
        total: total(items),
        categories: categories(items),
        top3: top(items, 3)
    }

    await writeFile('report.json', JSON.stringify(report, null, 2));
    console.log("report.json guardado com sucesso!");
}



