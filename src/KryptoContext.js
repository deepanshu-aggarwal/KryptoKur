import React, { createContext, useContext, useEffect, useState } from 'react'

const Krypto = createContext()

const KryptoContext = ({children}) => {

    const [currency, setCurrency] = useState('INR')
    const [symbol, setSymbol] = useState('₹')

    useEffect(() => {
        if(currency === 'INR')  setSymbol('₹')
        else if(currency === 'USD')  setSymbol('$')
    }, [currency])

    return (
        <Krypto.Provider value={{currency, symbol, setCurrency}}>
            {children}
        </Krypto.Provider>
    )
}

export default KryptoContext

export const KryptoState = () => {
    return useContext(Krypto)
} 