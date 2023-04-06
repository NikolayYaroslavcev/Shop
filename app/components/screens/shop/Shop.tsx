import React from 'react';
import Layout from "@/layout/Layout";
import Row from "@/ui/grid/Row";
import Column from "@/ui/grid/Column";
import Image from "next/image";


const Shop = () => {
    return (
        <Layout
            title='Shop'
            description='Catalog clothing and accessories'
        >
            <Row className='bg-dark-primary'
                 style={{
                     backgroundBlendMode: 'multiply',
                     backgroundImage: 'url(/images/texture.jpg)'
                 }}
            >
                {/*{products.map(product => (*/}
                {/*    <Column size={3} key={product.id}>*/}
                {/*        <div className='text-white'>*/}
                {/*            <Image src={product.image[0]} alt={product.name} width={220} height={220}/>*/}
                {/*            <h2>{product.name}</h2>*/}
                {/*            <div className=''>{product.price}</div>*/}
                {/*            <button>ADd to cart</button>*/}
                {/*        </div>*/}
                {/*    </Column>*/}
                {/*))}*/}

            </Row>

        </Layout>
    );
};

export default Shop;