import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps ={
    order: OrderItem[],
    tip: number
    saveOrder: () => void
    
}
export default function TotalOrder({order, tip, saveOrder} : OrderTotalProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotal * tip, [tip, order])
    const totalAmount = useMemo(() => subTotal + tipAmount, [tip, order])

  return (

    <>
    <div className="space-y-3 ml-5">
        <h2 className="font-black text-2xl ">
            Total y Propina
        </h2>
        <p>Subtotal a pagar:{''} <span className="font-bold">{ formatCurrency(subTotal) }</span></p>
        <p>Propina:{''} <span className="font-bold">{ formatCurrency(tipAmount) }</span></p>
        <p className="font-black">Total a pagar:{''} <span className="font-bold">{ formatCurrency(totalAmount) }</span></p>

    </div>
        <button className="m-5 w-auto bg-black p-3 uppercase text-white"
        onClick={saveOrder}>
            Guardar Orden

        </button>
    

    </>
  )
}
