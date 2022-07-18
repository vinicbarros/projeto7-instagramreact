import React from "react";

export default function Post(props) {
  const [color, setColor] = React.useState("heart-outline");

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
        <img
          onClick={() => {
            setColor("heart");
            if (color === "heart") {
              setColor("heart-outline");
            }
          }}
          src={props.posted_img}
          alt=""
        />
      </div>

      <div class="post-bot">
        <div class="post-views">
          <div class="post-icons">
            <ion-icon
              onDoubleClick={() => {
                setColor("heart");
                if (color === "heart") {
                  setColor("heart-outline");
                }
              }}
              name={color}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="post-icons">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="post-likes">
          <img src={props.liked_by_img} alt="" />
          <h6>
            Curtido por <strong>{props.liked_by}</strong> e
            <strong> outras {props.likes} pessoas</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}
