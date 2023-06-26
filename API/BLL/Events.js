import { getInstanceEvent } from '../Models/Event.js'

import { ConnectionStart } from '../DAL/Connection.js'

let Connection = ConnectionStart()
let SqlQuery = "SELECT Id, Name, Date, Seats FROM events "

export function saveEvent(req, res){
    const EventModel = getInstanceEvent(req.body)

    if(EventModel.Id == null || EventModel.Id == 0){
        insertEvent(EventModel, res)
    }else{
        updateEvent(EventModel, res)
    }
}

function insertEvent(EventModel, res){

    const values = [
        EventModel.Name,
        EventModel.Date,
        EventModel.Seats
    ]

    const success = {
        Executed: false
    }

    if(values.Name == "" || values.Date == "" || values.seats == ""){
        
        res.status(500).json(success)
        return

    }else{

        Connection = ConnectionStart()
        
        Connection.query("INSERT INTO events (Name, Date, Seats) VALUES (?,?,?)", values, (err, result) => {
            if(!err){
                success.Executed = true
                Connection.destroy()
                res.json(success)
            }else{
                success.Executed = true
                Connection.destroy()
                console.log(err)
                res.status(500).json(success)
            }
            
        })
    }
}

function updateEvent(EventModel, res){

    const values = [
        EventModel.Name,
        EventModel.Date,
        EventModel.Seats,
        EventModel.Id,
    ]

    const success = {
        Executed: false
    }

    Connection = ConnectionStart()

    Connection.query("UPDATE events SET Name=?, Date=?, Seats=? WHERE Id=?", values, (err, result) => {
        if(!err){
            success.Executed = true
            Connection.destroy()
            res.json(success)
        }else{
            success.Executed = false
            Connection.destroy()
            console.log(err)
            res.status(500).json(success)
        }
    })
}

export function listEvents(req, res){

    Connection = ConnectionStart()

    Connection.query(SqlQuery, (err, result) => {

        let data = []

        if(!err){
            for(let i=0; i<result.length; i++){
                let fila = result[i]
                data.push(Object.assign({}, getInstanceEvent(fila)))
            }
            Connection.destroy()
            res.json(data)
        }else{
            Connection.destroy()
            console.log(err)
            res.status(500).json(data)
        }
    })
}

export function findEvent(req,res){

    const { id } = req.params
    const values = [id]

    Connection = ConnectionStart()

    Connection.query(SqlQuery + " WHERE Id=? ", values, (err, result) => {
        Connection.destroy()
        res.json(getInstanceEvent(result[0]))
    })
}

export function deleteEvent(req, res){

    const { id } = req.params
    console.log(id)
    const values = [id]

    const success = {
        Executed: false
    }

    Connection = ConnectionStart()

    Connection.query("DELETE FROM events WHERE Id=? ", values, (err, result)=>{
        if(!err){
            success.Executed = true
            Connection.destroy()
            res.json(success)
        }else{
            success.Executed = false
            Connection.destroy()
            console.log(err)
            res.status(500).json(success)
        }
    })

}