import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const registerUser = async ({ name, email, password, address, role }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        address,
        role: role || "USER",
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        role: user.role,
    };
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        },
    );

    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            role: user.role,
        },
    };
};

export { registerUser, loginUser };