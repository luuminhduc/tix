import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../features/auth/authSlice";

const Login = () => {
  const schema = yup.object().shape({
    taiKhoan: yup.string().required(),
    password: yup.string().min(6).max(32).required(),
  });

  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    dispatch(loginRequest({ user: data }, "ngu"));
  };
  return (
    <div className="auth">
      <Container
        maxWidth="xs"
        sx={{ backgroundColor: "white", borderRadius: "5px", padding: "40px" }}
      >
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            {...register("taiKhoan")}
            error={errors.taiKhoan ? true : false}
            helperText={errors.taiKhoan?.message}
            label="Tai khoan"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          <TextField
            {...register("password")}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            label="Password"
            type="password"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          <Button
            type="submit"
            size="large"
            sx={{ width: "100%" }}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
