import React from 'react';
import SummaryCard from './SummaryCard';
import { FaCheckCircle, FaComment, FaCommentDots, FaFile, FaPaperPlane, FaPlus, FaProductHunt, FaProjectDiagram, FaRProject, FaSpinner, FaUsers } from 'react-icons/fa';
import './AdminSummary.css';

const AdminSummary = () => {
  return (
    <div className="admin-summary-container">
      <h3 className="admin-summary-title">Dashboard Overview</h3>
      <div className="summary-cards-wrapper">
        <SummaryCard icon={<FaUsers />} text="Total Team Member" number={13} color="bg-teal-600"/>
        <SummaryCard icon={<FaFile />} text="Total Project" number={20} />
        <SummaryCard icon={<FaFile />} text="Total Task" number={20} />
        <SummaryCard icon={<FaCheckCircle />} text="Completed Task" number={10} />
        <SummaryCard icon={<FaSpinner/>} text="Pending Task" number={10} />


      </div>
    </div>
  );
};

export default AdminSummary;
