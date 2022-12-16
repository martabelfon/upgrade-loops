// **Iteración #1: Usa includes SI**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan 
//la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//creamos el for of para que me muestre todos los productos que contiene nuestra array
for (const product of products) {
    //si el producto que estoy sacando contiene "camiseta" lo muestro, si no, paso de él
    if (product.includes("Camiseta"))
    console.log(product);
}