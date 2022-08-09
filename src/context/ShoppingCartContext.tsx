import { createContext, ReactNode, useContext} from 'react'

interface shopCartProps{
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: shopCartProps){
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}