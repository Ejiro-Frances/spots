const EditModal = ({
  setEditModal,
  onSubmit,
  onChange,
  tempName,
  setTempName,
  tempDescription,
  setTempDescription,
  tempImage,
  errors,
  setErrors,
}) => {
  return (
    <>
      <div
        className="modal-overlay"
        aria-hidden
        onClick={() => {
          setEditModal(false);
          setErrors({});
        }}
      />
      <div className="modal" role="dialog" aria-label="Edit profile modal">
        <button
          onClick={() => {
            setEditModal(false);
            setErrors({});
          }}
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
              id="editName"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          {/* The description */}
          <div className="form-content">
            <label htmlFor="editDesc">Description</label>
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
          <div className="form-content">
            <label htmlFor="editImage">Profile Image</label>
            <input
              type="file"
              name="file"
              id="editImage"
              accept="image/*"
              onChange={onChange}
            />
            {tempImage && (
              <img
                src={tempImage}
                alt="Preview"
                className="profile-img-preview"
              />
            )}
          </div>
          <button type="submit" className="btn btn-dark">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default EditModal;
