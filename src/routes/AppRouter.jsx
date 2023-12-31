import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Contacts from '../pages/Contacts'
import Promo from '../pages/Promo'
import OfferPage from '../pages/OfferPage'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import AccountRouter from './AccountRouter'
import Registration from '../pages/Registration'
import Category from '../pages/Category'
import SearchResults from '../pages/SearchResults'
import OrderAccepted from '../pages/OrderAccepted'
import Articles from '../pages/Articles'
import Drafts from '../pages/Drafts'
import ArticlePage from '../pages/ArticlePage'
import Service from '../pages/Service'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="catalog" element={<Catalog/>} />
      <Route path="catalog/category" element={<Category/>} />
      <Route path="catalog/category/product" element={<Product/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="checkout/accepted" element={<OrderAccepted/>} />
      <Route path="promo" element={<Promo/>} />
      <Route path="promo/:id" element={<OfferPage/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="drafts" element={<Drafts/>} />
      <Route path="articles" element={<Articles/>} />
      <Route path="articles/:id" element={<ArticlePage/>} />
      <Route path="service" element={<Service/>} />
      <Route path="*" element={<NotFound />} />
      <Route path="account/*" element={<AccountRouter/>} />
      <Route path="login" element={<Registration/>} />
      <Route path="search" element={<SearchResults/>} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;