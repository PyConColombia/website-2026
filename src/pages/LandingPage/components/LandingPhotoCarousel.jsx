import gallerySrcList from "virtual:public-gallery";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Image } from "@/components/Image";
import { buildGalleryItems } from "./landingGalleryItems";

const LandingPhotoCarousel = ({
  sectionAriaLabel,
  modalCloseLabel,
  imageAltTemplate,
  altBySrc,
}) => {
  const [selected, setSelected] = useState(null);

  const images = useMemo(
    () =>
      buildGalleryItems({
        srcList: gallerySrcList,
        imageAltTemplate,
        altBySrc,
      }),
    [imageAltTemplate, altBySrc],
  );

  if (!images.length) return null;

  return (
    <>
      <section className="landing-gallery" aria-label={sectionAriaLabel}>
        <div className="landing-gallery__viewport">
          <div className="landing-gallery__track">
            {["primary", "repeat"].map((groupId) => (
              <div
                key={groupId}
                className="landing-gallery__group"
                aria-hidden={groupId === "repeat"}
              >
                {images.map((item, index) => (
                  <button
                    key={`${groupId}-${item.src}-${index}`}
                    type="button"
                    className="landing-gallery__slide"
                    onClick={() => setSelected(item)}
                    aria-label={item.alt ?? `Image ${index + 1}`}
                  >
                    <span className="landing-gallery__slide-inner">
                      <Image
                        className="landing-gallery__slide-img"
                        src={item.src}
                        alt=""
                        layout="fullWidth"
                        aspectRatio={16 / 9}
                        objectFit="cover"
                      />
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        show={!!selected}
        onHide={() => setSelected(null)}
        centered
        size="xl"
        dialogClassName="landing-gallery-modal"
        aria-label={selected?.alt ?? undefined}
      >
        <Modal.Body className="landing-gallery-modal__body p-0">
          {selected ? (
            <div className="landing-gallery-modal__frame">
              <button
                type="button"
                className="landing-gallery-modal__close"
                onClick={() => setSelected(null)}
                aria-label={modalCloseLabel}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="landing-gallery-modal__close-icon"
                />
              </button>
              <Image
                className="landing-gallery-modal__img"
                src={selected.src}
                alt={selected.alt ?? ""}
                layout="fullWidth"
                width={1600}
                height={900}
              />
            </div>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
};

LandingPhotoCarousel.propTypes = {
  sectionAriaLabel: PropTypes.string,
  modalCloseLabel: PropTypes.string,
  imageAltTemplate: PropTypes.string,
  altBySrc: PropTypes.objectOf(PropTypes.string),
};

export default LandingPhotoCarousel;
