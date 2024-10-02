import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import TipPorcentageForm from "./components/TipPorcentageForm"
import OrderContent from "./components/OrderContent"
import TotalOrder from "./components/TotalOrder"

function App() {
const {order, addItem, removeItem, tip, setTip, saveOrder} = useOrder()

  return (
    <>
         <header className="bg-green-700 py-5">
           <h1 className="text-center font-mono text-2xl">Calculadora de Consumo y Propinas</h1>
         </header>

          <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
            
        <div>
            <h2 className="text-center text-4xl font-black">Menu</h2>
          <div className="space-y-3  mt-10 ml-5 mr-5">
                {menuItems.map(item => (
                <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
                />
                ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300  rounded-md space-y-10 ml-5 mr-5">

          {order.length > 0 ? (
            <>
            <OrderContent
                order={order}
                removeItem={removeItem}
              />

              <TipPorcentageForm
                setTip={setTip}
                tip={tip}
              />
              <TotalOrder
                order={order}
                tip={tip}
                saveOrder = {saveOrder}
              />
            
            </>
          ): ( <p className="text-center pt-10">La orden esta vacia</p>)}
              

        </div>
            


          </main>
    
    </>
  )
}

export default App
