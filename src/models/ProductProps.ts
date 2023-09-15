interface ProductProps {
    id: number,
    name: string,
    description: string,
    price: number,
    switch_type: string,
    layout: string,
    backlight: boolean,
    connection: string,
    stock: number,
    thumbnail: string,
    images: string | string[]
}

export default ProductProps;