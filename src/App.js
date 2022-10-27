
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
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/courses',
        element: <PrivateRouter><Courses></Courses></PrivateRouter>,
        loader: ()=>fetch('http://localhost:4000/courses')
      },
      {
        path: '/categorie/:id',
        element: <PrivateRouter><Cards></Cards></PrivateRouter>,
        loader: ({params})=>fetch(`http://localhost:4000/categorie/${params.id}`)
      },
      {
        path: '/faq', element: <PrivateRouter><Faq></Faq></PrivateRouter>
      },
      {
        path: '/blog', element: <PrivateRouter><Blog></Blog></PrivateRouter>
      },
      {
        path: '/courses/:id', 
        element: <PrivateRouter><CardDetails></CardDetails></PrivateRouter>,
        loader: ({params})=> fetch(`http://localhost:4000/courses/${params.id}`)
      },
      { 
        path: '/login', element: <Login></Login>
      },
      {
        path: '/register', element: <Register></Register>
      }
    ]

  },
  {path: '*', element: <h1 className='text-center'>This is a not found: 404</h1>}
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
