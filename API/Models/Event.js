
const EventModel = {
    Id: 0,
    Name: "",
    Date: "",
    Seats: 0
}

export function getInstanceEvent(row = null){
    if(row == null){
        return EventModel
    }

    EventModel.Id = row.Id || 0
    EventModel.Name = row.Name || ""
    EventModel.Date = row.Date || ""
    EventModel.Seats = row.Seats || 0

    return EventModel
    
}

export default EventModel