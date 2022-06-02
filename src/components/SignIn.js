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
  const classes = useStyles();
  const [ disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');

  useEffect(
    () => {
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
                          />
                      </Grid>
                      <Grid item xs={12}>
                        <Box alignItems="center" justifyContent="space-between" className={classes.actions}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.primaryAction}
                            disabled={disabled}
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