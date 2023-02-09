import React, {useState} from 'react';
import { IconButton } from '@mui/material';
import iconSettings from '../../../public/Vector.svg';
import Image from 'next/image';
import Settings from '../Settings/Settings';
import styles from './Header.module.css';

interface Header {
    isVisible: boolean;
    setVisibility: any;
}

const Header: React.FC<Header> = ({ isVisible, setVisibility }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={styles.header}>
            <h1>To Do</h1>
            <IconButton id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <Image src={iconSettings} alt="settings" />
            </IconButton>
            <Settings
                anchorEl={anchorEl}
                open={open}
                isVisible={isVisible}
                handleClose={handleClose}
                setVisibility={setVisibility}
            />
        </div>

    )


}

export default Header;