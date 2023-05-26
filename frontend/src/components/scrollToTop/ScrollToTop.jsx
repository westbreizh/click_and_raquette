import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Récupère l'objet de localisation actuel depuis le routeur React
  const { pathname } = useLocation();

  // Utilise l'effet React pour scroller vers le haut de la page lorsqu'un changement d'URL est détecté
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolle vers le haut de la page
  }, [pathname]); // Exécute l'effet uniquement lorsque l'URL change

  // Retourne null car il n'y a pas d'éléments à rendre
  return null;
}