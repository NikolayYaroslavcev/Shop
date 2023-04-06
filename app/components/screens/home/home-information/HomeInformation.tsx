import React from 'react';
import Column from "@/ui/grid/Column";
import Row from "@/ui/grid/Row";

const HomeInformation = () => {
    return (
        <Row>
            <Column size={3} className='flex-col  py-14'>
                <div className='font-normal text-4xl text-white'>100K</div>
                <div className='text-white/60 text-sm'>Customers</div>
            </Column>
            <Column isBorder={false} size={9} className='flex-col'>
                <div className='p-10'>
                    <div className='font-normal text-white mb-2'>New collection</div>
                    <div className='text-white/60 text-sm'>The red dress inspired by a love of fashion and a fear of
                        complacence. Our challenge was to create a dress
                    </div>
                </div>
            </Column>
        </Row>
    );
};

export default HomeInformation;