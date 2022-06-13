import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from '@material-ui/core';
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%'
    },
})

const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(15)
        .on('value', (snapshot) => {
            const message = snapshot.val();
            if (message === null) return;
            const entries = Object.entries(message)
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry;
                return {key, ...nameAndText};
            });
            setMessage(newMessages);
        });
    }, [])

    return (<List className={classes.root}>
            {
                messages.map(({key, name, text}) => {
                    return <MessageItem key={key} name={name} text={text}>{text}</MessageItem>
                })
            }
        </List>
    )
    
}

export default MessageList;