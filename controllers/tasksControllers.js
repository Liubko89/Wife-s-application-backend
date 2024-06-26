import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";
import Task from "../models/task.js";
// import {
//   createContactSchema,
//   updateContactSchema,
//   updateStatusContactSchema,
// } from "../schemas/contactsSchemas.js";

export const getAllTasks = async (_, res, next) => {
  try {
    const data = await Task.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);
    const data = await Task.findById(id);
    if (!data) throw HttpError(404);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);
    const data = await Task.findByIdAndDelete(id);
    if (!data) throw HttpError(404);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    // const { error } = createContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw HttpError(400, `${id} is not valid id`);

    // const { error } = updateContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }

    if (!req.body || Object.keys(req.body).length === 0)
      throw HttpError(400, "Body must have at least one field");

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) throw HttpError(404);
    res.status(200).json(updatedTask);
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
