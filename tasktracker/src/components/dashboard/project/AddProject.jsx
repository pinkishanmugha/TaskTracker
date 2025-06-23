import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';



const AddProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditMode = location.state && location.state.user;
  const [project, setProject] = useState({
    id: '',
    name: '',
    des: '',
    start: '',
    end: ''
  });

  
  useEffect(() => {
  if (isEditMode) {
    setProject({
      id: location.state.user.id || '',
      name: location.state.user.name || '',
      des: location.state.user.des || '',
      start: location.state.user.start || '',
      end: location.state.user.end || ''
    }); }
  }, [isEditMode, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleDateChange = (name, value) => {
    setProject({ ...project, [name]: value ? value.format("YYYY-MM-DD") : "" });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const url = isEditMode
      ? `http://localhost:5000/api/project/update/${location.state.user._id}`
      : 'http://localhost:5000/api/project/add';

    const method = isEditMode ? 'put' : 'post';

    const response = await axios[method](
      url,
      project,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    if (response.data.success) {
      navigate("/admin-dashboard/project");
    } else {
      alert("Operation failed. Check backend error.");
    }

  } catch (error) {
    console.error("Axios error:", error);
    if (error.response) {
      alert(error.response.data.error);
    } else {
      alert("Something went wrong: " + error.message);
    }
  }
};



  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isEditMode ? "Update Project" : "Add New Project"}
        </h2>


        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <TextField
              name="id"
              label="Project ID"
              variant="outlined"
              onChange={handleChange}
              value={project.id}
              fullWidth
              disabled={isEditMode} 
            />
            <TextField
              name="name"
              label="Project Name"
              variant="outlined"
              onChange={handleChange}
              value={project.name}
              fullWidth
            />
            <TextField
              name="des"
              label="Description"
              multiline
              rows={4}
              onChange={handleChange}
              value={project.des}
              fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="Start Date"
                value={project.start ? dayjs(project.start) : null}
                onChange={(newValue) => handleDateChange("start", newValue)}
                fullWidth
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="End Date"
                value={project.end ? dayjs(project.end) : null}
                onChange={(newValue) => handleDateChange("end", newValue)}
                fullWidth
              />
            </LocalizationProvider>

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
>
              {isEditMode ? "Update Project" : "Add Project"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
