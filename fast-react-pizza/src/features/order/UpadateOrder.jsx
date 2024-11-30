import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpadateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({request, params}) {
    const data = { priority: true }
    await updateOrder(params.orderId, data)
    return null;
}