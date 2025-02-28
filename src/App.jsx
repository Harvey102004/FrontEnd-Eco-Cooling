import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProductsLayout from "./layout/ProductsLayout";
import AddItem from "./components/AddItem";
import ProductDetails from "./components/ProductDetails";
import EditItem from "./components/EditItem";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route path="addItem" element={<AddItem />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/edit/:id" element={<EditItem />} />
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
