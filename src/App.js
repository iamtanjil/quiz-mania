import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Component/Home/Home';
import Statistic from './Component/Statistic/Statistic';
import Blog from './Component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
    children: [
      {path:'/home',
      element:<Home></Home>},
      {path: '/statistic',
      element: <Statistic></Statistic>},
      {path: '/blog',
      element:<Blog></Blog>}
    ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
