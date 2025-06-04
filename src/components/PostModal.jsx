const PostModal = ({
  postModal,
  setPostModal,
  postTitle,
  setPostTitle,
  postImage,
  uploadPostImage,
  handlePostSubmit,
  postErrors,
}) => {
  if (!postModal) return null;

  const triggerFileInput = () => {
    document.getElementById("postImage")?.click();
  };

  return (
    <section className="modal">
      <button
        id="closeModal"
        className="btn btn-light btn-close"
        onClick={() => setPostModal(false)}
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
          />
          {postErrors?.title && <p className="error">{postErrors.title}</p>}
        </div>

        <button type="submit" className="btn btn-dark">
          Post
        </button>
      </form>
    </section>
  );
};

export default PostModal;

// const PostModal = ({
//   postModal,
//   setPostModal,
//   postTitle,
//   setPostTitle,
//   postImage,
//   uploadPostImage,
//   handlePostSubmit,
//   postErrors,
// }) => {
//   if (!postModal) return null;

//   const triggerFileInput = () => {
//     document.getElementById("postImage").click();
//   };

//   return (
//     <section className="modal">
//       <button
//         id="closeModal"
//         className="btn btn-light btn-close"
//         onClick={() => {
//           setPostModal(false);
//         }}
//       >
//         X
//       </button>
//       <form onSubmit={handlePostSubmit} className="modal-form">
//         <div className="form-content">
//           <label htmlFor="postImage">Photo</label>

//           <input
//             type="file"
//             // name="file"
//             id="postImage"
//             accept="image/*"
//             className="hidden"
//             onChange={uploadPostImage}
//           />
//           <div className="custom-upload" onClick={triggerFileInput}>
//             <span id="uploadText">Click to upload image</span>
//             {postImage && (
//               <img
//                 className="upload-preview hidden"
//                 src={postImage}
//                 alt="Preview"
//               />
//             )}
//           </div>
//           {postErrors?.image && <p className="error">{postErrors.image}</p>}
//         </div>
//         <div className="form-content ">
//           <label htmlFor="post-title">Title</label>
//           <input
//             type="text"
//             id="post-title"
//             placeholder="Enter photo title"
//             value={postTitle}
//             onChange={(e) => setPostTitle(e.target.value)}
//             className=""
//           />
//           {postErrors?.title && <p className="error">{postErrors.title}</p>}
//         </div>

//         <button type="submit" className="btn btn-dark">
//           Post
//         </button>
//       </form>
//     </section>
//   );
// };

// export default PostModal;
