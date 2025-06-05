import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import PreviewModal from "./PreviewModal";

const Gallery = ({ allCards }) => {
  const [likedCards, setLikedCards] = useState(new Set());
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleLike = (id) => {
    setLikedCards((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  return (
    <main className="main">
      <article className="container">
        {allCards.map((card) => (
          <figure
            key={card.id}
            className={`card ${focusedIndex === card.id ? "focused" : ""}`}
            onMouseEnter={() => setFocusedIndex(card.id)}
            onMouseLeave={() => setFocusedIndex(null)}
          >
            <div
              className="card-img-container"
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="card-img"
                loading="lazy"
              />
            </div>
            <div className="card-description">
              <figcaption className="card-title">{card.title}</figcaption>

              <HiOutlineHeart
                onClick={() => toggleLike(card.id)}
                className={`like-icon ${
                  likedCards.has(card.id) ? "liked" : "not-liked"
                }`}
              />
            </div>
          </figure>
        ))}
      </article>

      {/* selected card */}
      {selectedCard && (
        <PreviewModal
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
        />
      )}
    </main>
  );
};

export default Gallery;
