import { useState, useEffect } from "react";
import { z } from "zod";

export const HeaderLogic = () => {
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState("Bessie Coleman");
  const [description, setDescription] = useState("Aviator");
  const [profileImage, setprofileImage] = useState("/images/avatar.png");
  const [tempName, setTempName] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [tempImage, setTempImage] = useState("");
  const [errors, setErrors] = useState({});

  const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(2, "Description must be at least 2 characters"),
  });

  const openModal = () => {
    setTempName(name);
    setTempDescription(description);
    setTempImage(profileImage);
    setEditModal(true);
  };

  // handle esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setEditModal(false);
      }
    };
    if (editModal) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [editModal]);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = profileSchema.safeParse({
      name: tempName.trim(),
      description: tempDescription.trim(),
    });

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        if (field === "name" || field === "description") {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setName(tempName.trim());
    setDescription(tempDescription.trim());
    setprofileImage(tempImage);
    setEditModal(false);
    setErrors({});
  };

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setTempImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return {
    editModal,
    setEditModal,
    name,
    setName,
    description,
    setDescription,
    profileImage,
    setprofileImage,
    tempName,
    setTempName,
    tempDescription,
    setTempDescription,
    tempImage,
    setTempImage,
    errors,
    setErrors,
    openModal,
    handleSubmit,
    uploadImage,
  };
};
