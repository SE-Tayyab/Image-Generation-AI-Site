import React from "react";
import AdminLayout from "./AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Statistic Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Total Users</h2>
            <p className="text-2xl font-bold">1,240</p>
          </div>

          {/* Statistic Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Active Sessions</h2>
            <p className="text-2xl font-bold">320</p>
          </div>

          {/* Statistic Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Messages Sent</h2>
            <p className="text-2xl font-bold">5,230</p>
          </div>

          {/* Statistic Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Reports Filed</h2>
            <p className="text-2xl font-bold">15</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Action</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">Logged in</td>
                <td className="py-2 px-4 border-b">5 minutes ago</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">Sent a message</td>
                <td className="py-2 px-4 border-b">15 minutes ago</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Alex Johnson</td>
                <td className="py-2 px-4 border-b">Logged out</td>
                <td className="py-2 px-4 border-b">30 minutes ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
