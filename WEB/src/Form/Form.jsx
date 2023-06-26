import { useState } from 'react'
import axios from 'axios'
import UrlApi from '../globals';

function Form() {

    const [Id, setId] = useState(null);
    const [Name, setName] = useState(null);
    const [Date, setDate] = useState(null);
    const [Seats, setSeats] = useState(null);

    const CreateDataHandler = () => {
        let objData = {
            Id: null,
            Name: Name,
            Date: Date,
            Seats: Seats,
            // Cost: data.get('Costo'),
            // Price: data.get('Precio'),
            // Discount: data.get('Descuento'),
            // Image: data.get('QRCode')
        };

        axios.post(UrlApi + "/events", objData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            });

    }

    return (
        <div className="w-[400px] rounded-xl border py-4 px-2 m-2">
            <input type="number" placeholder="Id" className="input w-full max-w-xs m-1" onChange={(e) => { setId(e.target.value) }} />
            <input type="text" placeholder="Name" className="input w-full max-w-xs m-1" onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder="Date" className="input w-full max-w-xs m-1" onChange={(e) => { setDate(e.target.value) }} />
            <input type="text" placeholder="Seats" className="input w-full max-w-xs m-1" onChange={(e) => { setSeats(e.target.value) }} />
            <button className="btn m-1" onClick={CreateDataHandler}>Create</button>
        </div>
    )
}

export default Form