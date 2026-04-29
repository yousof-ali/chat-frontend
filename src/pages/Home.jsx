import React from "react";
import Container from "../components/shared/Container";
import { useUsers } from "../store/useUsers";
import { useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const { loadingUser, users, getUser } = useUsers();
  useEffect(() => {
    getUser();
  }, [getUser]);
  console.log(users);
  return (
    <Container className={"pt-6 space-y-6"}>
      <div>
        <h2 className="text-xl font-bold border-b border-gray-500">
          Find Connectors
        </h2>
        {users?.allUsers?.length === 0 ? (
          <p className="text-sm font-semibold text-center pt-6">
            No users found
          </p>
        ) : (
          <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7">
            {users?.allUsers?.map((user, indx) => {
              return <Card key={indx} user={user}type="connect" />;
            })}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold border-b border-gray-500">
          Received Requests
        </h2>
        {users?.receivedRequest?.length === 0 ? (
          <p className="text-sm font-semibold text-center pt-6">
            No users found
          </p>
        ) : (
          <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7">
            {users?.receivedRequest?.map((user, indx) => {
              return <Card key={indx} user={user.sender} type="accept"/>;
            })}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold border-b border-gray-500">
          Send Requests
        </h2>
        {users?.sentRequests?.length === 0 ? (
          <p className="text-sm font-semibold text-center pt-6">
            No users found
          </p>
        ) : (
          <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7">
            {users?.sentRequests?.map((user, indx) => {
              return <Card key={indx} user={user.receiver} type="cancel"/>;
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
