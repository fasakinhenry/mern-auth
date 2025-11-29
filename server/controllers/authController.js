import bcrypt from 'bcryptjs';
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
