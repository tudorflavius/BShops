import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = cart.reduce((acc, produs) => acc + produs.price, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Comanda ta a fost plasată! Total: ${total} RON`);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Finalizare Comandă</h1>

      {cart.length === 0 ? (
        <p>Coșul este gol. Adaugă produse înainte de a finaliza comanda.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nume:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="address">Adresă:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <p>Total de plată: {total} RON</p>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Procesăm comanda..." : "Plasează comanda"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
