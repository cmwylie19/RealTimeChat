
import React, { useState } from 'react'
import { Button } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons'
import './upload.css'

export default function Upload(props) {
    return (
        <React.Fragment>
            <div className="upload-btn-wrapper">
                <Button variant="link" icon={<PlusCircleIcon />}>Upload </Button>
                <input
                    type="file"
                    onChange={event =>
                        props.setAvatar(
                            URL.createObjectURL(event.target.files[0])
                        )
                    } />
            </div>
        </React.Fragment>
    )
}
