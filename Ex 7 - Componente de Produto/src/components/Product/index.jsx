const Product = ({photo, name, price}) => {
    return(
        <>
            <section className="product-container">
                <div>
                    <img src={photo}
                         alt={name}
                         className="product-photo"
                    />
                </div>
                <div className="product-name">
                    <span>{name}</span>
                </div>
                <div className="product-price">
                    <span>{price}</span>
                </div>
            </section>
        </>
    )
}

export default Product;