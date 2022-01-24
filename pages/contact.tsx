import React from 'react'
import Hero from '../lib/components/Hero'
import Layout from '../lib/components/Layout'
import hero from '../lib/assets/contact/hero.jpg'
import FancyText from '../lib/components/FancyText'
import Image from 'next/image'

import goibibo from '../lib/assets/contact/goibibo.png'
import booking from '../lib/assets/contact/booking.png'

const contact = () => {
    return (
        <Layout>
            <Hero src={hero} text='contact us' />
            <section className='w-full py-24'>
                <FancyText bgText='Connect' className='text-6xl'>
                    Get In Touch
                </FancyText>
                <div className="flex justify-evenly items-center py-24">
                    <div className='w-1/6'>
                    <Image src={goibibo} objectFit='cover' alt="GoIbibo Logo"/>
                    </div>
                    <div className='w-1/6'>
                    <Image src={booking} objectFit='cover' alt="Booking Logo"/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default contact
