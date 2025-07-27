import { Form, useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm();
  async function Submit(data) {
    console.log("sunbmitting data", data);
    await new Promise((resolve)=>setTimeout(resolve,5000))
  }
  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <div>
          <label>Name: </label>
          <input
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "name must be atleast of 3 characters",
              },
              maxLength: 26,
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <br />
          <label>Username: </label>
          <input {...register("username",{ required:true,
            minLength:{            
              value:4,
              message:"must contain a username"
            }
          })} />
          {errors.username &&<p>{errors.username.message}</p>}
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input {...register("email",{
            required:true,

          })} />
        </div>
        <br />

        <div>
          <label>Password: </label>
          <input {...register("password",{
            required:true,
            minLength:{
              value:5,
              maxLength:20,
              message:"password must be greather than 5 letters"  
            },
            
          })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <br />
        <button type="submit" disabled={isSubmitting} value={isSubmitting?"Submittting":"submit"}>Submit</button>
      </form>
    </>
  );
}

export default App;
