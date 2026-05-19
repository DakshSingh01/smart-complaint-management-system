import Sidebar from "../components/Sidebar";

const Profile = () => {

  const userEmail =
    localStorage.getItem("email") ||
    "user@gmail.com";

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <div className="profile-card">

          <div className="profile-avatar">
            D
          </div>

          <h1>Daksh Singh</h1>

          <p>
            AI Smart Complaint Management User
          </p>

          <div className="profile-details">

            <div className="profile-box">
              <h3>Email</h3>
              <p>{userEmail}</p>
            </div>

            <div className="profile-box">
              <h3>Role</h3>
              <p>Citizen User</p>
            </div>

            <div className="profile-box">
              <h3>Status</h3>
              <p>Active</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;