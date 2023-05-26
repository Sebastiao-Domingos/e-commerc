import { GlobalStyle , ColorProvider ,BoughtProvider,UserProvider,ProductsProvider } from './export'


export const MyProviders = ({children}) => {
  return (
    <ColorProvider>
        <ProductsProvider>
            <UserProvider>
                <BoughtProvider>
                    <GlobalStyle />
                    {children }
                </BoughtProvider>
            </UserProvider>
        </ProductsProvider>
    </ColorProvider>
  )
}
