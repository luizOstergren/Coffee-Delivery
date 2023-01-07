import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayouts";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { CheckoutCompleted } from "./pages/CheckoutCompleted";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/completedOrder" element={<CheckoutCompleted />} />
      </Route>
    </Routes>
  );
}
