import React, { FC } from "react";
import { PeopleList, InvitePeople } from "../components/dashboard";

const Dashboard: FC = () => (
  <div className="pt-12 min-h-full pb-24">
    <section className="mb-12">
      <h1>Your company Dashboard</h1>
      <h3 className="text-slate-600">
        Manage people, view history &amp; see how your projects are doing.
      </h3>
    </section>
    <section className="md:flex gap-6 flex-row w-full justify-between">
      <PeopleList />
      <InvitePeople />
    </section>
  </div>
);

export default Dashboard;
