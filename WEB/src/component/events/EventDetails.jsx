import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import setverUrl from "../../utilitize/globals";

function EventDetails() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    axios
      .get(setverUrl + `/events?id=${id}`)
      .then(({ data }) => {
        setData(data[0]);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className='w-[90vw] h-[85vh] flex justify-center items-center'>
        <p>Loading...</p>
      </div>
    );
  return (
    <div className='overflow-x-auto h-[40rem]'>
      <table className='table table-xs table-pin-rows table-pin-cols'>
        <thead>
          <tr>
            <th>Id</th>
            <td>Name</td>
            <td>Date</td>
            <td>Total Tickets</td>
            <td>Tickets Sold</td>
            <td>VIP Tickets</td>
            <td>VIP Tickets Price</td>
            <td>Regular Tickets</td>
            <td>Regular Tickets Price</td>
            <td>Special Guest Tickets</td>
            <td>Special Guest Tickets Price</td>
            <td>Guest Tickets</td>
          </tr>
        </thead>
        <tbody>
          <tr key={data.Id}>
            <th>{data.Id}</th>
            <td>{data.Name}</td>
            <td>{data.Date}</td>
            <td>{data.TotalTickets}</td>
            <td>{data.TicketsSold}</td>
            <td>{data.VIPTickets}</td>
            <td>{data.VIPTicketsPrice}</td>
            <td>{data.RegularTickets}</td>
            <td>{data.RegularTicketsPrice}</td>
            <td>{data.SpecialGuestTickets}</td>
            <td>{data.SpecialGuestTicketsPrice}</td>
            <td>{data.GuestTickets}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventDetails;
