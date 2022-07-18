const user_Stories = [
  { name: "fecastan...", img: "assets/img/castanhari.jpg" },
  { name: "casimiro", img: "assets/img/cazeim.jpg" },
  { name: "sofiasantino", img: "assets/img/sofia.jpeg" },
  { name: "lucasinut...", img: "assets/img/lucas.jpg" },
  { name: "bruna16", img: "assets/img/bruna16.jpg" },
  { name: "justinbieber", img: "assets/img/justin.jpg" },
  { name: "ma_montel...", img: "assets/img/mamonte.jpg" },
  { name: "pedroloos", img: "assets/img/pedro los.jpg" },
  { name: "pedrocalais", img: "assets/img/pedrocalais.jpg" },
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
      <div class="fow-circle">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
