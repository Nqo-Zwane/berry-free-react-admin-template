import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    Alert
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';


// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';






const AuthTwoFactor = ({ ...others }) => {

    const location = useLocation();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');


    useEffect(() => {
        if (location.state && location.state.loginSuccess === true) {
            setLoginSuccess(true);
            setTimeout(() => setLoginSuccess(false), 5000); // Hide after 5 seconds (adjust duration as needed)
        } else if (location.state && location.state.loginSuccess === false) {
            setLoginError('Login unsuccessful. Please try again.');
        }
    }, [location.state]);



    const navigate = useNavigate();
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const googleHandler = async () => {
        console.error('Register');
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                {/* <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign up with Google
                        </Button>
                    </AnimateButton>
                </Grid> */}
                {/* <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid> */}
                {/* <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid> */}
            </Grid>

            <Formik


                initialValues={{
                    twoFactorCode: ' '
                }}
                validationSchema={Yup.object().shape({
                    twoFactorCode: Yup.string().required('Two-Factor Code is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const jwtToken = localStorage.getItem("token");
                        console.log(jwtToken);

                        const response = await axios.post('http://localhost:5000/api/users/verify-2fa', {
                            TwoFactorCode: values.twoFactorCode,
                        }, {
                            headers: {
                                Authorization: `Bearer ${jwtToken}` // Include the JWT token in the headers
                            }
                        });

                        if (response.status === 200) {

                            navigate("/");

                        }
                    } catch (error) {
                        if (error.response.data.errors) {

                            console.log(error);
                            const errorMessages = Object.values(error.response.data.errors).flat();
                            setLoginError(errorMessages.join(' '));
                            setTimeout(() => setLoginError(null), 5000);
                            console.log(loginError);
                        }
                        else {

                            setLoginError(error.response.data);
                            setTimeout(() => setLoginError(error.response.data), 5000);
                        }

                    } finally {
                        setSubmitting(false);
                    }
                }}
            >


                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        {loginSuccess && (
                            <Box mt={2}>
                                <Alert severity="success">Login successful!</Alert>
                            </Box>
                        )}
                        {loginError && (
                            <Box mt={2}>
                                <Alert severity="error">{String(loginError)}</Alert>
                            </Box>
                        )}

                        <FormControl fullWidth error={Boolean(touched.twoFactorCode && errors.twoFactorCode)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-twoFactorCode">Please enter two-factor code</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-twoFactorCode"
                                type="text"
                                value={values.twoFactorCode}
                                name="twoFactorCode"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.twoFactorCode && errors.twoFactorCode && (
                                <FormHelperText error id="standard-weight-helper-text--twoFactorCode">
                                    {errors.twoFactorCode}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>

                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthTwoFactor;