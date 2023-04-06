import React from 'react';
import Row from "@/ui/grid/Row";
import Column from "@/ui/grid/Column";
import SquareButton from "@/ui/square-button/SquareButton";
import {FiArrowRight} from "react-icons/fi";

const LatestNews = () => {
    return (
        <Row className='h-full' isBorder={false}>
            <Column size={12} className='flex'  isBorder={false}>
                <Column size={10} className=' text-white py-16 px-8 grid' isBorder={false} isPadding={false}>
                    <div className='text-sm uppercase opacity-50'>LATEST NEWS</div>
                    <h2 className='font-normal text-3xl w-[23rem]  uppercase'>OUR NEW DRESS COLLECTION</h2>
                    <div className='text-white/60 text-sm w-[23rem] '>Conquer city tops in comfort with lorian drees collection
                    </div>
                </Column>
                <Column size={2} className='py-16 px-8 items-start' isBorder={false}>
                    <SquareButton Icon={FiArrowRight} onClick={() => {
                    }}/>
                </Column>
            </Column>
        </Row>
    );
};

export default LatestNews;