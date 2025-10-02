import { Button, Grid, Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const UsersForms = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 4,
        borderRadius: 3,
        boxShadow: 3,
        marginBottom: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          {isEdit ? "Update User" : "Add New User"}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="ID"
          type="number"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            isEdit ? updateUser({ id, name }) : addUser({ id, name })
          }
          sx={{
            mt: 2,
            py: 1.5,
            px: 4,
            fontWeight: "bold",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          {isEdit ? "Update User" : "Add User"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UsersForms;
