
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../Component/Contact';
import MainLayout from '../Layout/MainLayout';
import Shop from '../Component/Shop';

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

        ]
    }
])

export default MainRouts;
