const products = ['hello sabeek ', ' going to go', 'something gonna give here'];

const search = 'hello';
const news = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        news.push(product);
    }
}
console.log(news);

for (const product of products) {
    if (product.toLowerCase().includes(search.toLowerCase()) != -1) {
        news.push(product);
    }
}
console.log(news);