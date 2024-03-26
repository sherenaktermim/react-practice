
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../Component/Contact';
import MainLayout from '../Layout/MainLayout';
import Shop from '../Component/Shop';
import User5 from '../Component/User5';


const MainRouts = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,

        children:[
        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/Shop",
            element:<Shop/>
        },
        {
            path:"/user",
            element:<User5/>
        },
        

        ]
    }
])

export default MainRouts;
