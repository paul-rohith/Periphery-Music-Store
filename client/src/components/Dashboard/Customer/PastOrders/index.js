import React from 'react';
import './PastOrders.css';

const PastOrders = ({ orders }) => {
  // const order_id = item?.order_id ?? "";
  // const date_time = item?.date_time ?? "";
  // const status = item?.order_status ?? "";
  // const album_id = item?.album_id?? "";
  // const alb_type = item?.alb_type ?? "";
  // const quant = item?.quantity ?? "";

  return (
    // const order_id = item?.order_id ?? "";
    // const date_time = item?.date_time ?? "";
    // const status = item?.order_status ?? "";
    // const album_id = item?.album_id?? "";
    // const alb_type = item?.alb_type ?? "";
    // const quant = item?.quantity ?? "";
    <div>
      {
        <div>
          {orders.map((item) => (
            <div className="text">
              <p className="text-text">Order ID</p>
              <p className="user-content">{item.order_id}</p>
              <p className="text-text">Date & Time of Order</p>
              <p className="user-content">{item.date_time}</p>
              <p className="text-text">Order Status</p>
              <p className="user-content">{item.order_status}</p>
              <p className="text-text">Album ID Ordered</p>
              <p className="user-content">{item.album_id}</p>
              <p className="text-text">Album Type Ordered</p>
              <p className="user-content">{item.alb_type}</p>
              <p className="text-text">Quantity</p>
              <p className="user-content">{item.quantity}</p>
              <br className="break"></br>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default PastOrders;
