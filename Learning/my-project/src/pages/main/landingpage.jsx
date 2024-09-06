import { Aside } from '../../stuff/page_stuff/aside'
import { Hero } from '../../stuff/page_stuff/main'
import '../../App.css'

export function LandingPage() {
    return(
        <>
            <main class='main'>
                <Aside/>
                <Hero/>
            </main>
        </>
    )
}