import React from 'react';
import './Account.css';

const Account = ({ user }) => {
  let customers = [user];
  // const email_id = customers?.email_id ?? "";
  // const fname = customers?.first_name ?? "";
  // const lname = customers?.first_name ?? "";
  // const phone = customers?.phone_num ?? "";
  // const address = customers?.address_customer ?? "";
  const { email_id } = customers[0];
  const { first_name } = customers[0];
  const { last_name } = customers[0];
  const { phone_num } = customers[0];
  const { address_customer } = customers[0];

  return (
    <div className="text">
      <div className="text-text">Email ID:</div>
      <div className="user-content">{email_id}</div>
      <div className="text-text">First Name</div>
      <div className="user-content">{first_name}</div>
      <div className="text-text">Last Name</div>
      <div className="user-content">{last_name}</div>
      <div className="text-text">Phone Number</div>
      <div className="user-content">{phone_num}</div>
      <div className="text-text">Your Address</div>
      <div className="user-content">{address_customer}</div>
    </div>
  );
};

export default Account;
