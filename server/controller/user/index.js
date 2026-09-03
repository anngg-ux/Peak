import { loginUser, registerUser } from "../services/user.service.js";

const register = async (req, res) => {
    try {
        const { name, email, password, address, role } = req.body;

        if (!name || !email || !password || !address) {
            return res.status(400).json({
                success: false,
                message: "Name, email, password and address are required",
            });
        }

        const user = await registerUser({
            name,
            email,
            password,
            address,
            role,
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const data = await loginUser({
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

export { register, login };