import React from "react";
import {
  Container,
  TextField,
  Button,
  Alert,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Link, useHistory } from "react-router-dom";
import {
  hideRegisterError,
  registerRequest,
} from "../../features/register/registerSlice";

const Register = () => {
  const schema = yup.object().shape({
    hoTen: yup.string().required(),
    taiKhoan: yup.string().required(),
    matKhau: yup.string().min(6).max(32).required(),
    matKhauConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref("matKhau"), null], "Passwords must match"),
    email: yup.string().required().email(),
    soDt: yup.string().required(),
    agree: yup.bool(),
  });
  const dispatch = useDispatch();

  const history = useHistory();

  const { registerError } = useSelector((state) => state.registerReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    const { agree } = data;
    if (agree) {
      const user = {
        ...data,
        maNhom: "GP09",
        maLoaiNguoiDung: "KhachHang",
      };
      delete user.matKhauConfirm;
      delete user.agree;
      dispatch(registerRequest({ user, history }));
    }
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
          Register
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          <Grid spacing={"5"} container>
            <Grid item xs={12} lg={6}>
              <TextField
                {...register("hoTen")}
                error={errors.hoTen ? true : false}
                helperText={errors.hoTen?.message}
                label="Ho va ten"
                sx={{ width: "100%", marginBottom: "20px" }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                {...register("taiKhoan")}
                error={errors.taiKhoan ? true : false}
                helperText={errors.taiKhoan?.message}
                label="Tai khoan"
                sx={{ width: "100%", marginBottom: "20px" }}
              />
            </Grid>
          </Grid>

          <TextField
            {...register("matKhau")}
            error={errors.matKhau ? true : false}
            helperText={errors.matKhau?.message}
            label="Mat khau"
            type="password"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          <TextField
            {...register("matKhauConfirm")}
            error={errors.matKhauConfirm ? true : false}
            helperText={errors.matKhauConfirm?.message}
            label="Xac nhan Mat khau"
            type="password"
            sx={{ width: "100%", marginBottom: "20px" }}
          />
          <Grid spacing={"5"} container>
            <Grid item xs={12} lg={6}>
              <TextField
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                label="Email"
                sx={{ width: "100%", marginBottom: "20px" }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                {...register("soDt")}
                error={errors.soDt ? true : false}
                helperText={errors.soDt?.message}
                label="So dien thoai"
                sx={{ width: "100%", marginBottom: "20px" }}
              />
            </Grid>
          </Grid>
          {registerError && (
            <Alert
              sx={{ marginBottom: "20px" }}
              severity="error"
              variant="filled"
              onClose={() => {
                dispatch(hideRegisterError());
              }}
            >
              {registerError}
            </Alert>
          )}
          <Box
            sx={{
              display: "flex",
              marginBottom: "20px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox {...register("agree")} />}
              label="Term of service"
            />

            <Typography component="small" variant="small">
              Already have an account?<Link to="/login">login</Link>
            </Typography>
          </Box>
          <Button
            type="submit"
            size="large"
            sx={{ width: "100%" }}
            variant="contained"
          >
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
