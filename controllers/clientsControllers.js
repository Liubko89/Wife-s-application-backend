import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";
import Client from "../models/client.js";
// import {
//   createContactSchema,
//   updateContactSchema,
//   updateStatusContactSchema,
// } from "../schemas/contactsSchemas.js";

export const getAllClients = async (_, res, next) => {
  try {
    const data = await Client.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getOneClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);
    const data = await Client.findById(id);
    if (!data) throw HttpError(404);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);
    const data = await Client.findByIdAndDelete(id);
    if (!data) throw HttpError(404);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const createClient = async (req, res, next) => {
  try {
    // const { error } = createContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    next(error);
  }
};

export const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);

    // const { error } = updateContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }

    if (!req.body || Object.keys(req.body).length === 0)
      throw HttpError(400, "Body must have at least one field");

    const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedClient) throw HttpError(404);
    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

// export const updateStatusContact = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);

//     const { error } = updateStatusContactSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }

//     if (!req.body || Object.keys(req.body).length === 0)
//       throw HttpError(
//         400,
//         "Body must have an object with key 'favorite' and its value boolean"
//       );

//     const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updatedContact) throw HttpError(404);
//     res.status(200).json(updatedContact);
//   } catch (error) {
//     next(error);
//   }
// };
