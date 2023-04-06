import React from 'react';
import Row from "@/ui/grid/Row";
import Column from "@/ui/grid/Column";
import SquareButton from "@/ui/square-button/SquareButton";
import {FiShoppingCart} from "react-icons/fi";

const NewArrival = () => {
    return (
        <Row isBorder={false}>
            <Column size={12} className='flex' isBorder={false}>
                <Column size={7} className=' text-white py-16 px-8 grid' isBorder={false} isPadding={false}>
                    <div className='text-sm uppercase opacity-50'>NEW ARRIVAL</div>
                    <h2 className='font-normal text-3xl w-[23rem]  uppercase'>NEW LORIAN EVENING DRESS DESIGN</h2>
                    <div className='text-white/60 text-sm w-[23rem] '>We are discovering a new fashion style, buy from the Lorian
                        Store and become one of us
                    </div>
                </Column>
                <Column size={4} className='py-16 px-8' isBorder={false}>
                    <img src={'/images/arrival.jpg'} alt="arrival"/>
                </Column>
                <Column size={1} className='py-16 px-8 items-start' isBorder={false}>
                    <SquareButton Icon={FiShoppingCart} onClick={() => {
                    }}/>
                </Column>
            </Column>
        </Row>
    );
};

export default NewArrival;