import {useState} from 'react';
import {Code, Group, Text} from '@mantine/core';
import {IconRobot} from '@tabler/icons-react';

import classes from '../css/NavbarSimple.module.css';
import {Link} from "react-router-dom";

const data = [
    {link: '/', label: 'Agent', icon: IconRobot},

];

export default function NavbarSimple() {
    const [active, setActive] = useState('Agent');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5}/>
            <span><Text fw={900}>{item.label}</Text></span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <Code fw={700}>v3.1.2</Code>
                </Group>
                {links}
            </div>
        </nav>
    );
}