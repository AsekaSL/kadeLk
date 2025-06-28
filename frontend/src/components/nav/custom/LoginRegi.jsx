import profile from '../../../assets/nav/Link.png'

function LoginRegi() {
    return(
        <div className='flex flex-row w-[177px] items-center justify-between'>
            <img src={profile} alt="Profile icon" className='cursor-pointer' />
            <div className='flex flex-col justify-evenly'>
                <div className='text-xs text-gray-600'>WELCOME</div>
                <div className='text-sm font-bold'>LOG IN / REGISTER</div>
            </div>
        </div>
    )
}

export default LoginRegi;