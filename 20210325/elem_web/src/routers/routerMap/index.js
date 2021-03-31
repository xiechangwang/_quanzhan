import App from '../../App';
import About from '../../pages/About'; 
import Info from '../../pages/Info';
import Info2 from '../../pages/Info/info2';
import Info3 from '../../pages/Info/info3';
export default [
  {
    path:'/',
    name:'app',
    component:App,
    children:[
  {
    path:'/about',
    name:'about',
    component:About
  },
  {
    path:'/info',
    name:'info',
    component:Info,
    children:[
      {
        path:'/info/info2',
        name:'info2',
        component:Info2,
        children:[
          {
            // 动态路由传参
            path:'/info/info2/info3/:id',
            name:'info3',
            component:Info3
          }
        ]
      }
    ]
  }
],
},
]
