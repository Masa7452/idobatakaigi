import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { pushMessage } from "../firebase";

const MessageField = ({name, text, setText}) => {
    const [isComposed, setIsComposed] = useState(false);

    return <TextField
        fullWidth={true}
        onChange={(e) => {setText(e.target.value)}}
        onKeyDown = {(e) => {
            // 編集中の場合は処理中断
            if(isComposed) return;

            const text = e.target.value;
            if(text === '') return;
            if(e.key === "Enter"){
                pushMessage({name, text})
                // テキストフィールドをクリア
                setText('');
                // ページのリロードを止める
                e.preventDefault();
            }
        }}
        // 日本語入力スタート
        onCompositionStart={() => {setIsComposed(true);}}
        // 日本語入力終了
        onCompositionEnd={() => {setIsComposed(false);}}
        value={text}
    />
}

export default MessageField;