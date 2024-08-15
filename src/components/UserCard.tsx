import React from "react";
import { User } from "../store/useUserStore";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

interface UserCardProps {
  user: User;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">{user.status}</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => onEdit(user.id)}
            className="text-blue-500 hover:text-blue-700"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="text-red-500 hover:text-red-700"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
