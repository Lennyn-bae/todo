import React from 'react';
import { Switch, Menu, MenuItem } from '@mui/material';

interface Settings {
    anchorEl: any;
    open: any;
    handleClose: any;
    isVisible: boolean;
    setVisibility: any;
}

const Settings: React.FC<Settings> = ({ anchorEl, open, handleClose, isVisible, setVisibility }) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>
                <div>
                    <p>Here you can turn off the news feed</p>
                    <span>Off</span>
                    <Switch
                        checked={isVisible}
                        onChange={() => setVisibility(!isVisible)}
                    />
                    <span>On</span>
                </div>

            </MenuItem>
        </Menu>
    )


}

export default Settings;