import React, { useEffect } from 'react';
import faker from 'faker';
import TableRow from '../components/TableRow';

const HomePage = ({ history, user }) => {
  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  }, [user, history]);

  return (
    <div className='row'>
      <div className='col s12'>
        <table className='striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email ID</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(10).keys()].map((el) => {
              return (
                <TableRow
                  key={faker.datatype.uuid()}
                  id={faker.datatype.uuid()}
                  name={faker.name.findName()}
                  email={faker.internet.email()}
                  contact={faker.phone.phoneNumber()}
                ></TableRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
