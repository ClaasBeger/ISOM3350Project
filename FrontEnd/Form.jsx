import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { useState } from "react";

/*
For the Inputs Form GUI Praj imported a couple of libraries for objects and object placements in the
form.

e.g. { useState } allows me to use plain JS objects, that represent info of an objects current situation,
in functions. Also, { useHistory } is another hook that allows me to access the history instance
"memory" by using React router.
*/


export default function InputAdornments() {

  const history = useHistory();
  const [values, setValues] = React.useState({
    image: '/img/rectangle-2@2x.png',
    country: '',
    id: '',
    idd: '',
    can: '',
    name: '',
    dob: '',
    gender: '',
    birth: '',
  });

  /*
  All of the variables here are dynamic, which mean they get updated with every string inputted
  by the user for each object.
  */

  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value });
    
  };

  const [image1, setImage] = useState();

  const uploadImage = (selectorFiles) => {
    if (selectorFiles) {
      console.log(selectorFiles[0])
      setImage(selectorFiles[0]);
    }
  };

  const handleSubmit = (e) => {
    values.image = image1
    history.push({ pathname: '/id-card', state: {...values}});

  };

  

  return (
    <Box sx={{width: 600, alignItems: 'center'}}>
        <TextField
          name="country"
          label="Country"
          sx={{ m: 1}}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      
        <TextField
          name="id"
          label="ID"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="idd"
          label="IDD"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="can"
          label="CAN"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="name"
          label="NAME"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="dob"
          label="DATE OF BIRTH"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="gender"
          label="GENDER"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="birth"
          label="PLACE OF BIRTH"
          id="filled-start-adornment"
          sx={{ m: 1 }}
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <Grid>
          {image1 && (
              <img src={URL.createObjectURL(image1)} />
          )}
            <>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" onChange={(e) => uploadImage(e.target.files)} />
              </Form.Group>
            </>
          </Grid>
        <Stack direction="row">
          <Button variant="contained" color="success" sx={{m: 1, width: 200, height: 50}} onClick={handleSubmit}>
            Create ID
          </Button>
          <Button variant="contained" color="error" sx={{m: 1, width: 200, height: 50}}>
            Cancel
          </Button>
        </Stack>
      </Box>
  );
}

