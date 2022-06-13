import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
    },
})

const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessage] = useState('');

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(3)
        .on('value', (snapshot) => {
            const message = snapshot.val();
            if (message === null) return;
            const entries = Object.entries(snapshot.val())
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry;
                return {key, ...nameAndText};
            });
            setMessage(newMessages);
        });
    }, [])

    return <div className={classes.root}>MessageList</div>
}

export default MessageList;