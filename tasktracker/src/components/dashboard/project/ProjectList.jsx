import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  


  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/project/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.success) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/project/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchProjects(); 
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };


  const navigate = useNavigate();
  const updateUser = (user) => {
    navigate('/admin-dashboard/add-project', { state: { user } });
  };


  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Projects</h3>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by Project ID"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Link to="/admin-dashboard/add-project" state={{ mode: 'create' }}>
         + Add New Project
        </Link>

      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <TableContainer component={Paper}>
          <Table className="border border-gray-300" aria-label="project table">
            <TableHead>
              <TableRow className="bg-purple-100">
                <TableCell align="center" className="font-semibold border border-gray-300">Project ID</TableCell>
                <TableCell align="center" className="font-semibold border border-gray-300">Project Title</TableCell>
                <TableCell align="center" className="font-semibold border border-gray-300">Description</TableCell>
                <TableCell align="center" className="font-semibold border border-gray-300">Start Date</TableCell>
                <TableCell align="center" className="font-semibold border border-gray-300">End Date</TableCell>
                <TableCell align="center" className="font-semibold border border-gray-300">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((proj) => (
                <TableRow key={proj._id}>
                  <TableCell align="left" className="border border-gray-300">{proj.id}</TableCell>
                  <TableCell align="left" className="border border-gray-300">{proj.name}</TableCell>
                  <TableCell align="left" className="border border-gray-300">{proj.des}</TableCell>
                  <TableCell align="left" className="border border-gray-300">{proj.start}</TableCell>
                  <TableCell align="left" className="border border-gray-300">{proj.end}</TableCell>
                  <TableCell align="left" className="border border-gray-300">
                    <div className="flex gap-2">
                      <IconButton aria-label="edit" color="primary"
                      onClick={()=>{
                      updateUser(proj)}}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => deleteProject(proj._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProjectList;
