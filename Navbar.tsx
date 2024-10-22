// components/Navbar.js
import Link from 'next/link';
 

const Navbar = () => {
    return (< nav className="bg-black text-white pt-6  text-balance">
        <div className='p-4'>
            
                <li><Link href="/" className='mx-5 hover:bg-red-600 rounded-lg p-2'>Home</Link></li>
                <li><Link href="/About" className='mx-5 hover:bg-red-600 rounded-lg p-2'>About</Link></li>
                <li><Link href="/Contacts" className='mx-5 hover:bg-red-600 rounded-lg p-2'>Contacts</Link></li>
                <li><Link href="/Jobs" className='mx-5 hover:bg-red-600 rounded-lg p-2'>Jobs</Link></li>
            
        </div>
        </nav>
    )
};


export default Navbar;


