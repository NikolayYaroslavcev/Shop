import React, {FC} from 'react'
import styles from './Header.module.scss'
import HeaderMenu from "@/layout/header/menu/HeaderMenu";
import HeaderLogo from "@/layout/header/logo/Header-logo";
import HeaderButtons from "@/layout/header/buttons/Header-buttons";
import HeaderProfile from "@/layout/header/profile/header-profile";
import Row from "@/ui/grid/Row";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Row>
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderButtons/>
                <HeaderProfile/>
            </Row>
        </header>
    )
}

export default Header
