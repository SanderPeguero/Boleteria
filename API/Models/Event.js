import joi from "joi";

const EventModel = joi.object({
  Name: joi.string().required(),
  Date: joi.date(),
  Image: joi.string().required(),
  TotalTickets: joi.number().required(),
  TicketsSold: joi.number().required(),
  VIPTickets: joi.number().required(),
  VIPTicketsPrice: joi.number().required(),
  RegularTickets: joi.number().required(),
  RegularTicketsPrice: joi.number().required(),
  SpecialGuestTickets: joi.number().required(),
  SpecialGuestTicketsPrice: joi.number().required(),
  GuestTickets: joi.number().required(),
});

export default EventModel;
