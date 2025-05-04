import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo, {UsecurrencyInfo} from './hooks/UsecurrencyInfo'
import './App.css'



function App() {
 const [amount,setAmount]=useState(0)
 const [from,setFrom]=useState("usd")
 const[to,setTo]=useState("pkr")
 const [convertedAmount,setConvertedAmount]=useState(0)

 // use of hooks//
 const CurrencyInfo=UsecurrencyInfo()
 const options = Object.keys(CurrencyInfo)

 const Swap=()=>{
  setFrom(to)
  setTo(from)
 }

 const convert=()=>{
  setConvertedAmount=(amount*UsecurrencyInfo[to])
 }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage:url(`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fcurrency-exchange&psig=AOvVaw1OP52G3Prma-9hglLJt73p&ust=1746475425743000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCv55nOio0DFQAAAAAdAAAAABAY`),
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={Swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
