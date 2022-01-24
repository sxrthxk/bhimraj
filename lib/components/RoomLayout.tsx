import React from 'react'
import Hero from './Hero'
import hero from '../assets/rooms/hero.jpg'
import FancyText from './FancyText'
import RoomCard from './RoomCard'

const RoomLayout = ({children, name, bg}: {children: JSX.Element; name: string; bg: StaticImageData}) => {
    return (
        <div>
            <Hero src={bg} text={name} darken/>
            <section className='w-full py-32 bg-[#f5f5f5]'>
                <header>
                    <FancyText bgText='Awesonme' className='text-6xl'>
                        {name + ' room'}
                    </FancyText>
                </header>
                {children}
            </section>
        </div>
    )
}

export default RoomLayout
