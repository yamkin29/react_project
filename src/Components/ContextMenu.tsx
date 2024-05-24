import * as React from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import '../Styles/ContextMenu.css';

interface MenuElementProps {
    mainMenuItem: string;
    subMenuItems: string[];
}

interface MenuItemComponentProps {
    subMenuItems: string[];
    handleClose: () => void;
}

export default function ContextMenu() {
    return (
        <div className="menu-group">
            <MenuElement
                mainMenuItem="Файл"
                subMenuItems={['Сменить пользователя', 'Выход из системы']}
            />
            <MenuElement
                mainMenuItem="Инструменты"
                subMenuItems={['Поршневой компрессор']}
            />
            <MenuElement
                mainMenuItem="Настройки"
                subMenuItems={['Поршневой компрессор']}
            />
            <MenuElement
                mainMenuItem="Вид"
                subMenuItems={['Показать дерево конфигурации', 'Показать панель событий']}
            />
            <MenuElement
                mainMenuItem="Помощь"
                subMenuItems={['Руководство пользователя', 'О программе', 'Собрать логи']}
            />
        </div>
    );
}

function MenuElement({mainMenuItem, subMenuItems}: MenuElementProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="context-menu">
            <Button
                className="menu-button"
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {mainMenuItem}
            </Button>
            <Menu
                className="menu"
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItemComponent
                    subMenuItems={subMenuItems}
                    handleClose={handleClose}
                />
            </Menu>
        </div>
    );
}

function MenuItemComponent({subMenuItems, handleClose}: MenuItemComponentProps) {
    return (
        <div className="menu-item">
            {subMenuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
            ))}
        </div>
    )
}
