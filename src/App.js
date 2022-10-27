
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import CardDetails from './Components/CardDetails';
import Cards from './Components/Cards';
import Courses from './Components/Courses';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';
import Main from './Components/Main';
import { Toaster } from 'react-hot-toast';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: ()=>fetch('http://localhost:4000/courses')
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
      },
      {
        path: '/courses/:id', 
        element: <CardDetails></CardDetails>,
        loader: ({params})=> fetch(`http://localhost:4000/courses/${params.id}`)
      },
      { 
        path: '/login', element: <Login></Login>
      },
      {
        path: '/register', element: <Register></Register>
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
