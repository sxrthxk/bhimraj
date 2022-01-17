import React from 'react'
import Hero from './Hero'
import hero from '../assets/rooms/hero.jpg'
import FancyText from './FancyText'
import RoomCard from './RoomCard'

const RoomLayout = ({children}: {children: JSX.Element}) => {
    return (
        <div>
            <Hero src={hero} text="ROOMs"/>
            <section className='w-full py-32 bg-[#f5f5f5]'>
                <header>
                    <FancyText bgText='Awesonme' className='text-6xl'>
                        luxury room
                    </FancyText>
                </header>
                {children}
            </section>
        </div>
    )
}

export default RoomLayout
