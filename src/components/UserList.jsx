import UserItem from "./UserItem";

function UserList(props) {
  // Primim un array de useri ca props.
  const {users} = props;

  return (
    <div>
      {/* Pentru a afisa array-uri pe ecran, folosim metoda map.
      Functia primita ca argument de map poate primi un al doilea parametru, reprezentand indexul elementului. */}
      {users.map((user, index) => {
        // Nu omite return-ul!
        return (
          <UserItem
            // Fiecare element din lista este nevoie sa aiba o cheie unica.
            key={index}
            name={user.name}
            email={user.email}
            marketValueTrend={user.marketValueTrend}
            isNew={user.isNew}
          />
        )
      })}
    </div>
  );
}

export default UserList;