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
          imageUrl:
            "https://images.pexels.com/photos/7917377/pexels-photo-7917377.jpeg?auto=compress&cs=tinysrgb&w=1600",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://images.pexels.com/photos/5996969/pexels-photo-5996969.jpeg?auto=compress&cs=tinysrgb&w=1600",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
