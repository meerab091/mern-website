import "./card.css";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "Rs 2000/-",
    image:"/assets/1p.png",
  },
  {
    id: 2,
    name: "Pastel Crop Top",
    price: "Rs 1200/-",
    image: "/assets/2p.png",
  },
  {
    id: 3,
    name: "Linen Shorts",
    price: "Rs 1500/-",
    image: "/assets/3p.png",
  },
  {
    id: 4,
    name: "Sun Hat",
    price: "Rs 800/-",
    image:"/assets/4p.png",
  },
];

export default function Card() {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.image}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="buy-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
