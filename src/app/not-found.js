import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="bg-not-found bg-cover bg-center flex items-center justify-center h-screen font-manrope">
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-custom-marrom1 text-9xl font-bold">
          404
        </p>
        <p className="text-5xl font-semibold ">Oops!</p>
        <p className="text-2xl">The page you are looking for doesn’t exist</p>
        <Link className='text-custom-azul1' href="/">Go back to Home</Link>
      </div>
    </main>
  );
}
