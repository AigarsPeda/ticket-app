import React, { useEffect } from "react";
import "./Dashboard.scss";

import Card from "../card/Card";
import TableElements from "../table-elements/TableElements";
import AddTicket from "../ticket/add/AddTicket";

import { connect } from "react-redux";
import { RootState } from "../../../redux/reducers";
import authToken from "../../../helpers/authToken";

type Props = ReturnType<typeof mapStateToProps>;

const Dashboard: React.FC<Props> = (props) => {
  const { token } = props;

  useEffect(() => {
    authToken(token);
  }, [token]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card-box">
          <Card />
          <TableElements />
          <AddTicket />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
