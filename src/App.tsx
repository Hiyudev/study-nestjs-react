import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query Query {
    users {
      email
      username
      institutionAssociated {
        name
        abreviation
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center p-4">
      <ul className="bg-gray-800 p-4 rounded-md w-full md:w-1/2">
        {data.users.map((user: any) => {
          return (
            <li className="py-2">
              <div className="flex flex-row gap-2 items-center pb-2">
                <h1>{user.username}</h1>
                {user.email && (
                  <span className="text-gray-300">{user.email}</span>
                )}
              </div>
              <hr className="border-gray-600" />

              {user.institutionAssociated && (
                <small className="flex justify-between">
                  <span>{user.institutionAssociated.name}</span>
                  <span>{user.institutionAssociated.abreviation}</span>
                </small>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
