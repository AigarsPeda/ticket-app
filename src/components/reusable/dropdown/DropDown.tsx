import React, { useState } from "react";
import "./DropDown.scss";

interface Props {
  title: string;
  list: any[];
  label: string;
}

const DropDown: React.FC<Props> = (props) => {
  const { title, list, label } = props;

  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen((state) => !state);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <div>
        <div className="dd-header" onClick={toggleList}>
          <div className="dd-header-title">{title}</div>
          {listOpen ? (
            <i className="fas fa-angle-up" />
          ) : (
            <i className="fas fa-angle-down" />
          )}
        </div>
      </div>
      {listOpen && (
        <ul className="dd-list">
          {list.map((item: any) => {
            return (
              <li className="dd-list-item" key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default DropDown;
