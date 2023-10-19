import { useForm } from "react-hook-form";
import "./component.css";

function Component1() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">
            <h1>Component 1</h1>
            <label>Name</label>
            <input type="text" {...register("name", { required: true })} />
            <br />
            <label>Description</label>
            <input type="text" {...register("description", { required: true })} />
            <br />
            <button type="submit" className="SubmitBtn">SUBMIT</button>
            <button type="cancel" className="CancelBtn">CANCEL</button>
        </form>
    );
}

export default Component1;
