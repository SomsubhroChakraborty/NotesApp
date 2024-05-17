import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details && category) {
      const newNote = { title, details, category };
      let notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(newNote);
      localStorage.setItem('notes', JSON.stringify(notes));
      console.log('Note saved:', newNote);
      setTitle("");
      setDetails("");
      setCategory("");
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="secondary" component="h2" gutterBottom>
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={{ mt: 2, mb: 2 }}
          label="Note title..."
          color="secondary"
          fullWidth
          margin="normal"
          variant="outlined"
          error={titleError}
          helperText={titleError ? "Title is required" : ""}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          sx={{ mt: 2, mb: 2 }}
          label="Description..."
          color="secondary"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          error={detailsError}
          helperText={detailsError ? "Description is required" : ""}
        />
        <FormControl component="fieldset" sx={{ mt: 2, mb: 2, display: "block" }}>
          <FormLabel component="legend">Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="works" control={<Radio />} label="Works" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>

   
      
    </Container>
  );
}

export default Create;
