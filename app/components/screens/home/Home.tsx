import React, {FC} from 'react'
import Layout from '@/layout/Layout'
import {IProductsPage} from '@/../pages'
import {Loader} from "@/ui/loader/Loader";
import Row from "@/ui/grid/Row";
import Column from "@/ui/grid/Column";
import Image from "next/image";
import HotSale from "@/screens/home/hote-sale/HotSale";
import HomeInformation from "@/screens/home/home-information/HomeInformation";
import NewArrival from "@/screens/home/new-arrival/NewArrival";
import LatestNews from "@/screens/home/latest-news/LatesNews";

const Home: FC<IProductsPage> = ({products}) => {
    return (
        <Layout
            title='Home'
            description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
        >
            <Row className='bg-dark-primary'
                 style={{backgroundBlendMode: 'multiply',
                     backgroundImage: 'url(/images/texture.jpg)'}}>
                <Column size={7} isPadding={false}>
                    <Image src='/images/main-4x.png' alt='girl' width={833} height={727}/>
                </Column>
                <Column size={5} isPadding={false} isCenter={false} className='flex-col'>
                    <HotSale/>
                    <HomeInformation/>
                </Column>
                <Column size={7} isPadding={false} isCenter={false} className='flex-col bg-[#131313]'>
                    <NewArrival/>
                </Column>
                <Column size={5} isPadding={false} isCenter={false} className='flex-col bg-[#131313]'>
                    <LatestNews/>
                </Column>
            </Row>

            {/*<Loader/>*/}
        </Layout>
    )
}

export default Home
