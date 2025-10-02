import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Table,
} from "@mui/material";
import React from "react";

const Userstable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 3, borderRadius: 3, overflow: "hidden" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#1976d2" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ marginRight: 1 }}
                    onClick={() => selectedUser({ id: row.id, name: row.name })}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteUser({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No Records Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Userstable;
