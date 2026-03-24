const MAILCHIMP_SUBSCRIBE_URL =
  "https://pycon.us21.list-manage.com/subscribe/post-json";

const LIST_U = "b17171278920cd24d0c9c4cfe";
const LIST_ID = "785e2a687f";

/** Short fixed name — Mailchimp echoes `c` in the response; long/dynamic names can break or bloat the URL. */
const CALLBACK_NAME = "mailchimpJsonp";

let inFlight = false;

/**
 * Mailchimp often returns HTML in `msg` for errors; keep plain text for alerts.
 */
export function stripHtmlMessage(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Mailchimp `post-json` is JSONP-only in the browser (not CORS JSON).
 * One global callback name + mutex (same pattern as Mailchimp/jQuery embeds).
 */
export function mailchimpSubscribe(email) {
  return new Promise((resolve, reject) => {
    if (inFlight) {
      reject(new Error("Subscription already in progress"));
      return;
    }
    inFlight = true;

    const script = document.createElement("script");
    let settled = false;

    const cleanupScript = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    const finish = (err, data) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      inFlight = false;
      globalThis[CALLBACK_NAME] = () => {};
      cleanupScript();
      if (err) reject(err);
      else resolve(data);
    };

    const timeoutId = setTimeout(() => {
      finish(new Error("Request timed out"));
    }, 20000);

    globalThis[CALLBACK_NAME] = (data) => {
      finish(null, data);
    };

    script.onerror = () => {
      finish(new Error("Failed to load subscription request"));
    };

    const url = new URL(MAILCHIMP_SUBSCRIBE_URL);
    url.searchParams.set("u", LIST_U);
    url.searchParams.set("id", LIST_ID);
    url.searchParams.set("EMAIL", email);
    url.searchParams.set("FNAME", "");
    url.searchParams.set("LNAME", "");
    url.searchParams.set("c", CALLBACK_NAME);

    script.src = url.toString();
    document.body.appendChild(script);
  });
}
