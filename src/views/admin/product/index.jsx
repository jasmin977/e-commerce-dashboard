import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import ProductView from "./ViewProduct";

function ProductRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/products/add" component={AddProduct} />
      <Route path="/products/:id" component={ProductView} />
    </Switch>
  );
}
export default ProductRoutes;
