import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
//validaciones con react hook form del front

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data , e) => {
    console.log(data);
    e.target.reset(); //limpiar los inputs
  };


  return (
    <Fragment>
      <h2>Hooks Forms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6 mb-3">
          <label>Primer nombre</label>
          <input
            name="pNombre"
            type="text"
            className="form-control"
            {...register("pNombre", {
              required: { value: true, message: "campo requerido" },
              minLength: { value: 3, message: "ingrese minimo 3 caracteres" },
              maxLength: { value: 15, message: "ingrese maximo 5 caracteres" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "ingrese solo letras",
              },
            })}
          />
          {errors.pNombre && (
            <span className="text-danger">error: {errors.pNombre.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default FormHook;
