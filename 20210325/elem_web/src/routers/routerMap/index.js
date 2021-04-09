import App from '../../App';
import Home from '../../pages/Home'; 
import Food from '../../pages/Food';
import Register from '../../pages/Register';

const routers=[
  {
    path:'/',
    name:'app',
    component:App,
    children:[
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
          path:'/food',
          name:'food',
          component:Food,
        },
        {
          path:'/register',
          name:'register',
          component:Register,
        }
    ]
  }
]

export default routers;