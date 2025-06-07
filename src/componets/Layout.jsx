import { Link } from 'react-router-dom'

export default function Layout({ children }) {
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900'>
            <header className='bg-white shadow mb-6'>
                <div className='max-w-4xl mx-auto px-4 py-4 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>
                        <Link to={'/'}>
                            DevCatalog
                        </Link>
                    </h1>
                    <nav className='space-x-4'>
                        <Link to={'/'} className='text-blue-600 hover:underline'>
                            Dashboard
                        </Link>
                        <Link to={'/novo'} className='text-blue-600 hover:underline'>
                            Nova Entrada
                        </Link>
                        <Link to={'/login'} className='text-blue-600 hover:underline'>
                            Login
                        </Link>
                    </nav>
                </div>
            </header>

            <main className='max-w-4xl mx-auto px-4'>{children}</main>
        </div>
    )
}