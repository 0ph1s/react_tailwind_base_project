import '../../App.css'
import { House, User, Wallet, Settings, Bug } from 'lucide-react';

export function Aside() {
    return (
        <>
            <section class="aside">
                <header class="header-aside">
                        <img class="img-user" src= "./src/assets/img/user2.jpeg"/>
                        <section class="info-user">
                            <p class="username">Usuario</p>
                            <p class="cpf">261.277.390-80</p>
                        </section>
                </header>

                <nav class="nav">
                    <ul class="list-items">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <House/>
                                <span>HOME</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <User/>
                                <span>PROFILE</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Wallet/>
                                <span>WALLET</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Settings/>
                                <span>SETTINGS</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Bug/>
                                <span>EXAMPLE</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Bug/>
                                <span>EXAMPLE</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Bug/>
                                <span>EXAMPLE</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <Bug/>
                                <span>EXAMPLE</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}