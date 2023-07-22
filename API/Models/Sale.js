import joi from "joi";

const SaleModel = joi.object({
  Name: joi.string().required(),
  Event: joi.string().required(),
  Date: joi.date(),
  Seats: joi.number().required(),
});

export default SaleModel;
