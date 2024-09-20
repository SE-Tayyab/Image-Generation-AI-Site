import React from "react";
import AdminLayout from "./admin/AdminLayout";

function ChatManagement() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Chat Management</h1>

        {/* Chat Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Statistic Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Active Chat Rooms</h2>
            <p className="text-2xl font-bold">8</p>
          </div>

          {/* Statistic Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Total Users in Chat</h2>
            <p className="text-2xl font-bold">240</p>
          </div>

          {/* Statistic Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Messages Sent Today</h2>
            <p className="text-2xl font-bold">1,023</p>
          </div>

          {/* Statistic Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Blocked Users</h2>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Active Chat Rooms Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Active Chat Rooms</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">General Chat</span>
              <span className="text-gray-500">30 Active Users</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Tech Support</span>
              <span className="text-gray-500">15 Active Users</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Product Discussions</span>
              <span className="text-gray-500">20 Active Users</span>
            </li>
          </ul>
        </div>

        {/* User Activity Logs */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent User Activity</h2>
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
                <td className="py-2 px-4 border-b">Joined Tech Support</td>
                <td className="py-2 px-4 border-b">10 minutes ago</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">
                  Sent a message in General Chat
                </td>
                <td className="py-2 px-4 border-b">15 minutes ago</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Alex Johnson</td>
                <td className="py-2 px-4 border-b">Left Product Discussions</td>
                <td className="py-2 px-4 border-b">30 minutes ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ChatManagement;
