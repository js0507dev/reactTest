import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';

export default function MenuIcon(props) {
    const {knd} = props;
    
    function renderIcon(knd) {
        switch(knd) {
            case 'star':
                return <StarIcon />;
            case 'book':
                return <BookIcon />;
            default:
                return null;
        }
    }
    
    return renderIcon(knd);
}