import "./footer.css";
import Image7 from "./Obi1.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const Foot = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Provide a Correct Email"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    location.href = "/submit";
  };

  return (
    <div className="hut">
      <div>
        <h1 className="get">
          Get campaign updates and <br />
          latest news delivered to your <br />
          inbox weekly.
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Type Your E-mail"
            className="inp"
            {...register("email")}
          />
          <input className="but6" value="Submit" type="submit" />
          <h6>{errors.email?.message}</h6>

          <input type="checkbox" className="check" />
          <span>
            I agree to recieve campaign updates and news about the Obi Datti
            Campaign via email
          </span>
        </form>
      </div>
      <div>
        <img src={Image7} className="lefty" />
      </div>
    </div>
  );
};

export default Foot;
