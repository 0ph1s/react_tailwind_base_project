import '../../App.css'
import { Snail } from 'lucide-react';

export function Register() {
    return(
        <>
            <main className='bg-slate-900 w-screen h-screen flex justify-center items-center'>
                <section className='flex flex-col gap-6 items-center'>
                    <Snail className='text-white size-24'/>
                    <input className='w-64 p-2.5 outline-none rounded-md font-bold text-slate-500' type="text" placeholder='E-mail...' />
                    <input className='w-64 p-2.5 outline-none rounded-md font-bold text-slate-500' type="text" placeholder='Password...'/>
                    <button className='bg-[blueviolet] hover:bg-[#892be2a3] transition-colors duration-200 text-white font-semibold p-2 rounded-md w-64'>Regiter</button>
                    <p className='text-white font-semibold'>Already has a account?
                        <a className='text-[blueviolet] hover:text-[#892be2a3] transition-colors duration-200 font-semibold' href="#"> Click here!</a>
                    </p>
                </section>
            </main>
        </>
    )
}