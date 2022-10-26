
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Cards from './Components/Cards';
import Courses from './Components/Courses';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';
import Main from './Components/Main';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/courses', element: <Courses></Courses>
      },
      {
        path: '/categorie/:id',
        element: <Cards></Cards>,
        loader: ({params})=>fetch(`http://localhost:4000/categorie/${params.id}`)
      },
      {
        path: '/faq', element: <Faq></Faq>
      },
      {
        path: '/blog', element: <Blog></Blog>
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
