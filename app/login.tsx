'use client';
import { signIn } from 'next-auth/react'

export default function Login() {
    let newUser:boolean = true;
return (
    <button onClick={()=> signIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        { newUser ? 'Sign In' : 'Sign Up'}
    </button>
)
}