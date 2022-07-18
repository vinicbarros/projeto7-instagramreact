function SugestedUser(props) {
  return (
    <div class="follow-you">
      <div class="lines">
        <img src={props.img} alt="" />
        <div>
          <h4>{props.name}</h4>
          <h5>
            Seguido por {props.follows_you} e mais {props.number}...
          </h5>
        </div>
      </div>
      <h3>Seguir</h3>
    </div>
  );
}

function YoureTheUser(props) {
  return (
    <div class="your-profile">
      <img src={props.profile_img} alt="" />
      <div>
        <h5>{props.user}</h5>
        <p>{props.name}</p>
      </div>
      <img
        src="assets/img/icons8-verified-badge-48.png"
        alt=""
        class="verified"
      />
    </div>
  );
}

export default function Sidebar() {
  const follow = [
    {
      name: "joaoguilherme",
      img: "assets/img/joaogui.jpg",
      followed_by: "jade",
      number: 25,
    },
    {
      name: "triz",
      img: "assets/img/triz.jpg",
      followed_by: "gabi",
      number: 18,
    },
    {
      name: "calaaaango",
      img: "assets/img/calango.jpg",
      followed_by: "felps",
      number: 42,
    },
    {
      name: "imzerobadass",
      img: "assets/img/zero.jpg",
      followed_by: "alan",
      number: 13,
    },
    {
      name: "anavitoria",
      img: "assets/img/anavitoria.jpg",
      followed_by: "lagum",
      number: 8,
    },
  ];
  return (
    <div class="sidebar">
      <YoureTheUser user="jao" name="Jão" profile_img="assets/img/jao.jpg"/>
      <div class="follow-bar">
        <div class="sugestions">
          <h5>Sugestões para você</h5>
          <h4>Ver tudo</h4>
        </div>

        {follow.map((user) => (
          <SugestedUser
            name={user.name}
            img={user.img}
            follows_you={user.followed_by}
            number={user.number}
          />
        ))}
      </div>
      <div class="sidebar-infos">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
