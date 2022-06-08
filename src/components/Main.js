import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

const useStyles = makeStyles({
    root : {
        // 要素を分割してくれる
        display : 'grid',
        // 画面いっぱいに使ってくれる。「%」は親要素に対する割合。「vh」はビューポート（画面サイズ）に対する割合
        height : '100vh',
        gridTemplateRows: '1fr auto'
    }
})

const Main = ({name}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MessageList />
            <MessageInputField name={name}/>
        </div>
    )
}

export default Main;