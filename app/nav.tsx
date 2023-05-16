import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href={'/'}>
                <h1>
                    Send it
                </h1>
            </Link>
        </nav>
    )
}