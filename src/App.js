
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './Components/Courses';
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
