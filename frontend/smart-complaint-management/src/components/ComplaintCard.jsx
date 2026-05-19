import { motion } from "framer-motion";

const ComplaintCard = ({
  complaint,
  onDelete
}) => {

  return (
    <motion.div
      className="complaint-card"
      whileHover={{
        y: -8
      }}
    >

      <div className="complaint-header">

        <h2>
          {complaint.title}
        </h2>

        <span
          className={
            complaint.status ===
            "Pending"
              ? "pending"
              : "resolved"
          }
        >
          {complaint.status}
        </span>

      </div>

      <p className="complaint-desc">
        {complaint.description}
      </p>

      <div className="complaint-meta">

        <div>
          📍 {complaint.location}
        </div>

        <div>
          📂 {complaint.category}
        </div>

      </div>

      <button
        className="delete-btn"
        onClick={() =>
          onDelete(complaint._id)
        }
      >
        Delete Complaint
      </button>

    </motion.div>
  );
};

export default ComplaintCard;