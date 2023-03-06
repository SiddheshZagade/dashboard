import User from "../models/User.js";


export const getUser = async (req, res) => {
  try {
    const { revelance } = req.params;
    const user = await User.findById(revelance);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
