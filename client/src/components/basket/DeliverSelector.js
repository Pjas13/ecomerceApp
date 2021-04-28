import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStateValue } from "../../context/StateProvider";

//Component not finished
//Component to show the amount os product and the values
//And to register a day and hour to deliver
const DeliverSelector = () => {
  const [{ basket }] = useStateValue();
  const [selectedDate, setSelectedDate] = useState();
  //const [openHour, setOpenHour] = useState();
  //const [closeHour, setCloseHour] = useState()

  const totalPrice = () => {
    let total = 0;
    basket.map((item) => {
      return (total = parseInt(item.price) + total);
    });
    return total;
  };

  useEffect(() => {
    const id = basket[0].storeId;
    const getStores = async () => {
      await axios.get(`/store/${id}`);
      //setOpenHour(parseInt(data.openStore));
      //setCloseHour(parseInt(data.closeStore))
    };
    getStores();
  }, [basket]);

  return (
    <div className="row justify-content-md-center">
      <div className="col col-md-auto">
        <h4 className="h4">{`Subtotal(${
          basket.length
        } items): ${totalPrice()}€`}</h4>
      </div>
      
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          //minDate={new Date()}
          showTimeSelect
          timeFormat="HH:mm"
          //minTime={openHour}
          //maxTime={closeHour}
        />
   
    </div>
  );
};

export default DeliverSelector;
