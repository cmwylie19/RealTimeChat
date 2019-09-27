import React, { Fragment } from 'react'
import { Level, LevelItem } from '@patternfly/react-core';


const Message = ({type, body, primary}) => {
    const messageStyle = {
        container: {
            padding: '15px',
            margin: '15px'
        },
        received:{
            backgroundColor: 'grey',
            borderRadius: '15px',
            padding: '15px'
        },
        sent:{
            backgroundColor: primary,
            borderRadius: '15px',
            padding: '15px'
        }
    } 
   return  <Level style={messageStyle.container}>
       {type === "received" ?  <LevelItem style={messageStyle.received}>{body}</LevelItem> : <LevelItem></LevelItem>}
        <LevelItem ></LevelItem>
        {type === "sent" ?  <LevelItem style={messageStyle.sent}>{body}</LevelItem> : <LevelItem></LevelItem>}
    </Level>
}
export default Message;