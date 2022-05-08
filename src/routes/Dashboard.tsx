import React, { FC } from "react";
import { PeopleList, InvitePeople } from "../components/dashboard";

const Dashboard: FC = () => (
  <div>
    <h1>Your company Dashboard</h1>
    <p>Manage people, view history &amp; see how your projects are doing.</p>
    <PeopleList />
    <InvitePeople />
  </div>
);

export default Dashboard;
