import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import { gravatarPath } from "../gravator";
import MessageField from "./MessageField";


const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px'
    },
})

const MessageInputField = ({name}) => {
    const [text, setText] = useState('');

    const classes = useStyles();
    const gravatar_path = gravatarPath(name)
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={gravatar_path} />
                </Grid>
                <Grid item xs={10}>
                    <MessageField name={name} text={text} setText={setText} />
                </Grid>
                <Grid item xs={1}>ボタン</Grid>
            </Grid>
        </div>
    );
};

export default MessageInputField;