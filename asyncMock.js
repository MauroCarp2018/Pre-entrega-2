const products = [
    {
        id: 1,
        name: 'Remera suplente ',
        price: 1000,
        category: 'remera',
        img: 'https://tiendariver.vteximg.com.br/arquivos/ids/170591-500-500/HT3688_FR.png?v=638324652257270000',
        stock: 25,
        description: 'Remera suplente del primer equipo'
    },
    {
        id: 2,
        name: 'Remera titular',
        price: 800,
        category: 'remera',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/T/HT3679_0.jpg',
        stock: 16,
        description: 'Remera titular del primer equipo'
    },
    {
        id: 3,
        name: 'Pantalón corto',
        price: 1200,
        category: 'pantalon',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9acdf7adc3a47d784264d9cbc4c61b0_9366/Short_Uniforme_Titular_River_Plate_23-24_Negro_HT3680_01_laydown.jpg',
        stock: 10,
        description: 'Pantalón corto titular del primer equipo'
    }
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((res, rej) =>
    setTimeout( () => {
        res(products.filter(prod=> prod.category===category))
    }, 2000)
    )
}

export const getProductById = (id) => {
    return new Promise((res,rej) => 
        setTimeout(() =>  {
            res(products.find(prod => prod.id.toString() === id))
        }, 1000)
    )
}