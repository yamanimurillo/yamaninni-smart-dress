import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import './directory.styles.scss';

import MenuItem from '../../components/menu-item/menu-item.component';
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        linkUrl={linkUrl}
                    >
                    </MenuItem>
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);