import { useState } from 'react'
import Table from './Table'
import axios from 'axios';
import UrlApi from '../globals';

function Main() {

    const [data, setdata] = useState([]);

    const PullDataHandler = () => {
        // setdata(data.push(main()))

        axios.get(UrlApi + "/events")
            .then(response => {

                setdata(response.data)

            }).catch(err => {
                // swal({
                //   title: "Not Server Connection!",
                //   text: "Products can’t be search!",
                //   icon: "error",
                //   button: "Ok"
                // })
                console.log(err)
            })


    }
    return (
        <div className="flex justify-center">
            <div className="w-[400px] rounded-xl border py-4 px-2 m-2">
                <Table data={data} />
                <button className="btn m-1" onClick={PullDataHandler}>Pull Data</button>
            </div>
        </div>
    )
}

export default Main