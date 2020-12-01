import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import BackupIcon from '@material-ui/icons/Backup';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 120,
    width: 160,
  },
  containerIcon: {
    padding: 30,
    textAlign: 'center',
  },
  largeIcon: {
    width: 60,
    height: 60,
    color: 'gray',
  },
  subtitle: {
    marginTop: 10,
    textAlign: 'center',
    color: 'gray',
  }
}));


const LandingIconos = () => {
  const classes = useStyles();


  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          
            <Grid item>
              <Paper className={classes.paper} elevation={3}>
                <div className={classes.containerIcon}>
                  <BackupOutlinedIcon className={classes.largeIcon} />
                </div>
              </Paper>
              <Typography variant="subtitle1" className={classes.subtitle}>
                  Sube un Archivo
                </Typography>
            </Grid>

            <Grid item>
              <Paper className={classes.paper} elevation={3}>
                <div className={classes.containerIcon}>
                  <GetAppIcon className={classes.largeIcon} />
                </div>
              </Paper>
              <Typography variant="subtitle1" className={classes.subtitle}>
                  Descarga la <br /> Prueba de Firmado
                </Typography>
            </Grid>

            <Grid item>
              <Paper className={classes.paper} elevation={3}>
                <div className={classes.containerIcon}>
                  <AssignmentTurnedInIcon className={classes.largeIcon} />
                </div>
              </Paper>
              <Typography variant="subtitle1" className={classes.subtitle}>
                  Verifica las firmas
                </Typography>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingIconos;