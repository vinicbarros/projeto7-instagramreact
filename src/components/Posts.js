const post_Profile = [
  {
    name: "casimiro",
    profile_img: "assets/img/cazeim.jpg",
    posted_img: "assets/img/cazechu.jpg",
  },
  {
    name: "arianagrande",
    profile_img: "assets/img/ariana.jpg",
    posted_img: "assets/img/arianapost.jpg",
  },
  {
    name: "netflix",
    profile_img: "assets/img/nlogo.png",
    posted_img: "assets/img/netflix.jpg",
  },
];

function Post(props) {
  return (
    <div class="post">
      <div class="post-top">
        <div class="post-profile">
          <img src={props.profile_img} alt="" />
          <h4>{props.name}</h4>
        </div>

        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>

      <div class="post-img">
        <img src={props.posted_img} alt="" />
      </div>

      <div class="post-bot">
        <div class="post-views">
          <div class="post-icons">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="post-icons">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="post-likes">
          <img src="assets/img/pedro los.jpg" alt="" />
          <h6>
            Curtido por <strong>pedroloos</strong> e{" "}
            <strong>outras 153.284 pessoas</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  return (
    <div class="post-column">
      {post_Profile.map((user) => (
        <Post
          name={user.name}
          profile_img={user.profile_img}
          posted_img={user.posted_img}
        />
      ))}
    </div>
  );
}
