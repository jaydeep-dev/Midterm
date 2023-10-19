import { useForm } from "react-hook-form";
import "./component2.css"

function Component2() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">
            <h1>Component 2</h1>

            <label>Name</label>
            <input type="text" {...register("name", { required: true })} />

            <label>Description</label>
            <input type="text" {...register("description", { required: true })} />

            <label>Category</label>
            <input type="text" {...register("category", { required: true })} />

            <label>Quantity</label>
            <input type="text" {...register("quantity", { required: true, pattern: /^\d+$/ })} />
            {errors.quantity && (<p className="Error">! Non-decimal numeric value is required and must be valid</p>)}

            <label>Price</label>
            <input type="text" {...register("price", { required: true, pattern: /^\d+(\.\d+)?$/ })} />
            {errors.price && (<p className="Error">! Numeric value is required and must be valid</p>)}

            <br />
            <button type="submit" className="SubmitBtn">SUBMIT</button>
            <button type="cancel" className="CancelBtn">CANCEL</button>
        </form>
    );
}

export default Component2;
