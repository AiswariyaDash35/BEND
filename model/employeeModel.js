import mongoose from "mongoose";

const empSchema=mongoose.Schema({
    ename:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    emobile:{
        type: String,
        required: true
    }
},
{
    timestamps: true //when data will enter it will mention
}
);

export default mongoose.model("Emp",empSchema);