import PropTypes from "prop-types";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { validateEmail } from "@/utils/fields";

const Subscribe = ({ dataTranslate }) => {
  const s = dataTranslate?.landing?.subscribe ?? {};

  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [blockButton, setBlockButton] = useState(true);

  const onRequiredChange = (e) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;

    if (fieldName === "email") {
      setBlockButton(!newValue || !validateEmail(newValue));
      setEmail(newValue);
    }
  };

  const onSumitForm = async (e) => {
    e.preventDefault();

    try {
      fetch(
        `https://pycon.us21.list-manage.com/subscribe/post-json?` +
          new URLSearchParams({
            u: "b17171278920cd24d0c9c4cfe",
            id: "785e2a687f",
            FNAME: "",
            LNAME: "",
            EMAIL: email,
            subscribe: "Subscribe",
          }),
        {
          method: "GET",
          mode: "no-cors",
        },
      ).then((response) => {
        console.log(response.status);
        console.log(response);
      });

      setShowAlert(true);
      setAlertType("success");
      setAlertMessage("Thanks for your interest!");
      setEmail("");
      setBlockButton(true);
    } catch (error) {
      console.error("Error:", error);

      setShowAlert(true);
      setAlertType("danger");
      setAlertMessage("Something went wrong, please try again later!");
    } finally {
      if (showAlert) {
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    }
  };

  return (
    <div className="subscribe-cta content-wrapper bottom-section">
      <img
        className="subscribe-cta__decor"
        src="/figma-assets/subscribe-dotted.svg"
        alt=""
        aria-hidden
      />
      <Container>
        {showAlert && (
          <Alert
            className="subscribe-cta__alert"
            variant={alertType}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertMessage}
          </Alert>
        )}
        <div className="subscribe-cta__stack">
          <div className="subscribe-cta__card">
            <h2 className="subscribe-cta__heading">
              {s.header}
              <span className="subscribe-cta__heading-bold">
                {s.headerBold}
              </span>
            </h2>
            <p className="subscribe-cta__description">{s.description}</p>
            <img
              className="subscribe-cta__art-adobe"
              src="/figma-assets/subscribe-adobe.png"
              alt=""
              aria-hidden
            />
            <img
              className="subscribe-cta__art-pycon"
              src="/figma-assets/subscribe-pycon.svg"
              alt=""
              aria-hidden
            />
          </div>
          <Form onSubmit={onSumitForm} className="subscribe-cta__form-bar">
            <Form.Group
              className="subscribe-cta__field"
              controlId="subscribe-email"
            >
              <Form.Control
                className="subscribe-cta__input"
                type="email"
                name="email"
                placeholder={s.emailPlaceholder}
                value={email}
                onChange={onRequiredChange}
                required
                autoComplete="email"
              />
            </Form.Group>
            <button
              type="submit"
              className="subscribe-cta__submit"
              disabled={blockButton}
            >
              {s.submitButton}
            </button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

Subscribe.propTypes = {
  dataTranslate: PropTypes.object,
};

export default Subscribe;
