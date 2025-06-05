const PostModal = ({
  postModal,
  setPostModal,
  postTitle,
  setPostTitle,
  postImage,
  uploadPostImage,
  handlePostSubmit,
  postErrors,
  setPostErrors,
}) => {
  if (!postModal) return null;

  const triggerFileInput = () => {
    document.getElementById("postImage")?.click();
  };

  return (
    <>
      <div
        className="modal-overlay"
        aria-hidden="true"
        onClick={() => {
          setPostModal(false);
          setPostErrors({});
        }}
      />
      <section className="modal" aria-modal="true" role="dialog">
        <button
          id="closeModal"
          className="btn btn-light btn-close"
          onClick={() => {
            setPostModal(false);
            setPostErrors({});
          }}
          aria-label="Close modal"
        >
          X
        </button>

        <form onSubmit={handlePostSubmit} className="modal-form">
          {/* Image Upload Section */}
          <div className="form-content">
            <label htmlFor="postImage">Photo</label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              className="hidden"
              onChange={uploadPostImage}
            />

            <div className="custom-upload" onClick={triggerFileInput}>
              {postImage ? (
                <img className="upload-preview" src={postImage} alt="Preview" />
              ) : (
                <span id="uploadText">Click to upload image</span>
              )}
            </div>

            {postErrors?.image && <p className="error">{postErrors.image}</p>}
          </div>

          {/* Title Input */}
          <div className="form-content">
            <label htmlFor="post-title">Title</label>
            <input
              type="text"
              id="post-title"
              placeholder="Enter photo title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className={`${postErrors.title ? "input-error" : ""}`}
            />
            {postErrors?.title && <p className="error">{postErrors.title}</p>}
          </div>

          <button type="submit" className="btn btn-dark">
            Post
          </button>
        </form>
      </section>
    </>
  );
};

export default PostModal;
