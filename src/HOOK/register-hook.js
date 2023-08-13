// import { useState, useEffect } from "react";
// import notify from "./useNotifaction";
// import { useDispatch, useSelector } from "react-redux";
// import { createNewUser } from "../Store/actions/authActions";
// import { useNavigate } from "react-router-dom";
// const RegisterHook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [loading, setLoading] = useState(true);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };
//   const onChangeLastName = (e) => {
//     setLastName(e.target.value);
//   };
//   const onChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const onChangePhone = (e) => {
//     setPhone(e.target.value);
//   };
//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const onChangeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };
//   const onChangeCountry = (e) => {
//     setCountry(e.target.value);
//   };

//   const validationValues = () => {
//     let validRegex =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (name === "") {
//       notify("Please enter username", "error");
//       return;
//     }
//     if (!email.match(validRegex)) {
//       notify("Please enter Valid Email", "error");
//       return;
//     }

//     if (firstName === "") {
//       notify("Please enter First Name", "error");
//       return;
//     }
//     if (lastName === "") {
//       notify("Please enter Last Name", "error");
//       return;
//     }
//     if (country === "") {
//       notify("Please enter Your Country", "error");
//       return;
//     }
//     if (phone.length <= 10) {
//       notify("Please enter Valid Phone Number", "error");
//       return;
//     }
//     if (password !== confirmPassword) {
//       notify("من فضلك تاكيد من كلمه السر", "error");
//       return;
//     }
//   };

//   const res = useSelector((state) => state.authReducer.createUser);

//   //save data
//   const OnSubmit = async (e) => {
//     e.preventDefault();
//     validationValues();
//     setLoading(true);
//     await dispatch(
//       createNewUser({
//         username: name,
//         password1: password,
//         password2: confirmPassword,
//         email: email,
//         first_name: firstName,
//         last_name: lastName,
//         country: country,
//         gender: "Male",
//         Phone_number: phone,
//       })
//     );
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (loading === false) {
//       if (res) {
//         console.log(res);
//         if (res.data.token) {
//           localStorage.setItem("token", res.data.token);
//           notify("تم تسجيل الحساب بنجاح", "success");
//           setTimeout(() => {
//             navigate("/login");
//           }, 2000);
//         }

//         if (res.data.errors) {
//           if (res.data.errors[0].msg === "E-mail already in use")
//             notify("هذا الايميل مسجل من قبل", "error");
//         }
//         if (res.data.errors) {
//           if (res.data.errors[0].msg === "accept only egypt phone numbers")
//             notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error");
//         }

//         if (res.data.errors) {
//           if (res.data.errors[0].msg === "must be at least 6 chars")
//             notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error");
//         }
//       }
//     }
//   }, [loading, res, navigate]);

//   return [
//     name,
//     firstName,
//     lastName,
//     email,
//     phone,
//     password,
//     confirmPassword,
//     country,
//     loading,
//     onChangeName,
//     onChangeFirstName,
//     onChangeLastName,
//     onChangeEmail,
//     onChangePhone,
//     onChangePassword,
//     onChangeConfirmPassword,
//     onChangeCountry,
//     OnSubmit,
//   ];
// };

// export default RegisterHook;
