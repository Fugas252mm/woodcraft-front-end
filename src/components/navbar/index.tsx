import React from "react";

export type NavListItem = {
    label: string;
    path: string;
}

function NavBar(props: { navList: NavListItem[] }) {
    const { navList } = props;

    return (
        <nav className="menu">
            <ul className="menu__list">
                {
                    navList.map(item => (
                        <li className="menu__item">
                            <a href={item.path} className="menu__link">
                                {item.label}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}

export default NavBar;