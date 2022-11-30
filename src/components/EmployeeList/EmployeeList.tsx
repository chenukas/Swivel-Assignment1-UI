import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import PaperView from "../PaperView/PaperView";
import ListView from "../ListView/ListView";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'

export interface Props {
    employees: any,
    employeesActions: any
}

function EmployeeList({ employees, employeesActions }: Props) {

    const [isListView, setIsListView] = useState(false);
    const navigate = useNavigate();

    const changeView = () => {
        const view = !isListView;
        setIsListView(view);
    }

    return (
        <><Box m={1} //margin
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end">
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label" style={{ background: '#9f2df7' }} onClick={() => navigate('/add')}>
                    Add Employee
                </Button>
                {
                    isListView ? <IconButton style={{ background: '#9f2df7' }} aria-label="module view" component="label" onClick={() => changeView()}>
                        <ViewModuleIcon style={{ color: '#ffffff' }} />
                    </IconButton> : <IconButton style={{ background: '#9f2df7' }} aria-label="list view" component="label" onClick={() => changeView()}>
                        <ViewListIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                }
            </Stack>
        </Box>
            {
                isListView ? <Box sx={{ flexGrow: 1, maxWidth: 1350 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                            <List>
                                <ListItem
                                    secondaryAction={<>
                                        <IconButton edge="end" aria-label="edit" disabled>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" disabled>
                                            <DeleteForeverIcon />
                                        </IconButton></>
                                    }
                                >
                                    <ListItemAvatar />
                                    <ListItem>
                                        <Typography fontWeight={'bold'}>
                                            Name
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontWeight={'bold'}>
                                            E-mail
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontWeight={'bold'}>
                                            Phone
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontWeight={'bold'}>
                                            Gender
                                        </Typography>
                                    </ListItem>
                                </ListItem>
                                {employees && employees.map((e: any) => (
                                    <ListView key={e._id} id={e._id} first_name={e.first_name} last_name={e.last_name} email={e.email} number={e.number} gender={e.gender} photo={e.photo} employeesActions={employeesActions} />
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Box> : <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 250,
                            height: 365,
                        },
                    }}
                >
                    {employees && employees.map((e: any) => (
                        <PaperView key={e._id} id={e._id} first_name={e.first_name} last_name={e.last_name} email={e.email} number={e.number} gender={e.gender} photo={e.photo} employeesActions={employeesActions} />
                    ))}
                </Box>
            }
        </>
    )
}

export default EmployeeList;