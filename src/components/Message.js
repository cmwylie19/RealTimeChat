import React, { Fragment } from 'react'
import { Level, LevelItem } from '@patternfly/react-core';

const messageStyle = {
    container: {
        padding: '15px',
        margin: '15px'
    },
    received:{
        backgroundColor: 'grey',
        borderRadius: '15px'
    },
    sent:{
        backgroundColor: 'lightBlue',
        borderRadius: '15px'
    }
} 
const Message = props => (
    <Level style={messageStyle.container}>
        <LevelItem style={messageStyle.received}>Level Item</LevelItem>
        <LevelItem >Level Item</LevelItem>
        <LevelItem style={messageStyle.sent}>lalalalala Level Item</LevelItem>
    </Level>
)
export default Message;