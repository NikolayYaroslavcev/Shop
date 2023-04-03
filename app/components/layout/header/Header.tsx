import React, {FC} from 'react'

import styles from './Header.module.scss'
import HeaderMenu from "@/layout/header/menu/Menu";
import HeaderLogo from "@/layout/header/logo/Header-logo";
import HeaderButtons from "@/layout/header/buttons/Header-buttons";
import HeaderProfile from "@/layout/header/profile/header-profile";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo/>
            <HeaderMenu/>
            <HeaderButtons/>
            <HeaderProfile/>
        </header>
    )
}

export default Header
