import Link from 'next/link';
import Login from './login';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]';

export default async function Nav() {
    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <nav>
            <Link href={'/'}>
                <h1>
                    Send it
                </h1>
                <div>
                    <Login/>
                </div>
            </Link>
        </nav>
    )
}