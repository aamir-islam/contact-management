import { useState } from "react";
import ContactModal from "../../components/ContactModal";
import Button from "../../components/Button";
import { User, useUserStore } from "../../store/useUserStore";
import UserCard from "../../components/UserCard";

export const ContactList = () => {
  const { users, updateUser, removeUser } = useUserStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null); // State to track the user being edited

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null); // Reset editing user when modal closes
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user); // Set the user to be edited
    setIsModalOpen(true); // Open the modal for editing
  };

  const handleUpdateUser = (id: number, updatedUser: Partial<User>) => {
    updateUser(id, updatedUser);
  };

  const handleRemoveUser = (id: number) => {
    removeUser(id);
  };

  return (
    <div className="mt-10 flex flex-col items-center ">
      {users && users.length > 0 ? ( // Check if users exist and has length
        <div className="flex-grow flex flex-col items-center w-full px-4">
          <div className="grid gap-4 justify-center w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={() => handleEditUser(user)}
                onDelete={() => handleRemoveUser(user.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className=" border border-gray-300 rounded-lg p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-center my-4">
            No contact found
          </h1>
          <p className="text-center">
            Please add contact from the create contact button.
          </p>
        </div>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={editingUser ? handleUpdateUser : undefined}
        initialData={editingUser}
      />
      <div className="mt-8">
        <Button onClick={handleOpenModal} variant="primary">
          Create Contact
        </Button>
      </div>
    </div>
  );
};
