import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import CategoryChart from "../components/CategoryChart";
import WardChart from "../components/WardChart";
import RecentFeedback from "../components/RecentFeedback";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        api.get("dashboard/")
            .then((res) => setDashboard(res.data))
            .catch((err) => console.error(err));
    }, []);

    if (!dashboard) {
        return (
            <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>Loading CivicLens AI Dashboard...</h2>
            </div>
        );
    }

    return (
  <>
    <Navbar />

    <main className="page-container">

      <div className="page-header">
        <h1 className="page-title">
          Citizen Intelligence Dashboard
        </h1>

        <p className="page-subtitle">
          AI-powered insights from citizen feedback across county wards.
        </p>
      </div>

      <DashboardCards dashboard={dashboard} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="card">
          <h2 className="section-title">
            Community Issues by Category
          </h2>

          <CategoryChart
            data={dashboard.categories}
          />
        </div>

        <div className="card">
          <h2 className="section-title">
            Ward Activity Overview
          </h2>

          <WardChart
            data={dashboard.wards}
          />
        </div>

      </div>

      <div className="card mt-8">

        <h2 className="section-title">
          Recent Citizen Reports
        </h2>

        <RecentFeedback />

      </div>

    </main>

  </>
);
}

export default Dashboard;