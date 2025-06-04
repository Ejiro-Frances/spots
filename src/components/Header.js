import { useState, useEffect } from "react";
import { z } from "zod";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(2, "Description must be at least 2 characters"),
});

const postSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  image: z.string().min(1, "Image is required"),
});

export const HeaderLogic = ({ setPostModal }) => {
  const [editModal, setEditModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const [name, setName] = useState("Bessie Coleman");
  const [description, setDescription] = useState("Aviator");
  const [profileImage, setprofileImage] = useState("/images/avatar.png");

  const [tempName, setTempName] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [tempImage, setTempImage] = useState("");

  const [errors, setErrors] = useState({});

  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postErrors, setPostErrors] = useState({});
  const [cards, setCards] = useState([]);

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

  const uploadPostImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPostImage(reader.result);
    };
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
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setPostErrors(fieldErrors);
      return;
    }

    setCards((prev) => [
      ...prev,
      { title: postTitle.trim(), image: postImage },
    ]);
    setPostImage("");
    setPostTitle("");
    setPostErrors({});
    setPostModal(false);
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

  return {
    // Profile Modal
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
    openEditModal,
    uploadProfileImage,
    handleProfileSubmit,

    // Post Modal
    postModal,
    setPostModal,
    postTitle,
    setPostTitle,
    postImage,
    setPostImage,
    uploadPostImage,
    handlePostSubmit,
    postErrors,

    // Cards
    cards,
  };
};

// import { useState, useEffect } from "react";
// import { z } from "zod";

// const profileSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   description: z.string().min(2, "Description must be at least 2 characters"),
// });

// const postSchema = z.object({
//   title: z.string().min(2, "Title must be at least 2 characters"),
//   image: z.string().min(1, "Image is required"),
// });

// export const HeaderLogic = () => {
//   const [editModal, setEditModal] = useState(false);
//   const [postModal, setPostModal] = useState(false);

//   const [name, setName] = useState("Bessie Coleman");
//   const [description, setDescription] = useState("Aviator");
//   const [profileImage, setprofileImage] = useState("/images/avatar.png");

//   const [tempName, setTempName] = useState("");
//   const [tempDescription, setTempDescription] = useState("");
//   const [tempImage, setTempImage] = useState("");

//   const [errors, setErrors] = useState({});

//   const [postTitle, setPostTitle] = useState("");
//   const [postImage, setPostImage] = useState("");
//   const [postErrors, setPostErrors] = useState({});
//   const [cards, setCards] = useState([]);

//   const openEditModal = () => {
//     setTempName(name);
//     setTempDescription(description);
//     setTempImage(profileImage);
//     setEditModal(true);
//   };

//   const uploadProfileImage = (e) => {
//     const file = e.target.files?.[0]
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       setTempImage(reader.result)
//     }
//     reader.readAsDataURL(file)
//   }

//   const handleProfileSubmit = (e) => {
//     e.preventDefault()

//     const result = profileSchema.safeParse({
//       name: tempName.trim();
//       description: tempDescription.trim()
//     })

//     if (!result.success) {
//       const fieldErrors = {}
//       result.error.errors.forEach((err) => {
//         fieldErrors[err.path[0]] = err.message
//       })
//       setErrors(fieldErrors)
//       return
//     }

//     setName(tempName.trim());
//     setDescription(tempDescription.trim());
//     setprofileImage(tempImage);
//     setEditModal(false);
//     setErrors({});
//   }

//   const uploadPostImgae = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPostImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };
// }

// const handlePostSubmit = (e) => {
//   e.preventDefault();
//   const result = postSchema.safeParse({
//     title: postTitle.trim(),
//     image: postImage,
//   });

//   if (!result.success) {
//     const fieldErrors = {};
//     result.error.errors.forEach((err) => {
//       fieldErrors[err.path[0]] = err.message;
//     });
//     setPostErrors(fieldErrors);
//     return;
//   }

//   setCards((prev) => [...prev, { title: postTitle.trim(), image: postImage }]);
//   setPostImage("");
//   setPostTitle("");
//   setPostErrors({});
//   setPostModal(false);
// }
//   // handle esc key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setEditModal(false);
//         setPostModal(false)
//       }
//     };
//     if (editModal) {
//       window.addEventListener("keydown", handleEsc);
//     }
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [editModal]);

//   // Submit form
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const result = profileSchema.safeParse({
//   //     name: tempName.trim(),
//   //     description: tempDescription.trim(),
//   //   });

//   //   if (!result.success) {
//   //     const fieldErrors = {};
//   //     result.error.errors.forEach((err) => {
//   //       const field = err.path[0];
//   //       if (field === "name" || field === "description") {
//   //         fieldErrors[field] = err.message;
//   //       }
//   //     });
//   //     setErrors(fieldErrors);
//   //     return;
//   //   }

//   //   setName(tempName.trim());
//   //   setDescription(tempDescription.trim());
//   //   setprofileImage(tempImage);
//   //   setEditModal(false);
//   //   setErrors({});
//   // };

//   // const uploadImage = (e) => {
//   //   const file = e.target.files?.[0];
//   //   if (!file) return;

//   //   const reader = new FileReader();
//   //   reader.onload = () => {
//   //     setTempImage(reader.result);
//   //   };
//   //   reader.readAsDataURL(file);
//   // };

//   return {
//     editModal,
//     setEditModal,
//     postModal, setPostModal,
//     name,
//     setName,
//     description,
//     setDescription,
//     profileImage,
//     setprofileImage,
//     tempName,
//     setTempName,
//     tempDescription,
//     setTempDescription,
//     tempImage,
//     setTempImage,
//     errors,
//     setErrors,
//     openEditModal,
//     // handleSubmit,
//     // uploadImage,
//     uploadProfileImage,
//     handleProfileSubmit,
//     postTitle,
//     setPostTitle,
//     postImage,
//     setPostImage,
//     uploadPostImage,
//     handlePostSubmit,
//     postErrors,
//     cards,
//   };
// };
