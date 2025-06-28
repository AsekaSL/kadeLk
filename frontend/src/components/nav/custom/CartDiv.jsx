import cart from '../../../assets/nav/Cart.png';

function CartDiv() {
    return(
        <div className='flex flex-row w-[177px] items-center justify-evenly relative'>
            <img src={cart} alt="Cart icon" className='cursor-pointer' />
            <div className='flex flex-col justify-evenly'>
                <div className='text-xs'>CART</div>
                <div className='font-bold'>Rs.1,689.00</div>
            </div>
            <div className='font-xs absolute flex justify-center items-center rounded-2xl bg-green-600 size-5 text-white left-10 top-6 cursor-pointer'>
                <div>
                    5
                </div>
            </div>
        </div>
    );
}

export default CartDiv;