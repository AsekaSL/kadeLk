import down from '../../../assets/nav/down-icon.png';

function PagesList() {

    const listClass = 'flex flex-row items-center font-bold gap-x-3';

    return(
        <ol type="none" className='flex flex-row w-125  justify-between'>
            <li className={listClass}>
                <div >HOMES</div>
                <img className='size-2.5' src={down} alt="Down icon" />
            </li>
            <li className={listClass}>
                <div >PAGES</div>
                <img className='size-2.5' src={down} alt="Down icon" />
            </li>
            <li className={listClass}>
                <div>PRODUCTS</div>
                <img className='size-2.5' src={down} alt="Down icon" />
            </li>
            <li className={listClass}>
                <div>CONTACT</div>
                <img className='size-2.5' src={down} alt="Down icon" />
            </li>
        </ol>
    );
}

export default PagesList;