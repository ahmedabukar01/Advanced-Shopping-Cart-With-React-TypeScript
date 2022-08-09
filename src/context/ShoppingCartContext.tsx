import { createContext, ReactNode, useContext, useState} from 'react'

interface shopCartProps{
    children: ReactNode
}

interface shopCartCont {
    getItemQ : (id: number) => number
    incCartQ: (id: number) => void
    decCartQ: (id: number) => void
    removeCart: (id: number) => void
}
const ShoppingCartContext = createContext({} as shopCartCont)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: shopCartProps){
    const [cartItems, setCartItems] = useState([])

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}