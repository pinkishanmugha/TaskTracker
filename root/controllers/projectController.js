import Project from "../models/Project.js";

// Add Project
const addProject = async (req, res) => {
  try {
    console.log("addProject hit with data:", req.body);
    const { id, name, des, start, end } = req.body;

    const newPro = new Project({ id, name, des, start, end });
    await newPro.save();

    return res.status(200).json({ success: true, project: newPro });
  } catch (error) {
    console.error("addProject error:", error);
    return res.status(500).json({ success: false, error: "add project server error" });
  }
};

// Get All Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching projects" });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }
    return res.status(200).json({ success: true, message: "Project deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Delete failed" });
  }
};

// Update Project
const updateProject = async (req, res) => {
  try {
    const { id, name, des, start, end } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { id, name, des, start, end, updatedAt: Date.now() },
      { new: true }
    );
    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Update failed" });
  }
};

// EXPORT ALL TOGETHER
export { addProject, getAllProjects, deleteProject, updateProject };
