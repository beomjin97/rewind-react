import { Dispatch, FC, SetStateAction, useState } from "react";
import AuthModal from "./AuthModal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignUpformData } from "../../types/user";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  submit: (formdata: SignUpformData) => Promise<void>;
}

const Signup: FC<Props> = ({ isOpen, setIsOpen, submit }) => {
  const { register, handleSubmit } = useForm<SignUpformData>();
  const onSubmit = async (formData: SignUpformData) => {
    try {
      await submit(formData);
      setIsOpen(false);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      role="로그인"
      submit={handleSubmit(onSubmit)}
    >
      <TextField
        label="이름"
        helperText="Rewind내에서 사용할 이름을 입력해주세요"
        type="text"
        required
        {...register("name", { required: true })}
      />
      <TextField
        label="계정"
        helperText="이메일을 입력해주세요"
        type="email"
        required
        {...register("email", { required: true })}
      />
      <TextField
        label="비밀번호"
        helperText="비밀번호를 입력해주세요"
        type="password"
        required
        {...register("password", { required: true })}
      />
      <TextField
        label="비밀번호 확인"
        helperText="비밀번호를 다시 입력해주세요"
        type="password"
        required
        {...register("passwordConfirm", { required: true })}
      />
    </AuthModal>
  );
};

export default Signup;
