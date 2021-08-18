import "./App.css";
import Profile from "./Profile/Profile";
import myPhoto from "./Profile/pexels-kokokara-4164086.jpg";

function App() {
  let users = [
    { fullName: "Salem", bio: "keep going", profession: "Web Developer" },
    { fullName: "Khalil", bio: "Move!!!", profession: "Designer" },
    { fullName: "Ahmed", bio: "Very bad", profession: "photograph" },
  ];
  let handleName = (name) => {
    alert(name);
  };
  return (
    <div className="card_boxs">
      {users.map((user) => (
        <Profile
          name={user.fullName}
          bio={user.bio}
          profession={user.profession}
          fun={handleName}
        >
          <img src={myPhoto} alt="flower" />
        </Profile>
      ))}
    </div>
  );
}

export default App;
