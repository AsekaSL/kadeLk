import { useContext, useEffect } from 'react';
import profile from '../../../assets/nav/Link.png'
import { AppCotext } from '../../../context/AppContext';

function LoginRegi() {

    const {setIsSelectLogin, userData, isSelectLogin, getUserData, isSeller} = useContext(AppCotext);

    useEffect(() => {
        getUserData();
    },[]);

    return(
        <div className='flex  flex-row w-[41px] lg:w-[177px] items-center justify-between cursor-pointer' onClick={() => setIsSelectLogin(!isSelectLogin)}>
            <img src={profile} alt="Profile icon" className='cursor-pointer' />
            <div className='hidden lg:flex flex-col justify-evenly'>
                <div className='text-xs text-gray-600'>{userData ? userData.name || userData.contactName : "WELCOME"}</div>
                {userData ? <div className='text-sm font-bold text-green-500' > {userData.contactName ? "Seller" : "Online"}</div> : <div className='text-sm font-bold' >LOG IN / REGISTER</div>}
            </div>
        </div>
    )
}

export default LoginRegi;