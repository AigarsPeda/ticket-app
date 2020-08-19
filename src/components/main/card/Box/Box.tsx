import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  cardValue: string | number;
  title: string;
  iconClass: string;
  cardValueClass?: string;
  status: string;
  type: string;
}

const Box: React.FC<Props> = (props) => {
  const { cardValue, title, iconClass, cardValueClass, status, type } = props;
  const history = useHistory();

  const navigateToPage = (status: any, type: any) => {
    history.push(`/tickets/${status}/${type}`);
  };

  return (
    <div
      className="col-md-6 col-xl-4"
      onClick={() => navigateToPage(status, type)}
    >
      <div className="card-box border">
        <i className={`${iconClass} font-24`}></i>
        <h3 className={cardValueClass}>{cardValue}</h3>
        <p className="text-uppercase font-13 font-weight-medium mb-1">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Box;
