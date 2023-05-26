import {createBrowserRouter } from 'react-router-dom'
import { Inicial,Sobre , Accao,Loja,Compras,Perfil,Conversar ,BuyNow,Endereco,Pagamento } from '../pages/export'
import {SignInModal , SignUP,Base } from '../components/export.js';
import App from '../App'
import { PrivateRoutes} from './PrivateRoute'

export function Routes() {
  return ( 
    createBrowserRouter([ {
        path : "/",
        element: <App />,
        errorElement: "Falha em logar",
        children : [
          {
            path:"/",
            element :< Inicial/>,
            children : [
              {
                path:'/',
                element:<Loja/>,
              },
              {
                path:"/sobre",
                element:<Sobre />,
              },
              {
                path:"/accao",
                element:<Accao />,
              },
              {
                path:"/",
                element:<PrivateRoutes />,
                children:[
                  {
                    path:"/compras",
                    element:<Compras />,
                  },
                  {
                    path:"/conversar",
                    element:<Conversar />
                  },
                  {
                    path:"/perfil",
                    element:<Perfil />
                  },
                  {
                    path:"/buy",
                    element:<BuyNow />,
                  },
                  {
                    path:"/address",
                    element:<Endereco />,
                  },{
                    path:"/payNow",
                    element:<Pagamento />,
                  }
                ]
              },
              {
                path:'/inicial/signin',
                element: <Base> <SignInModal /> </Base>,
              },
              {
                path:'/inicial/signup',
                element:  <Base> <SignUP /> </Base>,
              }
            ]
          },
        ]
    } ])
    )
}
