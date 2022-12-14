function UserItem(props) {
  // Am adaugat prop-uri noi.
  const {name, email, marketValueTrend, isNew} = props;
  let marketValueDescription;

  // In functie de valoarea prop-ului marketValueTrend, decidem ce badge vom afisa pe ecran.
  switch (marketValueTrend) {
    case "same": marketValueDescription = "Cota de piata constanta";
      break;
    case "up": marketValueDescription = "Cota de piata in crestere";
      break;
    case "down": marketValueDescription = "Cota de piata in scadere";
      break;
    default:
      marketValueDescription = "";
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      {/* Valoarea lui marketValueDescription a fost atribuita conditional, in afara HTML-ului. */}
      {marketValueDescription}
      {/* Daca isNew are valoare true, paragraful de dupa va fi afisat. Altfel, nu va fi afisat. */}
      {isNew && <h3> Jucator nou </h3>}
    </div>
  );
}

export default UserItem;