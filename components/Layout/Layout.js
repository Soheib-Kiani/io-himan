

import Header from '../Header'
import Footer from '../Footer/index'
const Layout = ({children}) => {
    return (
        <div>
            <div className=' min h-screen flex flex-col'>
                <Header/>
                <main className='flex-grow' > {children}</main>
                <Footer />
               


            </div>
        </div>
    );
}

export default Layout;