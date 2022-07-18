import Post from './Post';

export default function Posts() {
  const post_Profile = [
    {
      name: "casimiro",
      profile_img: "assets/img/cazeim.jpg",
      posted_img: "assets/img/cazechu.jpg",
      liked_by: "neymarjr",
      liked_by_img: "assets/img/neymarlogo.jpg",
      likes: "875.241"
    },
    {
      name: "arianagrande",
      profile_img: "assets/img/ariana.jpg",
      posted_img: "assets/img/arianapost.jpg",
      liked_by: "pedroloos",
      liked_by_img: "assets/img/pedro los.jpg",
      likes: "326.761"
    },
    {
      name: "netflix",
      profile_img: "assets/img/nlogo.jpg",
      posted_img: "assets/img/netflix.jpg",
      liked_by: "primevideo",
      liked_by_img: "assets/img/primelogo.jpg",
      likes: "431.267"
    },
  ];

  return (
    <div class="post-column">
      {post_Profile.map((user) => (
        <Post
          name={user.name}
          profile_img={user.profile_img}
          posted_img={user.posted_img}
          liked_by={user.liked_by}
          liked_by_img={user.liked_by_img}
          likes={user.likes}
        />
      ))}
    </div>
  );
}
