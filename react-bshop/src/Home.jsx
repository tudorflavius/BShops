import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      <h1>Produse</h1>
      {products.map((produs) => (
        <div key={produs.id}>
          <img src={produs.image} alt={produs.name} />
          <h2>{produs.name}</h2>
          <p>{produs.price} RON</p>
          <p>{produs.description}</p>
          <Link to={`/product/${produs.id}`}>Vezi detalii</Link>
          <button onClick={() => addToCart(produs)}>Adaugă în coș</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
