import App from '../../App';
import Home from '../../pages/Home'; 
import Food from '../../pages/Food';
export default [
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
  }
],
},
]
