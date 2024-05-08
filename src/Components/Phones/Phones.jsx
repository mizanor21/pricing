import { useEffect, useState } from "react";
import Phone from "./Phone";
import axios from "axios";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneFakedata = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhoneData(phoneFakedata);
      });
  }, []);
  return (
    <div className="m-5 flex flex-col items-center">
      <h2 className="text-2xl bg-green-700 my-3 p-3 rounded-tl-badge rounded-br-badge">
        Available Phones
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {phones.map((phone, i) => (
          <Phone key={i} phone={phone}></Phone>
        ))}
      </div>
      <div className="w-full lg:w-3/5">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={phoneData}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Phones;
