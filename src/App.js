import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Component/Home/Home';
import Statistic from './Component/Statistic/Statistic';
import Blog from './Component/Blog/Blog';
import Quiz from './Component/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
    children: [
      {path:'/home',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>},
      {path: '/statistic',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Statistic></Statistic>},
      {path: '/blog',
      element:<Blog></Blog>},
      {
        path:'/topics/:topicsId',
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
        },
        element:<Quiz></Quiz>
      }
    ]
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
