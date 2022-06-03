import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import { blue } from '@material-ui/core/colors';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: blue[100],
    color: theme.palette.primary.main
  },
  actions: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  primaryAction: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
    }
  }
}));

export default function Form({setName}) {
  const classes                  = useStyles();
  // ボタン活性管理
  const [disabled, setDisabled]  = useState(true);
  // 入力フォーム文字
  const [string, setString]      = useState('');
  // 編集中フラグ
  const [isComposed, setIsComposed]  = useState(false);

  // フォーム 入力時
  useEffect(
    () => {
      // 空文字でない場合のみ、ボタンを非活性にする
      const disabled = string ==='';
      setDisabled(disabled);
    },
    [string]
  );

  const content = {
    'header': 'ようこそ',
    'primary-action': 'はじめる',
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box py={16}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" mt={3}>
                <Box mx="auto">
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <AssignmentIndIcon />
                  </Avatar>
                </Box>
              </Box>
              <Box mt={2} px={4}>
                <Typography variant="h5" component="h3" align="center" gutterBottom={true}>{content['header']}</Typography>
                <Box my={3}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required fullWidth
                          size="small"
                          name="name"
                          label="ニックネーム"
                          onChange = {(e) => setString(e.target.value)}
                          onKeyDown = {(e) => {
                            if(e.key === "Enter"){
                              // 編集中の場合は処理中断
                              if(isComposed) return;
                              setName(string);
                              // ページのリロードを止める
                              e.preventDefault();
                            }
                          }}
                          // 日本語入力スタート
                          onCompositionStart={() => {
                            // 編集中
                            setIsComposed(true);
                          }}
                          // 日本語入力終了
                          onCompositionEnd={() => {
                            // 編集終了
                            setIsComposed(false);
                          }}
                          />
                      </Grid>
                      <Grid item xs={12}>
                        <Box alignItems="center" justifyContent="space-between" className={classes.actions}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.primaryAction}
                            disabled={disabled}
                            onClick={() => {
                              setName(string);
                            }}
                          >
                            {content['primary-action']}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}