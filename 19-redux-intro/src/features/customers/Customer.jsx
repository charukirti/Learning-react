import { useSelector } from "react-redux";

export default function Customer() {
  // read data from redux-store we use useSelector hook

 const customer =  useSelector(store => store.customer.fullName)
 console.log(customer)
  return <h2>👋 Welcome, {customer}</h2>;
}
