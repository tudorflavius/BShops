import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, produs) => acc + produs.price, 0).toFixed(2);

  return (
    <div>
      <h1>Coșul de Cumpărături</h1>
      {cart.length === 0 ? (
        <p>Coșul este gol</p>
      ) : (
        <>
          {cart.map((produs) => (
            <div key={produs.id}>
              <h2>{produs.name}</h2>
              <p>{produs.price} RON</p>
              <button onClick={() => removeFromCart(produs.id)}>
                Șterge din coș
              </button>
            </div>
          ))}
          <h3>Total: {total} RON</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
