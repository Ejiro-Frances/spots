import { HeaderLogic } from "./Header.js";
import EditModal from "./EditModal";

const Header = () => {
  const {
    editModal,
    setEditModal,
    name,
    // setName,
    description,
    // setDescription,
    profileImage,
    // setprofileImage,
    tempName,
    setTempName,
    tempDescription,
    setTempDescription,
    tempImage,
    setTempImage,
    errors,
    // setErrors,
    openModal,
    handleSubmit,
    uploadImage,
  } = HeaderLogic();

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
              <button
                className="btn btn-light"
                type="button"
                aria-label="Edit profile"
                onClick={openModal}
              >
                <img src="/icons/edit.svg" alt="edit icon" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <button
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
          onSubmit={handleSubmit}
          onChange={uploadImage}
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
