import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-svh flex justify-center items-center">
      <img className="h-2/4" src="/assets/404.png" alt="404 Image" />
    </div>
  )
}

