import React, { useState } from "react";
import "./DropDown.scss";
import { IDepartmentAndPriorities } from "../../../interfaces/interfaces";

interface Props {
  title: string;
  list: IDepartmentAndPriorities[];
  label: string;
  getDropDownValue: (item: IDepartmentAndPriorities) => void;
}

const DropDown: React.FC<Props> = (props) => {
  const { title, list, label, getDropDownValue } = props;

  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen((state) => !state);
  };

  const selectItem = (item: IDepartmentAndPriorities) => {
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
