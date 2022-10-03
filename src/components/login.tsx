import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInput {
  Email: string;
  Password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("Email")} placeholder="Your Email" />
      <label>Password</label>
      <input {...register("Password")} placeholder="Your Password" />

      <input type="submit" />
    </form>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
