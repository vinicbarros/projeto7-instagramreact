const user_Stories = [
  { name: "fecast...", img: "assets/img/castanhari.jpg" },
  { name: "casimiro", img: "assets/img/cazé.jpg" },
  { name: "lucasin...", img: "assets/img/lucas.jpg" },
];

function Storie(props) {
  return (
    <div class="storie-container">
      <div class="image-container">
        <img src={props.img} alt="" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="storie-headline">
      <div class="stories-box">
        {user_Stories.map((user) => (
          <Storie name={user.name} img={user.img} />
        ))}
      </div>
    </div>
  );
}
