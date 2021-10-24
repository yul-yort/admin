import { FC } from "react";
import { OrderSkeleton } from "../../../../components/Order/OrderSkeleton";

const Loading: FC = () => (
  <>
    <OrderSkeleton />
    <OrderSkeleton />
    <OrderSkeleton />
    <OrderSkeleton />
  </>
);

export default Loading;
