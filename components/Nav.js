import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Nav() {
  const { setPopup } = useContext(AppContext);
  
  return (
   <nav className='flex max-w- justify-between items-center py-10'>
       <Link href="/">
            <button className='text-lg font-medium'>DevTask</button>
       </Link>
       <ul className='flex items-center gap-10'>
           {false && (
             <Link href="/auth/signup" legacyBehavior>
                <a className='py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8'>Join Now</a>
           </Link>
           )}
           {true && (
             <div className='flex items-center gap-6'>
                <button onClick={() => setPopup({show: true, page: "Projects"})} className='font-medium bg-cyan-500 text-white py-2 px-4 rounded-md'>Add Project</button>
             </div>
           )}
       </ul>
   </nav>
  )
}

export default Nav