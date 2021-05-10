import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  textArea: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  datePicker: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function getSteps() {
  return ["Order description", "Address information", "Overwiew and create"];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                General information
              </Typography>

              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <TextField
                    className={classes.textArea}
                    id="description"
                    label="Order description"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="startTime"
                    label="Start time"
                    type="datetime-local"
                    className={classes.datePicker}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="endTime"
                    label="End time"
                    type="datetime-local"
                    className={classes.datePicker}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      case 1:
        return (
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                Address information
              </Typography>

              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <TextField
                    id="primaryAddress"
                    label="Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="houseNumber"
                    label="House number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    id="secondaryAddress"
                    label="Secondary address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="postalCode"
                    label="Postal Code"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textPrimary">
                  General information
                </Typography>

                <Grid container spacing={3}>
                  <Grid item sm={12}>
                    <TextField
                      className={classes.textArea}
                      id="description"
                      label="Order description"
                      multiline
                      rows={6}
                      variant="outlined"
                      defaultValue="Some description"
                      InputProps={{
                        readOnly: true
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="startTime"
                      label="Start time"
                      type="datetime-local"
                      className={classes.datePicker}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      defaultValue="2020-08-06T10:30"
                      InputProps={{
                        readOnly: true
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="endTime"
                      label="End time"
                      type="datetime-local"
                      className={classes.datePicker}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      defaultValue="2020-08-06T14:30"
                      InputProps={{
                        readOnly: true
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textPrimary">
                  Address information
                </Typography>

                <Grid container spacing={3}>
                  <Grid item sm={6}>
                    <TextField
                      id="primaryAddress"
                      label="Address"
                      defaultValue="Toldstrupsgade"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="houseNumber"
                      label="House number"
                      defaultValue="14"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      id="secondaryAddress"
                      label="Secondary address"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="postalCode"
                      label="Postal Code"
                      defaultValue="9000"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="city"
                      label="City"
                      defaultValue="Aalborg"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      id="country"
                      label="Country"
                      defaultValue="Denmark"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
