import React from "react";
import { Container, TextField, Button, Alert, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideLoginError, loginRequest } from "../../features/auth/authSlice";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    taiKhoan: yup.string().required(),
    matKhau: yup.string().min(6).max(32).required(),
  });
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => state.authReducer);

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
        <Typography
          component="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
          variant="h4"
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            {...register("taiKhoan")}
            error={errors.taiKhoan ? true : false}
            helperText={errors.taiKhoan?.message}
            label="Tai khoan"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          <TextField
            {...register("matKhau")}
            error={errors.matKhau ? true : false}
            helperText={errors.matKhau?.message}
            label="Mat khau"
            type="password"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          {loginError && (
            <Alert
              sx={{ marginBottom: "20px" }}
              severity="error"
              variant="filled"
              onClose={() => {
                dispatch(hideLoginError());
              }}
            >
              {loginError}
            </Alert>
          )}
          <Box sx={{ textAlign: "right", marginBottom: "20px" }}>
            <Typography component="small" variant="small">
              Do not have an account?<Link to="/register">Register</Link>
            </Typography>
          </Box>
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
