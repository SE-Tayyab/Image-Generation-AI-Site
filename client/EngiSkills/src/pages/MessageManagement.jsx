import React from "react";
import AdminLayout from "./admin/AdminLayout";

function MessageManagement() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Message Management</h1>

        {/* Message Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Statistic Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Total Messages Today</h2>
            <p className="text-2xl font-bold">1,240</p>
          </div>

          {/* Statistic Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Flagged Messages</h2>
            <p className="text-2xl font-bold">18</p>
          </div>

          {/* Statistic Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Deleted Messages</h2>
            <p className="text-2xl font-bold">35</p>
          </div>

          {/* Statistic Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              Archived Conversations
            </h2>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>

        {/* Recent Message Logs */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">
                  "Can you help me with this issue?"
                </td>
                <td className="py-2 px-4 border-b">5 minutes ago</td>
                <td className="py-2 px-4 border-b text-green-500">Sent</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">
                  "I think the server is down."
                </td>
                <td className="py-2 px-4 border-b">10 minutes ago</td>
                <td className="py-2 px-4 border-b text-yellow-500">Flagged</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Alex Johnson</td>
                <td className="py-2 px-4 border-b">
                  "Issue resolved, thanks!"
                </td>
                <td className="py-2 px-4 border-b">15 minutes ago</td>
                <td className="py-2 px-4 border-b text-red-500">Deleted</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Flagged Messages */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Flagged Messages</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">
                "This message is inappropriate"
              </span>
              <span className="text-gray-500">Flagged by John Doe</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">"Spam message detected"</span>
              <span className="text-gray-500">Flagged by Jane Smith</span>
            </li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MessageManagement;
