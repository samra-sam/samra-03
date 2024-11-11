import Link from "next/link";
export default function Navbar(){
    return(
       <div className="flex justify-center gap-6 bg-yellow-400 text-black mt-6 font-semibold">
            <Link href="/">Home Page</Link>
            
            <Link href="/about">About Page</Link>
            
            <Link href="/job">Job Page</Link>
            
            <Link href="/job/programming">Programming Page</Link>
            
            <Link href="/contact">Contact Page</Link>
            
            <Link href="/services">Services Page</Link>
            
            
    </div>
    )
} 