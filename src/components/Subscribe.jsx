import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { validateEmail } from "@/utils/fields";
import {
  mailchimpSubscribe,
  stripHtmlMessage,
} from "@/utils/mailchimpSubscribe";

const Subscribe = ({ dataTranslate }) => {
  const s = dataTranslate?.landing?.subscribe ?? {};

  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [blockButton, setBlockButton] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const onRequiredChange = (e) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;

    if (fieldName === "email") {
      setBlockButton(!newValue || !validateEmail(newValue));
      setEmail(newValue);
    }
  };

  useEffect(() => {
    if (!showAlert) return;
    const t = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(t);
  }, [showAlert]);

  const onSumitForm = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const data = await mailchimpSubscribe(email);

      if (data?.result === "success") {
        setAlertType("success");
        setAlertMessage("Thanks for your interest!");
        setEmail("");
        setBlockButton(true);
      } else {
        setAlertType("danger");
        setAlertMessage(
          stripHtmlMessage(data?.msg) ||
            "Could not subscribe. Please try again.",
        );
      }
      setShowAlert(true);
    } catch (error) {
      console.error("Error:", error);
      setAlertType("danger");
      setAlertMessage(
        error?.message === "Subscription already in progress"
          ? "Please wait for the current request to finish."
          : "Something went wrong, please try again later!",
      );
      setShowAlert(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="subscribe-cta content-wrapper bottom-section">
      <img
        className="subscribe-cta__decor"
        src="/images/subscribe-dotted.svg"
        alt=""
        aria-hidden
      />
      <Container>
        {showAlert && (
          <Alert
            className="subscribe-cta__alert"
            variant={alertType}
            role="alert"
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
              src="/images/subscribe-adobe.png"
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
            <Button
              type="submit"
              variant="dark"
              className="subscribe-cta__submit"
              disabled={blockButton || submitting}
            >
              {s.submitButton}
            </Button>
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
