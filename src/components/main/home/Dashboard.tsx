import React, { useEffect } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import "./Dashboard.scss";

import Card from "../card/Card";
import TableElements from "../table-elements/TableElements";
import AddTicket from "../ticket/add/AddTicket";

import { RootState } from "../../../redux/reducers";
import authToken from "../../../helpers/authToken";
import { allTickets } from "../../../redux/actions/tickets";

const API_ENDPOINT = "http://localhost:5000";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Dashboard: React.FC<Props> = (props) => {
  const { token, allTickets } = props;

  const socket = socketIOClient(API_ENDPOINT);

  useEffect(() => {
    const dashboardMethods = () => {
      authToken(token);
      allTickets();
    };
    dashboardMethods();

    socket.on("refreshPage", () => {
      dashboardMethods();
    });
  }, [socket, token, allTickets]);

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

const mapDispatchToProps = { allTickets };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
