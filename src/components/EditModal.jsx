const EditModal = ({
  setEditModal,
  onSubmit,
  onChange,
  tempName,
  setTempName,
  tempDescription,
  setTempDescription,
  tempImage,
  setTempImage,
  errors,
}) => {
  return (
    <div className="modal" role="dialog" aria-label="Edit profile modal">
      <button
        onClick={() => setEditModal(false)}
        className="btn btn-close btn-light"
      >
        X
      </button>
      {/* </form> */}
      <form noValidate className="modal-form" onSubmit={onSubmit}>
        {/* The profile name */}
        <div className="name-edit form-content">
          {/* <div className="form-label"> */}
          <label htmlFor="editName">Name</label>

          {/* </div> */}
          <input
            type="text"
            name="profile-name"
            id="editName"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            // placeholder="Enter your name"
            required
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        {/* The description */}
        <div className="form-content description-edit">
          {/* <div className="form-label"> */}
          <label htmlFor="editDesc">Description</label>

          {/* </div> */}
          <input
            type="text"
            name="text"
            id="editDesc"
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            placeholder="Enter your description"
            className={errors.description ? "input-error" : ""}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>
        {/* For image upload */}
        <div className="form-content avatar-upload">
          <label htmlFor="editImage">Profile Image</label>
          {tempImage && (
            <img
              src={tempImage}
              alt="Preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginTop: "1rem",
              }}
            />
          )}
          <input
            type="file"
            name="file"
            id="editImage"
            accept="image/*"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditModal;
