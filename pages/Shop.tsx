import React from 'react';
import Shop from "@/screens/shop/Shop";
import {GetStaticProps} from "next";
import {IProductsPage} from "./index";
import {ProductService} from "@/services/ProductService";

const ShopPage = () => {
    return (
        <div>
            <Shop/>
        </div>
    );
};


export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
    const products = await ProductService.getProducts()

    return {
        props: {
            products
        }
    }
}


export default ShopPage;