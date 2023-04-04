import React from 'react';
import Row from "@/ui/grid/Row";
import Column from "@/ui/grid/Column";

const NewArrival = () => {
    return (
        <Row isBorder={false}>
            <Column size={12} className='flex' isBorder={false}>
                <Column size={7} className='uppercase text-white py-16 px-8 grid'>
                    <div className='text-sm'>NEW ARRIVAL</div>
                    <div className='text-white/60 text-sm'>NEW LORIAN EVENING DRESS DESIGN</div>
                    <div className='text-white/60 text-sm'>we are discovering a new fashion style, buy from the Lorian
                        Store and become one of us
                    </div>
                </Column>
                <Column size={4} className='py-16 px-8' isBorder={false}>
                    <img src={'/images/arrival.jpg'} alt="arrival"/>
                </Column>
                <Column size={1} className='py-16 px-8' isBorder={false}>

                </Column>
            </Column>

        </Row>
    );
};

export default NewArrival;