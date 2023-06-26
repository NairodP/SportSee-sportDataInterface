import "/src/css/pages/Error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h3 className="title404">404</h3>
      <p className="p404">Oups! La page que vous demandez n&apos;existe pas.</p>
      <br />
      <Link to="/" className="a404">Retourner sur la page d&apos;accueil</Link>
    </>
  );
}