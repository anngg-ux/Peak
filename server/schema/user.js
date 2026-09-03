const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN", "SUPER_ADMIN"],
            default: "USER",
        },
    },
    {
        timestamps: true,
    },
);
const User = model("User", userSchema);
export default User;
