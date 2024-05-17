import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardActions, IconButton, Grid, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleEdit = (index) => {
    // Handle the edit functionality
    console.log('Edit note at index:', index);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        Your Notes
      </Typography>
      <TextField
        label="Search by category"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        {filteredNotes.map((note, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minWidth: 275, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {note.title}
                </Typography>
                <Typography variant="h6" component="h2">
                  {note.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {note.details}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleEdit(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
