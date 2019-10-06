
import React, { Fragment } from 'react'
import { Button, Avatar } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons'
import './upload.css'

export default function Upload(props) {
    const {toggleEdit, edit, setAvatar, avatar } = props;
    return (
        <Fragment>
            <div className="upload-btn-wrapper">
                {!edit && <Avatar src={avatar} alt="Avatar image" />}
                {edit && 
                <Fragment>
                <Button variant="link" icon={<PlusCircleIcon />}>Upload </Button>
                <input type="file" onChange={event => toggleEdit(setAvatar(URL.createObjectURL(event.target.files[0])))} />
                </Fragment>}
            </div>
        </Fragment>
    )
}
