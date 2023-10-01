import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../";

import "./menu-item.styles.scss";

const MenuItem = (props) => {
  const { title, imageUrl, linkUrl } = props;

  const navigate = useNavigate();

  return (
    <div className="menu-item" onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${BASE_URL}${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
