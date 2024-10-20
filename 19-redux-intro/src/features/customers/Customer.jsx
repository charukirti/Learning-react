import { useSelector } from "react-redux";

function Customer() {
  // it subscribed to store i.e now we can use store 
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
