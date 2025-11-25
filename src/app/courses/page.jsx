import Link from 'next/link'
import React from 'react'

export default async function allCourses() {
 const courses = getallpo()
  return (
    <div>
        allCourses
        
        <ul className='flex gap-2'>
            <Link href={'/courses/1'}>1</Link>
            <Link href={'/courses/2'}>2</Link>
            <Link href={'/courses/3'}>3</Link>
        </ul>

    </div>
  )
}
