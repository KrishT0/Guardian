/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import classes from "./vault.module.css";

function Form({ firstNameProp, emailProp, websiteUrlProp, passwordProp }) {
  let firstNameStore = firstNameProp ? firstNameProp : "";
  let emailStore = emailProp ? emailProp : "";
  let websiteUrlStore = websiteUrlProp ? websiteUrlProp : "";
  let passwordStore = passwordProp ? passwordProp : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: firstNameStore,
      email: emailStore,
      websiteUrl: websiteUrlStore,
      password: passwordStore,
    },
  });
  const onSubmitForm = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={classes.form}>
      <div className={classes.inputElement}>
        <label htmlFor="name">Name</label>
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          id="name"
        />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div className={classes.inputElement}>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          id="email"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className={classes.inputElement}>
        <label htmlFor="Website-Url">Website Url</label>
        <input
          {...register("websiteUrl", { required: true })}
          aria-invalid={errors.websiteUrl ? "true" : "false"}
          id="Website-Url"
        />
        {errors.websiteUrl && <span>This field is required</span>}
      </div>
      <div className={classes.inputElement}>
        <label htmlFor="password">Passowrd</label>
        <input
          {...register("password", { required: true })}
          aria-invalid={errors.password ? "true" : "false"}
          id="password"
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button>Add</button>
    </form>
  );
}

export default Form;
