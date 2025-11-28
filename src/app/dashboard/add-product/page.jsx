'use client'
import React, { useContext } from 'react'
import AddProduct from '../component/ProductForm'
import { AuthContext } from '../component/Provider/AuthContext/AuthContext'
import { redirect } from 'next/navigation'

export default function AddProducts() {
   const {user} = useContext(AuthContext)
   if(!user){
    redirect('/dashboard/login')
   }
  return (
    <AddProduct></AddProduct>
  )
}
