import { useState, useEffect } from "react";
import { z } from "zod";
import EditModal from "./EditModal";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(2, "Description must be at least 2 characters"),
});

const postSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  image: z.string().min(1, "Image is required"),
});

const Header = ({ setPostModal }) => {
  const [editModal, setEditModal] = useState(false);

  const [name, setName] = useState("Bessie Coleman");
  const [description, setDescription] = useState("Aviator");
  const [profileImage, setprofileImage] = useState("/images/avatar.png");

  const [tempName, setTempName] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [tempImage, setTempImage] = useState("");

  const [errors, setErrors] = useState({});

  const openEditModal = () => {
    setTempName(name);
    setTempDescription(description);
    setTempImage(profileImage);
    setEditModal(true);
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setTempImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const result = profileSchema.safeParse({
      name: tempName.trim(),
      description: tempDescription.trim(),
    });

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setEditModal(false);
        setPostModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header role="banner">
      <nav className="logo-container" aria-label="Logo container">
        <a href="#" className="logo" aria-label="Go to homepage">
          <img
            src="/icons/spot-logo.svg"
            alt="Insta-spot logo and home-page link"
          />
          <span className="logo-text">SPOTS</span>
        </a>
      </nav>

      {/* news column */}
      <div className="banner" aria-label="User profile banner">
        <div
          className="avatar-section"
          role="group"
          aria-label="User information"
        >
          <img
            className="avatar-img"
            src={profileImage}
            alt={`Profile image of ${name}`}
            loading="lazy"
          />
          <div className="properties">
            <div className="details">
              <h3 className="name">{name}</h3>
              <p className="description">{description}</p>
            </div>
            <button
              className="btn btn-light"
              type="button"
              aria-label="Edit profile"
              onClick={openEditModal}
            >
              <img src="/icons/edit.svg" alt="edit icon" />
              Edit Profile
            </button>
          </div>
        </div>
        <button
          onClick={() => setPostModal(true)}
          type="button"
          className="btn btn-dark"
          id="post-btn"
          aria-label="Create new post"
        >
          <img src="/icons/plus.svg" alt="+" />
          New Post
        </button>
      </div>

      {/* edit modal */}
      {editModal && (
        <EditModal
          setEditModal={setEditModal}
          onSubmit={handleProfileSubmit}
          onChange={uploadProfileImage}
          tempName={tempName}
          setTempName={setTempName}
          tempDescription={tempDescription}
          setTempDescription={setTempDescription}
          tempImage={tempImage}
          setTempImage={setTempImage}
          errors={errors}
        />
      )}
    </header>
  );
};

export default Header;
