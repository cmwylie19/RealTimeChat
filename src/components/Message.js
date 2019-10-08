import React from 'react'
import { Level, LevelItem } from '@patternfly/react-core';


const Message = ({ timestamp,type, body, primary }) => {
    const messageStyle = {
        container: {
            padding: '15px',
            margin: '15px',
          
        },
        received: {
            backgroundColor: 'grey',
            borderRadius: '15px',
            padding: '15px'
        },
        sent: {
            backgroundColor: primary,
            borderRadius: '15px',
            padding: '15px'
        },
        bubble:{
            display:'flex',
            alignItems:'center'
        },

        timestamp: {
            fontSize: '.3em'
        }
    }
    return (
        <Level style={messageStyle.container}>

            {/* 
            Message Container:

            If message is of designated type, return message with formatting for that type.
            If message is not of that type, leave space as a place holder.
            
            This gives separation between sent and received messages.
            
            */}

            {
                type === "received" ?
                    <LevelItem style={messageStyle.bubble,messageStyle.received}>{body}<br /><span style={messageStyle.timestamp}>{timestamp}</span></LevelItem> :
                    <LevelItem></LevelItem>
            }

            {/* Empty middle cell for spacing */}
            <LevelItem ></LevelItem>

            {/* Messages of type sent */}
            {
                type === "sent" ?
                    <LevelItem style={messageStyle.bubble,messageStyle.sent}>{body}<br /><span style={messageStyle.timestamp}>{timestamp}</span></LevelItem> :
                    <LevelItem></LevelItem>
            }
        </Level>
    )
}
export default Message;