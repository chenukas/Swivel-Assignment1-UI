import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
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

function PaperView({ id, first_name, last_name, email, number, gender, photo, employeesActions }: Props) {

  const navigate = useNavigate();
  return (
    <><Paper elevation={3}><Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="200"
        image={photo}
        alt="employee photo"
      />
      <CardContent>
        <Typography variant="body2" align='left'>
          {first_name} {last_name}
        </Typography>
        <Typography variant="body2" align='left'>
          {email}
        </Typography>
        <Typography variant="body2" align='left'>
          {number}
        </Typography>
        <Typography variant="body2" align='left'>
          {gender.valueOf() === 'M' ? 'Male' : 'Female'}
        </Typography>
      </CardContent>
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end">
        <Stack direction="row" spacing={1}>
          <IconButton style={{ background: '#9e0514' }} aria-label="delete" component="label" onClick={() => employeesActions.deleteEmployee(id)}>
            <DeleteForeverIcon style={{ color: '#ffffff' }} />
          </IconButton>
          <IconButton style={{ background: '#05a354' }} aria-label="update" component="label" onClick={() => navigate(`/edit/${id}`)}>
            <EditIcon style={{ color: '#ffffff' }} />
          </IconButton>
        </Stack>
      </Box>
    </Card></Paper></>
  )
}

export default PaperView;