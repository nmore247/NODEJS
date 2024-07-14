import { Schema, model } from "mongoose";

const ProductSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = model("Product", ProductSchema);

export default Product;
