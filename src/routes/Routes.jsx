import {createBrowserRouter } from 'react-router-dom'
import { Inicial,Sobre , Accao,Loja,Compras ,Compra,Perfil,Conversar ,BuyNow,Endereco,Pagamento,DashBoard 
} from '../pages/export'

import {Detalhe ,VerAdubo, VerCliente,DetalheCliente,VerFertilizante , VerMaquina , VerSemente,Cliente ,Maquina , Fertilizante , Semente , Adubo ,EditeProduto,EditeCliente } from "../pages/dachboard/export.js"
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
                    path:"/compras/:id",
                    element:<Compra />
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
                  },
                  
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
          {
            path:"/",
            element:<PrivateRoutes />,
            children : [
              {
                path : "/dashBoard",
                element:<DashBoard />,
                children:[
                  {
                    path:"/dashBoard/c_adubo",
                    element:<Adubo />,
                  },
                  {
                    path:"/dashBoard/c_fertilizante",
                    element:<Fertilizante />,
                  },
                  {
                    path:"/dashBoard/c_semente",
                    element:<Semente />,
                  },
                  {
                    path:"/dashBoard/c_maquina",
                    element:<Maquina />,
                  },
                  {
                    path:"/dashBoard/cadastrarCliente",
                    element:<Cliente />,
                  },
                  {
                    path:"/dashBoard/verProduto/adubo",
                    element:<VerAdubo />,
                  },
                  {
                    path:"/dashBoard/verProduto/adubo/:id",
                    element:<Detalhe />,
                  },
                  {
                    path:"/dashBoard/verProduto/semente",
                    element:<VerSemente />,
                  },
                  {
                    path:"/dashBoard/verProduto/semente/:id",
                    element:<Detalhe/>,
                  },
                  {
                    path:"/dashBoard/verProduto/fertilizante",
                    element:<VerFertilizante />,
                  },
                  {
                    path:"/dashBoard/verProduto/fertilizante/:id",
                    element:<Detalhe />,
                  },
                  {
                    path:"/dashBoard/verProduto/maquina",
                    element:<VerMaquina />,
                  },
                  {
                    path:"/dashBoard/verProduto/maquina/:id",
                    element:<Detalhe />,
                  },
                  {
                    path:"/dashBoard/verProduto/editar/:id",
                    element:<EditeProduto/>
                  },
                  {
                    path:"/dashBoard/verCliente",
                    element:<VerCliente />,
                  },
                  {
                    path:"/dashBoard/verCliente/:id",
                    element:<DetalheCliente />
                  },
                  {
                    path:"/dashBoard/editarCliente/:id",
                    element:<EditeCliente/>
                  }

                ]
              }
            ]
          }
        ]
    } ])
    )
}
