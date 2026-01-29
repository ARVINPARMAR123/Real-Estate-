import { useContext } from "react";
import "./dashboardPage.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        <div className="greeting">
          <h1>Welcome back, {currentUser?.username}!</h1>
          <p>Your Personal Real Estate Dashboard</p>
        </div>

        <div className="dashboard">
          {/* Quick Actions */}
          <div className="section">
            <h2>Quick Actions</h2>
            <div className="actionCards">
              <Link to="/add" className="actionCard">
                <div className="icon">📝</div>
                <h3>Post Property</h3>
                <p>List a new property</p>
              </Link>
              <Link to="/profile" className="actionCard">
                <div className="icon">👤</div>
                <h3>My Profile</h3>
                <p>View & edit profile</p>
              </Link>
              <Link to="/list" className="actionCard">
                <div className="icon">🏠</div>
                <h3>Browse Properties</h3>
                <p>Find properties</p>
              </Link>
              <Link to="/profile/update" className="actionCard">
                <div className="icon">⚙️</div>
                <h3>Settings</h3>
                <p>Update preferences</p>
              </Link>
            </div>
          </div>

          {/* Featured Section */}
          {/* <div className="section">
            <h2>Featured Properties</h2>
            <div className="featuredCards">
              <div className="card">
                <img src="/placeholder1.jpg" alt="Property" />
                <div className="cardInfo">
                  <h3>Modern Apartment</h3>
                  <p className="price">$2,500/month</p>
                  <p className="location">📍 New York, NY</p>
                </div>
              </div>
              <div className="card">
                <img src="/placeholder2.jpg" alt="Property" />
                <div className="cardInfo">
                  <h3>Luxury Villa</h3>
                  <p className="price">$5,000/month</p>
                  <p className="location">📍 Los Angeles, CA</p>
                </div>
              </div>
              <div className="card">
                <img src="/placeholder3.jpg" alt="Property" />
                <div className="cardInfo">
                  <h3>Cozy Studio</h3>
                  <p className="price">$1,200/month</p>
                  <p className="location">📍 Chicago, IL</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* My Activity */}
          <div className="section">
            <h2>My Activity</h2>
            <div className="activityBox">
              <div className="activityItem">
                <span className="activityIcon">📤</span>
                <div className="activityContent">
                  <h4>Posted Properties</h4>
                  <p>3 properties listed</p>
                </div>
              </div>
              <div className="activityItem">
                <span className="activityIcon">❤️</span>
                <div className="activityContent">
                  <h4>Saved Favorites</h4>
                  <p>12 properties saved</p>
                </div>
              </div>
              <div className="activityItem">
                <span className="activityIcon">💬</span>
                <div className="activityContent">
                  <h4>Messages</h4>
                  <p>5 new messages</p>
                </div>
              </div>
              <div className="activityItem">
                <span className="activityIcon">👁️</span>
                <div className="activityContent">
                  <h4>Views</h4>
                  <p>142 profile views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
