import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";

const MessageField = ({name, text, setText}) => {
    const [isComposed, setIsComposed] = useState(false);

    return <TextField
        fullWidth={true}
        onChange={(e) => {setText(e.target.value)}}
        onKeyDown = {(e) => {
            // 編集中の場合は処理中断
            if(isComposed) return;
            if(e.target.value == '') return;
            if(e.key === "Enter"){
                console.log('push messsage to firebase');
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