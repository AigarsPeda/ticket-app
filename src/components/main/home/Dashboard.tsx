import React, { useEffect } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import "./Dashboard.scss";

import authToken from "../../../helpers/authToken";
import { RootState } from "../../../redux/reducers";
import { allTickets, updateTableEntries } from "../../../redux/actions/tickets";
import { getUser } from "../../../redux/actions/user";
import { apiEndPoint } from "../../../Config";

import Card from "../card/Card";
import TableElements from "../table-elements/TableElements";
import AddTicket from "../ticket/add/AddTicket";
import EditTicket from "../ticket/edit/EditTicket";

const API_ENDPOINT = apiEndPoint();
const DEFAULT_ENTRIES_VALUE = 5;

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Dashboard: React.FC<Props> = (props) => {
  const { token, allTickets, updateTableEntries, getUser } = props;

  const socket = socketIOClient(API_ENDPOINT);

  useEffect(() => {
    const dashboardMethods = () => {
      authToken(token);
      allTickets();
    };
    dashboardMethods();
    updateTableEntries(DEFAULT_ENTRIES_VALUE);
    getUser();

    socket.on("refreshPage", () => {
      dashboardMethods();
    });
  }, [socket, token, allTickets, updateTableEntries, getUser]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card-box">
          <Card />
          <TableElements />
          <AddTicket />
          <EditTicket />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token
});

const mapDispatchToProps = { allTickets, updateTableEntries, getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
