import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';

import CartProvider from "./store/CartProvider";


import Welcome from './components/Welcome/Welcome';

const router=createBrowserRouter([
    {
        path:"/", element:<Welcome/>
    },
    {
        path:"/app",
        element:<App/>
    }
 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CartProvider>   <RouterProvider router={router}/></CartProvider>

);
