import { PropTypes } from "prop-types";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./translation";
import { getLanguageFromPathname, localizePath } from "./languageRouting";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = getLanguageFromPathname(location.pathname);

  const changeLanguage = (nextLanguage) => {
    const targetLanguage = SUPPORTED_LANGUAGES.includes(nextLanguage)
      ? nextLanguage
      : DEFAULT_LANGUAGE;

    const targetPath = localizePath(location.pathname, targetLanguage);

    if (location.pathname !== targetPath) {
      navigate(
        {
          pathname: targetPath,
          search: location.search,
          hash: location.hash,
        },
        { replace: false },
      );
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageContext;
