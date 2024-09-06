import '../../App.css'
import { Search } from 'lucide-react';

export function InputSearch() {
    return(
        <>
            <div className='flex'>
                <input className='p-3 outline-none rounded-l-md font-bold text-slate-400' type="search" placeholder="Search City..."/>
                <button className='bg-[blueviolet] hover:bg-[#892be2a3] transition-colors duration-200 p-3 rounded-r-md'>
                    <Search className='text-white'/>
                </button>
            </div>
        </>
    )
}