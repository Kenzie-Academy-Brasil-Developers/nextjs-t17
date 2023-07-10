"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () => {
    const { push } = useRouter();

    const goHome = () => {
        console.log("Seja feliz para sempre!")
        push("/");
    }

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <button onClick={goHome}>Voltar ao início</button>
            </nav>
        </header>
    )
}