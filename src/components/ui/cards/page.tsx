"use client";

import React from "react";

export interface User {
  id?: number;
  name: string;
  userName?: string;
  email?: string;
  avatar?: string;
  role?: string;
  location?: string;
  phone?: string;
}

const UserCard: React.FC<{ user: User; className?: string; onAction?: () => void }> = ({
  user,
  className = "",
  onAction,
}) => {
  console.log(user, "User");
  return (
    <div
      className={`flex items-center gap-4 bg-white rounded-xl shadow-md p-4 max-w-md ${className}`}
    >
      {/* Avatar */}
      <div className="shrink-0">
        {/* <img
          src={
            user.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              `${user.firstName} ${user.lastName || ""}`
            )}&background=0D8ABC&color=fff&size=128`
          }
          alt={`${user.firstName} avatar`}
          className="w-20 h-20 rounded-full object-cover"
        /> */}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {user?.name} <br />
            {user?.userName}
          </h3>
          <span className="text-sm text-gray-500"></span>
        </div>

        <p className="text-sm text-gray-600 truncate"></p>

        <div className="mt-3 flex-col items-center gap-3">
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{user.email}</div>

          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{user.phone}</div>
        </div>
      </div>

      {/* Action */}
      <div>
        <button
          onClick={onAction}
          className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default UserCard;
