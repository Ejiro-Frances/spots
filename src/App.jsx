import { useState } from "react";
import Header from "./components/Header.jsx";
import PostModal from "./components/PostModal.jsx";
import { cardsData } from "./components/CardData.js";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

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

    const newPost = {
      imgSrc: postImage,
      imgAlt: postTitle,
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
      <Header setPostModal={setPostModal} />
      <PostModal
        postModal={postModal}
        setPostModal={setPostModal}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postImage={postImage}
        uploadPostImage={uploadPostImage}
        handlePostSubmit={handlePostSubmit}
        postErrors={postErrors}
      />
      <Gallery allCards={[...userPosts, ...cardsData]} />
      <Footer />
    </>
  );
};

export default App;
