import React from 'react'
import Categories from '../../components/Categories/Categories'
import Products from '../../Products/Products'
import Hero from '../../ui/hero'
import Dividerimg from '../../ui/Dividerimg'

export default function Home() {
  return (
  <>
  <Hero/>
  <Products />
  <Dividerimg/>
  <Categories />
  </>
  ) 
}
