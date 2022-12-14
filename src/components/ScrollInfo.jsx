import {useEffect, useState} from "react";

function ScrollInfo() {
  const [scrollY, setScrollY] = useState(0);

  // Cand se produce evenimentul de scroll, actualizam state-ul.
  function scrollListener() {
    const posY = window.scrollY;
    setScrollY(posY);
  }

  useEffect(() => {
    console.log(" am facut scroll la pozita :", scrollY);
  }, [scrollY]);

  useEffect(() => {
    // Adaugam un event listener pe intreg documentul
    document.addEventListener("scroll", scrollListener)

    // Functia returnata va fi executata cand componenta va fi demontata.
    return () => {
      console.log("remove");
      // Stergem event listenerul adaugat.
      document.removeEventListener("scroll", scrollListener);
    }
  }, []);

  return (
    <p>{scrollY}</p>
  )
}

export default ScrollInfo;
