import React, { useState } from "react";
import "./DropDown.scss";

export interface List {
  id: number;
  title: string;
  key: string;
}

interface Props {
  title: string;
  list: List[];
  label: string;
  getDropDownValue: (item: List) => void;
}

const DropDown: React.FC<Props> = (props) => {
  const { title, list, label, getDropDownValue } = props;

  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen((state) => !state);
  };

  const selectItem = (item: any) => {
    getDropDownValue(item);
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
          {list.map((item) => {
            return (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => selectItem(item)}
              >
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
