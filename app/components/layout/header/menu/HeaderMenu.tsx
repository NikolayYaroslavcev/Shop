import React, {FC} from 'react'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import {menu} from './menu.data'
import Column from "@/ui/grid/Column";

const HeaderMenu: FC = () => {
    return (
        <Column size={5}>
            <div className={styles.menu}>
                <nav>
                    <ul>
                        {menu.map(item => (
                            <MenuItem key={item.link} item={item}/>
                        ))}
                    </ul>
                </nav>
            </div>
        </Column>
    )
}

export default HeaderMenu
