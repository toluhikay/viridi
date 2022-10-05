import React, { Fragment } from 'react'
import Hero from './HeroComponent/hero'
import Why from './WhyUsSection/why'
import Quotation from './Quotation/quotation'
import Services from './Services/services'
import BusinessModel from './BusinessModel/businessModel'
import ClientFeedback from './clientfeedback/clientFeedBack'
import Gallery from './Gallery/gallery'
import Consultation from './Consultation/consultation'

const LandingPage = () => {
  return (
    <Fragment>
        <Hero/>
        <Why title="Why Choose Us"/>
        <Quotation/>
        <Services/>
        <BusinessModel/>
        <ClientFeedback/>
        <Gallery/>
        <Consultation/>
    </Fragment>
  )
}

export default LandingPage