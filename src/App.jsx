import { useState } from "react";
import { z } from "zod";
import Header from "./components/Header.jsx";
import PostModal from "./components/PostModal.jsx";
import { cardsData } from "./components/CardData.js";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

const postSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  image: z.string().min(1, "Image is required"),
});

const App = () => {
  const [postModal, setPostModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postErrors, setPostErrors] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  const uploadPostImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPostImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const result = postSchema.safeParse({
      title: postTitle.trim(),
      image: postImage,
    });

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((postErr) => {
        fieldErrors[postErr.path[0]] = postErr.message;
      });
      setPostErrors(fieldErrors);
      return;
    }

    const newPost = {
      id: Date.now(),
      imgSrc: postImage,
      imgAlt: postTitle,
      like: 0,
      title: postTitle,
    };

    setUserPosts([newPost, ...userPosts]);
    setPostImage(null);
    setPostTitle("");
    setPostErrors({});
    setPostModal(false);
  };

  return (
    <>
      <Header setPostModal={setPostModal} setPostErrors={setPostErrors} />
      <PostModal
        postModal={postModal}
        setPostModal={setPostModal}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postImage={postImage}
        uploadPostImage={uploadPostImage}
        handlePostSubmit={handlePostSubmit}
        postErrors={postErrors}
        setPostErrors={setPostErrors}
      />
      <Gallery allCards={[...userPosts, ...cardsData]} />
      <Footer />
    </>
  );
};

export default App;
