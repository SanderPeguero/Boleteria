import { useState } from "react";
import axios from "axios";
import setverUrl from "../../utilitize/globals";
const initialData = {
  Name: "",
  Date: "",
  Image: "",
  TotalTickets: "",
  VIPTickets: "",
  VIPTicketsPrice: "",
  RegularTickets: "",
  RegularTicketsPrice: "",
  SpecialGuestTickets: "",
  SpecialGuestTicketsPrice: "",
  GuestTickets: "",
  TicketsSold: 0
};

function Form() {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(initialData);

  function handleInput(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post(setverUrl + "/events", data)
      .then((response) => {
        alert(response.data.message);
        setData(initialData);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='flex flex-col w-[400px] rounded-xl border py-4 px-2 m-2'
      >
        <div className='flex justify-center text-[1.5rem]'>Creat Event</div>
        {/* <input type="number" placeholder="Id" className="input max-w-xs m-1" onChange={(e) => { setId(e.target.value) }} /> */}
        <input
          type='text'
          placeholder='Name'
          name='Name'
          required
          value={data.Name}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='date'
          placeholder='Date'
          name='Date'
          required
          value={data.Date}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='text'
          placeholder='Image'
          name='Image'
          value={data.Image}
          required
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Total Tickets'
          name='TotalTickets'
          required
          value={data.TotalTickets}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        {/* <input type="text" readOnly placeholder="Tickets Sold" className="input max-w-xs m-1" onChange={(e) => { setTicketsSold(e.target.value) }} /> */}
        <input
          type='number'
          placeholder='VIP Tickets'
          name='VIPTickets'
          required
          value={data.VIPTickets}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='VIP Tickets Price'
          name='VIPTicketsPrice'
          required
          value={data.VIPTicketsPrice}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Regular Tickets'
          name='RegularTickets'
          required
          value={data.RegularTickets}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Regular Tickets Price'
          name='RegularTicketsPrice'
          required
          value={data.RegularTicketsPrice}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Special Guest Tickets'
          name='SpecialGuestTickets'
          required
          value={data.SpecialGuestTickets}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Special Guest TicketsPrice'
          name='SpecialGuestTicketsPrice'
          required
          value={data.SpecialGuestTicketsPrice}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <input
          type='number'
          placeholder='Guest Tickets'
          name='GuestTickets'
          required
          value={data.GuestTickets}
          className='input max-w-xs m-1'
          onChange={(e) => handleInput(e)}
        />
        <button className='btn m-1' type='submit'>
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default Form;
