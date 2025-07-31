import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/store/useOrderStore";
import { useLocation,useNavigate } from "react-router-dom";
import { useAddOrder } from "@/apis/Orders/addOrder";




const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email must be a valid format"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone number is required").min(10, "Phone number must be at least 10 characters"),
  city: yup.string().required("City is required"),
  zip: yup.number().required("ZIP Code is required"),
  cardNumber: yup.number().required("Card Number is required").min(16, "Card Number must be 16 digits"),
  expiry: yup.string().required("Expiry Date is required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Expiry date must be in MM/YY format"),
  cvc: yup.number().required("CVC is required").min(3, "CVC must be  3 digits"),
  nameOnCard: yup.string().required("Name on card is required"),
}); 

type FormData = yup.InferType<typeof schema>;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("Checkout state:", state.cartItems);
  const cartItems = state?.cartItems ? JSON.parse(state.cartItems) : [];
  console.log("Cart items in checkout:", cartItems);
  const subtotal = cartItems.map(item => item.product.price * item.quantity).reduce((t, item) => t + item, 0);
  const shipping = 20;
  const total = subtotal + shipping;
  const addOrderMutation = useAddOrder();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const order = {
  items: cartItems.map((item: any) => ({
    product: item._id,
    quantity: item.quantity,
  })),
 
  shippingAddress: {
    street: data.address,
    city: data.city,
    zip: String(data.zip),
     country: "USA", // or use a country field if available
  },
  totalPrice: total,
  deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // or set expected delivery
  status: "pending",

};
    console.log("Submitting order:", order);

    addOrderMutation.mutate(order)

    useOrderStore.getState().addOrder(order);
    
    alert("Order placed successfully!");
    navigate("/profile");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-8">
        {/* Billing & Payment Info */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Billing Section */}
          <div className="p-4 border rounded-md shadow-sm bg-white space-y-4">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
               <div  className="sm:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" {...register("address")} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register("city")} />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
              </div>
              <div>
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" {...register("zip")} />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-4 border rounded-md shadow-sm bg-white space-y-4">
            <h2 className="text-xl font-semibold">Payment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" {...register("cardNumber")} />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
              </div>
              <div>
                <Label htmlFor="expiry">Expiry</Label>
                <Input id="expiry" placeholder="MM/YY" {...register("expiry")} />
                {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" {...register("cvc")} />
                {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
              </div>
              <div>
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input id="nameOnCard" {...register("nameOnCard")} />
                {errors.nameOnCard && <p className="text-red-500 text-sm">{errors.nameOnCard.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.product._id} className="flex justify-between py-2">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right font-semibold">${item.product.price * item.quantity}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full " >
              Place Order
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
