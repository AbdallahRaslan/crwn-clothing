import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://www.crown-clothes.com/images/hats.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://www.crown-clothes.com/images/jackets.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://www.crown-clothes.com/images/sneakers.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://www.crown-clothes.com/images/womens.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://www.crown-clothes.com/images/men.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
