import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { nameValidation, emailValidation, phoneValidation } from '../../helpers/stringHelper';

export interface Props {
    employeesActions: any,
    employee: any
}

function EditEmployee({ employeesActions, employee }: Props) {

    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [isFirstNameError, setIsFirstNameError] = useState(false);
    const [lastName, setLastName] = useState('');
    const [isLastNameError, setIsLastNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const [phone, setPhone] = useState('');
    const [isPhoneError, setIsPhoneError] = useState(false);
    const [gender, setGender] = useState('M');
    const navigate = useNavigate();

    useEffect(() => {
        employeesActions.getEmployeeById(id)
    }, [])

    useEffect(() => {
        if (employee != null) {
            setFirstName(employee.first_name)
            setLastName(employee.last_name)
            setEmail(employee.email)
            setPhone(employee.number)
            setGender(employee.gender)
        }
    }, [employee])

    const handleChangeFirstName = (event: any) => {
        const validated = nameValidation(event.target.value)
        setFirstName(event.target.value)
        if (!validated) {
            setIsFirstNameError(true)
        } else {
            setIsFirstNameError(false)
        }
    }

    const handleChangeLastName = (event: any) => {
        const validated = nameValidation(event.target.value)
        setLastName(event.target.value)
        if (!validated) {
            setIsLastNameError(true)
        } else {
            setIsLastNameError(false)
        }
    }

    const handleChangeEmail = (event: any) => {
        const validated = emailValidation(event.target.value)
        setEmail(event.target.value)
        if (!validated) {
            setIsEmailError(true)
        } else {
            setIsEmailError(false)
        }
    }

    const handleChangePhone = (event: any) => {
        const validated = phoneValidation(event.target.value)
        setPhone(event.target.value)
        if (!validated) {
            setIsPhoneError(true)
        } else {
            setIsPhoneError(false)
        }
    }

    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };

    const onSubmit = () => {
        const employee = { "first_name": firstName, "last_name": lastName, "email": email, "number": phone, "gender": gender }
        employeesActions.updateEmployee(id, employee);
        navigate('/')
    }

    return (
        <>
            <Box m={1} //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" component="label" style={{ background: '#9f2df7' }} onClick={() => navigate('/')}>
                        List View
                    </Button>
                </Stack>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 500,
                    },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Paper elevation={3}>
                    <List>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                                <Typography fontWeight={'bold'}>
                                    First Name
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    helperText={firstName && isFirstNameError ? 'Only allow alphabets, min 6 character and max 10 characters' : ''}
                                    error={isFirstNameError}
                                    onChange={handleChangeFirstName}
                                    required={true}
                                    value={firstName}
                                />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                                <Typography fontWeight={'bold'}>
                                    Last Name
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    helperText={lastName && isLastNameError ? 'Only allow alphabets, min 6 character and max 10 characters' : ''}
                                    error={isLastNameError}
                                    onChange={handleChangeLastName}
                                    required={true}
                                    value={lastName}
                                />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                                <Typography fontWeight={'bold'}>
                                    Email
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    helperText={email && isEmailError ? 'Incorrect Email' : ''}
                                    error={isEmailError}
                                    onChange={handleChangeEmail}
                                    required={true}
                                    value={email}
                                />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                                <Typography fontWeight={'bold'}>
                                    Phone
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    fullWidth={true}
                                    helperText={phone && isPhoneError ? 'Incorrect Phone (Ex: +94760001111)' : ''}
                                    error={isPhoneError}
                                    onChange={handleChangePhone}
                                    required={true}
                                    value={phone}
                                />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                                <Typography fontWeight={'bold'}>
                                    Gender
                                </Typography>
                            </ListItem>
                            {<ListItem>
                                <FormControl variant="standard" fullWidth >
                                    <Select
                                        value={gender}
                                        onChange={handleChangeGender}
                                    >
                                        <MenuItem value={'M'}>&nbsp;&nbsp;Male</MenuItem>
                                        <MenuItem value={'F'}>&nbsp;&nbsp;Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>}
                        </ListItem>
                        <ListItem>
                            <ListItem sx={{ width: '50%' }}>
                            </ListItem>
                            <ListItem>
                                <Button variant="outlined" sx={{ marginLeft: '70%', borderColor: '#9f2df7', color: '#9f2df7' }} onClick={() => onSubmit()} disabled={!firstName ||
                                    !lastName ||
                                    !email ||
                                    !phone ||
                                    !gender ||
                                    isFirstNameError ||
                                    isLastNameError ||
                                    isEmailError ||
                                    isPhoneError}>
                                    Save
                                </Button>
                            </ListItem>
                        </ListItem>
                    </List>
                </Paper>
            </Box>

        </>
    )
}

export default EditEmployee;