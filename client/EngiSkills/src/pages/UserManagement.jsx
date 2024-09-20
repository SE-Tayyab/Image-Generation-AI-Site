import React from "react";
import AdminLayout from "./admin/AdminLayout";

function UserManagement() {
  return (
    <AdminLayout>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">User Management</h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 p-6 bg-gray-100">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg">
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="p-2 border border-gray-300 rounded-lg w-1/2"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add User
                </button>
              </div>
            </div>

            {/* User Table */}
            <div className="p-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border border-gray-300">ID</th>
                    <th className="p-3 border border-gray-300">Name</th>
                    <th className="p-3 border border-gray-300">Email</th>
                    <th className="p-3 border border-gray-300">Role</th>
                    <th className="p-3 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example row - replace with dynamic data */}
                  <tr>
                    <td className="p-3 border border-gray-300">1</td>
                    <td className="p-3 border border-gray-300">John Doe</td>
                    <td className="p-3 border border-gray-300">
                      john.doe@example.com
                    </td>
                    <td className="p-3 border border-gray-300">Admin</td>
                    <td className="p-3 border border-gray-300">
                      <button className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Edit
                      </button>
                      <button className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}

export default UserManagement;
