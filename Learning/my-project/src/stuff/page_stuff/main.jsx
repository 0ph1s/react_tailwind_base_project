import '../../App.css'
import { InputSearch } from './input_main'
import { Sun, Moon } from 'lucide-react';

export function Hero() {
    return(
        <>
            <div class="header-main">
                <section class="top-main">
                    <section class="elements-top-main">
                        <Sun className='text-amber-300 cursor-pointer'/>
                        <Moon className='text-amber-300 cursor-pointer'/>
                        <InputSearch/>
                    </section>
                </section>
        
                <section class="hero-main">
                    <section class="elements-hero-main">
                        <div class="map-example">
                            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467693.36902234395!2d-47.219249791909746!3d-23.681162695262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1722921447060!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}