import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({inputEl, name, text, setText}) => {

    return (
        <IconButton
            disabled={text === ''}
            onClick={() => {
                pushMessage({name, text});
                inputEl.current.focus();
                // テキストフィールドをクリア
                setText('');
            }}
        >
            <SendIcon>送信</SendIcon>
        </IconButton>
    )
}

export default MessageSubmitButton;