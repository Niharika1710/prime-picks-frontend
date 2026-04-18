import { useEffect, useState } from "react";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
//const user = JSON.parse(localStorage.getItem("user") || "{}");
 useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user") || "{}");

  console.log("USER:", user); // 👈 CHECK THIS

  if (!user.email) return;

  fetch(`${API_BASE_URL}/api/cart/${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log("CART DATA:", data); // 👈 CHECK THIS
      setCart(data);
    });
}, []);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
   
 return (
  <div className="p-10">
    <h1 className="text-2xl font-bold mb-6">My Cart</h1>

    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} className="border p-4 mb-2">
          <p><strong>{item.productName}</strong></p>
          <p>₹{item.price}</p>

          <button
            onClick={async () => {
              await fetch(`${API_BASE_URL}/api/cart/${item.id}`, {
                method: "DELETE"
              });

              setCart(cart.filter(c => c.id !== item.id));

              toast.success("Item removed!");
            }}
            className="text-red-500 mt-2"
          >
            Remove
          </button>
        </div>
      ))
    )}

    {/* ✅ TOTAL HERE */}
    <h2 className="mt-6 text-xl font-bold">
      Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
    </h2>
  </div>
);
}