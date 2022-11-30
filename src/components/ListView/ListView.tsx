import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    number: string,
    gender: string,
    photo: string,
    employeesActions: any
}

function ListView({ id, first_name, last_name, email, number, gender, photo, employeesActions }: Props) {

    const navigate = useNavigate();
    return (
        <><ListItem
            secondaryAction={<>
                <IconButton edge="end" aria-label="edit" onClick={() => navigate(`/edit/${id}`)}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => employeesActions.deleteEmployee(id)}>
                    <DeleteForeverIcon />
                </IconButton>
            </>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <CardMedia
                        component="img"
                        height={50}
                        image={photo}
                        alt="employee photo"
                    />
                </Avatar>
            </ListItemAvatar>
            <ListItem>
                <Typography>
                    {first_name} {last_name}
                </Typography>
            </ListItem>
            <ListItem>
                <Typography>
                    {email}
                </Typography>
            </ListItem>
            <ListItem>
                <Typography>
                    {number}
                </Typography>
            </ListItem>
            <ListItem>
                <Typography>
                    {gender.valueOf() === 'M' ? 'Male' : 'Female'}
                </Typography>
            </ListItem>
        </ListItem></>
    )
}

export default ListView;