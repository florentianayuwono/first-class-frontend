import React, { useState } from "react";
import styles from "../style";
import dummy_food_img from "../assets/dummy_food_img.png";
import cart_black from "../assets/cart-black.svg";
import { useParams } from "react-router-dom";

const Status = () => {
  const [seat, setSeat] = useState("21F");

  const [status, setStatus] = useState("received");

  const [subtotal, setSubtotal] = useState("21.90");
  const [tax, setTax] = useState("0.00");
  const [total, setTotal] = useState("21.90");

  const { id } = useParams();

  const orders = [
    {
      image: dummy_food_img,
      name: "Signature Laksa",
      price: "8.50",
      qty: 1,
    },
    {
      image: dummy_food_img,
      name: "Nasi Lemak",
      price: "8.50",
      qty: 1,
    },
  ];

  const addOns = [
    {
      image: dummy_food_img,
      name: "Sprite",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Sprite",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Sprite",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Sprite",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Sprite",
      price: "8.50",
    },
  ];

  return (
    <div className="bg-light-grey">
      <div className="absolute z-0 top-0 left-0 w-full h-[10rem] bg-yellow rounded-bl-[40px] rounded-br-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]" />
      <div className="absolute z-10 p-10 w-full">
        <div className="heading flex flex-col text-left text-black">
          <span className={styles.heading3}>
            Order {status[0].toUpperCase() + status.substring(1)}!
          </span>
          <span className={`${styles.paragraph6} max-w-[75%] leading-tight`}>
            Sit tight and relax, your order will be delivered shortly
          </span>
        </div>

        <div className="order-card flex flex-col gap-0.5 p-5 mt-5 bg-white w-full text-black rounded-2xl">
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph7}>Subtotal</span>
            <span className={styles.paragraph8}>${subtotal}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph7}>Tax & Fees</span>
            <span className={styles.paragraph8}>${tax}</span>
          </div>
          <div className="pt-1.5 mb-1.5 border-b border-b-black opacity-20"></div>
          <div className={`${styles.heading4} flex flex-row justify-between`}>
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <div className="mt-7">
          <span className={`${styles.heading3} text-black`}>Orders</span>
          <div className="order-cards flex flex-col gap-0.5 px-5 py-2 mt-4 bg-white w-full text-black rounded-2xl divide-y divide-[#00000020]">
            {orders.map((order, idx) => (
              <OrderCard order={order} key={idx} />
            ))}
          </div>
        </div>

        <div className="mt-7">
          <div className="flex flex-col">
            <span className={`${styles.heading3} text-black`}>Details</span>

            <div className="order-card flex flex-col gap-0.5 p-5 mt-4 bg-white w-full text-black rounded-2xl">
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Passenger Name</span>
                <span className={styles.paragraph8}>Florentiana Yuwono</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Seat Number</span>
                <span className={styles.paragraph8}>21F</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Amount Payable</span>
                <span className={styles.heading5}>${total}</span>
              </div>
              <div className="pt-1.5 mb-1.5 border-b border-b-black opacity-20"></div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Order ID</span>
                <span className={styles.heading5}>SCT012345678XYZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderCard = (props) => {
  const order = props.order;
  return (
    <div className="flex gap-6 py-3">
      <img src={order.image} />
      <div className="flex flex-col gap-1 w-full my-auto">
        <span className={styles.heading5}>{order.name}</span>
        <div className="flex flex-row gap-3">
          <span className={styles.paragraph2}>${order.price}</span>
          <span className={`${styles.paragraph2} text-dark-grey`}>
            x{order.qty}
          </span>
        </div>
      </div>
    </div>
  );
};

const AddOnCard = (props) => {
  const item = props.item;
  return (
    <div className="flex flex-col gap-2 bg-white px-4 pt-4 pb-2 rounded-lg">
      <img src={item.image} className="my-auto" />
      <div className="flex flex-row justify-between gap-4 text-black">
        <span className={`${styles.heading5} my-auto`}>{item.name}</span>
        <span className={`${styles.paragraph8} my-auto`}>${item.price}</span>
      </div>
    </div>
  );
};

export default Status;