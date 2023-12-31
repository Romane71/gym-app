import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    <div className="mt-16 basis-1/2 md:mt-0">
        <img alt='logo' src={Logo} />
        <p className='my-5'>
        </p>
        <p>  EVOGYM All Rights Reserved.</p>
  
     

    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>
        <p className='my-5'>401 Broadway E STE G, SEATTLE, WA 98102-5021, USA</p>
        <p>(333)425-6825</p>
    </div>
 </div>
    </footer>
  )
}

export default Footer