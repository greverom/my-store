import { useEffect, useRef, useState } from "react";
import { FormState } from "react-hook-form";
import { RegisterFormInputs } from "../../Interfaces/authenticationProps";
import { useToast } from "../Toast/useToast";

export const useRegister = ( formState?: FormState<RegisterFormInputs> ) => { const { showToast } = useToast();
  const prevErrors = useRef(formState?.errors);
  const [registerModal, setRegisterModal] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "success", 
  });

  useEffect(() => {
    if (formState?.isSubmitted) {
      if (
        (formState?.errors?.email && prevErrors.current?.email !== formState.errors.email) ||
        (formState?.errors?.password && prevErrors.current?.password !== formState.errors.password) ||
        (formState?.errors?.confirmPassword && prevErrors.current?.confirmPassword !== formState.errors.confirmPassword)
      ) {
        if (formState?.errors?.email && formState?.errors?.password) {
          showToast("Ingresa email y contraseña", "error");
        } else if (formState?.errors?.email) {
          showToast("Ingresa el email", "error");
        } else if (formState?.errors?.password) {
          showToast("Ingresa la contraseña", "error");
        } else if (formState?.errors?.confirmPassword) {
          showToast("Confirma la contraseña", "error");
        }
      }
      prevErrors.current = formState?.errors;
    }
  }, [formState?.errors, formState?.isSubmitted, showToast]);
  

  const handleRegister = (email: string, password: string) => {
    console.log( email, password)
    //showToast("Registro exitoso...", "success");
    setRegisterModal({
      isOpen: true,
      title: "Registro exitoso",
      message: `${email} ha sido registrado.`,
      type: "success", 
    });
  };

  return { handleRegister, 
          registerModal, 
          setRegisterModal
  };
};