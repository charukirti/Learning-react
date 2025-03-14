import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQantity, getTotalCartPrice } from "./CartSlice";
import {formatCurrency} from '../../utils/helpers'

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 p-4 px-4 py-4 text-sm md:text-base uppercase text-stone-200 sm:px-6 flex items-center justify-between">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
