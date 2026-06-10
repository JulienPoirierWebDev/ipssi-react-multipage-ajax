import { useLocation } from "react-router";

const PageAuteur = () => {
  const location = useLocation();

  console.log(location);

  return (
    <p>
      Auteur - <span>{location.pathname.replace("/auteur/", "")}</span>
    </p>
  );
};

export default PageAuteur;
