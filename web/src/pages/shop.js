import React from "react";
import "./shop.css"; 

export default function ShoppingPage() {
    const items = [
        { img: "p1.png", title: "Skinny Skirts", price: "Rs 1400" },
        { img: "p2.png", title: "Beach Pink Skirts", price: "Rs 1600" },
        { img: "p3.png", title: "White Pink Skirts", price: "Rs 1500" },
        { img: "p4.png", title: "Blue Floral Dress", price: "Rs 3500" },
        { img: "p5.png", title: "Green Long frock", price: "Rs 5500" }
    ];

    return (
        <div>
            <section id="product-details" className="section">
                {/* Left */}
                <div className="product-img">
                    <img src="/assets/2p.png" alt="Main Product" className="main-img" />

                    <div className="thumbnail-row">
                        {["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"].map((file) => (
                            <div className="thumbnail" key={file}>
                                <img src={`/assets/${file}`} alt={file} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Product Info */}
                <div className="product-in">
                    <h6>Home / T-shirt</h6>
                    <h4>Pastel Crop Top</h4>
                    <h2>Rs 1239.00</h2>

                    <select>
                        <option>Select size</option>
                        <option>S (36)</option>
                        <option>M (38)</option>
                        <option>L (40)</option>
                        <option>XL (42)</option>
                        <option>XXL (44)</option>
                    </select>

                    <h4>Product Details</h4>
                    <p>
                        The Golden Ultra Cotton T-shirt is made from a substantial 6.0 oz.
                        per sq. yd. fabric constructed from 100% cotton. This classic
                        preshrunk jersey knit provides unmatched comfort with each wear.
                        Featuring a taped neck and shoulder, seamless double-needle
                        collar, and available in a range of colors, it’s the ultimate
                        head-turner.
                    </p>

                       <div className="quantity-cart">
                        <input type="number" defaultValue="1" />
                        <button className="btn normal">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section id="featured-products" className="section">
                <h2>Featured Products</h2>

                <div className="product-grids">
                    {items.map((p, i) => (
                        <div className="product-cards" key={i}>
                            <img src={`/assets/${p.img}`} alt={p.title} />
                            <div className="product-desc">

                                <h5>{p.title}</h5>

                                <h4>{p.price}</h4>
                             <button className="shop-now-btn">Shop Now</button>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
