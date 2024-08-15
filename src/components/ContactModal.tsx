import React, { useState, useEffect } from "react";
import Button from "./Button";
import { User, useUserStore } from "../store/useUserStore";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (id: number, updatedUser: Partial<User>) => void;
  initialData?: User | null;
}

const ContactModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const { addUser } = useUserStore();
  const [user, setUser] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });

  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  useEffect(() => {
    if (initialData) {
      setUser(initialData); // Populate the form with the initial data when editing
    }
  }, [initialData]);

  useEffect(() => {
    // Disable the Save button if any field is empty
    const isDisabled =
      !user.firstName.trim() || !user.lastName.trim() || !user.status.trim();
    setIsSaveDisabled(isDisabled);
  }, [user]);

  const validate = () => {
    const newErrors = {
      firstName: user.firstName.trim() ? "" : "First name is required",
      lastName: user.lastName.trim() ? "" : "Last name is required",
      status: user.status.trim() ? "" : "Status is required",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSave = () => {
    if (validate()) {
      if (onSave) {
        onSave(user.id, user); // Call onSave with the updated user data
      } else {
        addUser(user);
      }
      setUser({ id: Date.now(), firstName: "", lastName: "", status: "" }); // Reset form
      onClose();
    }
  };

  const handleCloseModal = () => {
    setUser({ id: Date.now(), firstName: "", lastName: "", status: "" }); // Reset form
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Contact" : "Create Contact"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className={`border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded p-2 w-full`}
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className={`border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded p-2 w-full`}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
        <div className="flex mb-4">
          <span className="block text-sm font-medium mb-1 mr-4">Status:</span>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="active"
                checked={user.status === "active"}
                onChange={(e) => setUser({ ...user, status: e.target.value })}
              />
              Active
            </label>
            <label className="pr-4">
              <input
                type="radio"
                value="inactive"
                checked={user.status === "inactive"}
                onChange={(e) => setUser({ ...user, status: e.target.value })}
              />
              Inactive
            </label>
          </div>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
          )}
        </div>
        <div className="flex justify-end gap-3">
          <Button
            onClick={handleSave}
            variant="primary"
            disabled={isSaveDisabled}
          >
            {initialData ? "Update" : "Save"}
          </Button>
          <Button onClick={handleCloseModal} variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
