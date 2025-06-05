const PreviewModal = ({ setSelectedCard, selectedCard }) => {
  return (
    <>
      <div
        className="modal-overlay"
        onClick={() => setSelectedCard(null)}
        aria-hidden="true"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview modal"
      >
        <button
          onClick={() => {
            setSelectedCard(null);
          }}
          className="btn btn-close btn-light"
          aria-label="Close preview modal"
        >
          X
        </button>
        <div className="previewable-images">
          <div className="card-img-container">
            <img
              src={selectedCard.imgSrc}
              alt={selectedCard.imgAlt}
              className="card-img preview-img"
            />
          </div>
          <p className="previewable-title">{selectedCard.title}</p>
        </div>
      </div>
    </>
  );
};

export default PreviewModal;
