// pages/404.js
import Link from 'next/link'
export default function Custom404() {

    return <>
    <h1 style="text-align:center">404 - Page not Found</h1>
    <Link href="https://leks.gg">
        <a>
            Go home
        </a>
    </Link>
    </>
}
