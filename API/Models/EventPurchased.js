import joi from "joi";

const EventPurchased = joi.object({
  user_id: joi.number().required(),
  events_id: joi.number().required(),
  ticket_amount: joi.number().required(),
  ticket_price: joi.number().required(),
  ticket_type: joi.string().required(),
  order_date: joi.date(),
  order_status: joi.string(),
});

export default EventPurchased;
