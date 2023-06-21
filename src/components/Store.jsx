import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Store() {
    const [firstItemCounter, updateFirstItemCount] = useState(1);
    const [secondItemCounter, updateSecondItemCount] = useState(1);
    const [firstItemPrice] = useState(9.38);
    const [secondItemPrice] = useState(11.52);

    function subtractFirstItem(){
        if(firstItemCounter > 0){
            updateFirstItemCount(firstItemCounter - 1)
        }
    }
    function AddFirstItem(){
        updateFirstItemCount(firstItemCounter + 1)
    }
    function subtractSecondItem(){
        if(secondItemCounter > 0){
            updateSecondItemCount(secondItemCounter - 1)
        }
    }
    function AddSecondItem(){
        updateSecondItemCount(secondItemCounter + 1)
    }

    function GetTotalTaxes(){
        let totalPrice = ((firstItemPrice*firstItemCounter) + (secondItemCounter*secondItemPrice)) * 0.17;
        return RoundToTwoAfterDot(totalPrice);
    }
    function GetPriceWithoutTaxes(){
        return RoundToTwoAfterDot((firstItemPrice*firstItemCounter) + (secondItemCounter*secondItemPrice))
    }
    function GetTotalPrice(){
        let price = parseFloat(GetPriceWithoutTaxes())
        let tax = parseFloat(GetTotalTaxes())
        return RoundToTwoAfterDot(price + tax);
    }

    function RoundToTwoAfterDot(number){
        return Math.round(number * 100) / 100;
    }


    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <div className='d-flex flex-column justify-content-evenly col-8 p-2'>
                <h2><span className='fw-bold'>Cart Total:</span> ${GetTotalPrice() }</h2>
                <div className="d-flex justify-content-end"><button className='text-white btn btn-danger'>I'm ready to checkout</button></div>
                <div className="d-flex border-bottom">
                    <img src="https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90" alt="" />
                    <div className="col-11 my-2">
                        <div className="col-12 d-flex justify-content-between border-bottom">
                            <p>Gaiam Kids Yoga Headband - Pink/Blue</p>
                            <div className='d-flex'>
                                <button className='circle m-1' onClick={subtractFirstItem}>-</button>
                                <p>{firstItemCounter}</p>
                                <button className='circle m-1'  onClick={AddFirstItem}>+</button>
                            </div>
                            <p>${firstItemPrice}</p>
                        </div>
                        <button className='btn btn-light btn-sm btn-outline-success'>remove</button>
                        <div className="d-flex"><input type="checkbox"  />  wrap it for $5.99</div>
                    </div>
                </div>
                <div className="d-flex border-bottom">
                    <img className="col-1" src="https://m.media-amazon.com/images/I/81ewil6z-yL.jpg" alt="" />
                    <div className="col-11 my-2">
                        <div className="col-12 d-flex justify-content-between border-bottom">
                            <p>Hamburger Helper</p>
                            <div className='d-flex'>
                                <button className='circle m-1' onClick={subtractSecondItem}>-</button>
                                <p>{secondItemCounter}</p>
                                <button className='circle m-1'  onClick={AddSecondItem}>+</button>
                            </div>
                            <p>${secondItemPrice}</p>
                        </div>
                        <button className='btn btn-light btn-sm btn-outline-success'>remove</button>
                        <div className="d-flex"><input type="checkbox"  />  wrap it for $5.99</div>
                    </div>
                </div>
            </div>
            <div className='border-start bg-light bg-gradient col-4 px-4'>
                <h3 className='py-2'>order summary</h3>
                <div className='d-flex justify-content-between'>
                    <h6><span className='fw-bold'>subtotal</span> ({firstItemCounter+secondItemCounter} items)</h6>
                    <h6 className='fw-bold'>${GetPriceWithoutTaxes()}</h6>
                </div>
                <div className='d-flex justify-content-between'>
                    <h6 className='fw-bold'>Delivery</h6>
                    <h6 className='text-danger fw-bold'>FREE</h6>
                </div>
                <div className=' border-bottom d-flex justify-content-between'>
                    <h6 className='fw-bold'>Estimated Taxes</h6>
                    <h6 className='fw-bold'>${GetTotalTaxes()}</h6>
                </div>
                <div className=' border-bottom'>
                    <h4>total ${GetTotalPrice()}</h4>
                </div>
            </div>
        </div>
    )
}
