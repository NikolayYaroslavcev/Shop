import React from 'react';
import Column from "@/ui/grid/Column";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
    return <Column size={2}>
        <Link href='/' className='flex items-center '>
            <Image
                src='/images/logo.svg'
                width={70}
                height={70}
                alt='Lorean SHOP'
                className='mr-3'
            />
            <span>
        <span className='tracking-[0.13em] text-white block font-light'>LORIAN</span>
        <span className='tracking-[0.4em] text-sm text-dark-gray block font-extralight'>STORE</span>
        </span>
        </Link>
    </Column>
};

export default HeaderLogo;