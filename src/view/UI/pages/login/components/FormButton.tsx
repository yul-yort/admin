import React, { FC, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { IFormButton } from "../types";

export const FormButton: FC<IFormButton> = ({isSubmitting, user}) => {
  return (
    <Button
    type="submit"
    size="large"
    disabled={isSubmitting}
    fullWidth
    variant="outlined"
  >
    {user.loading ? <CircularProgress size={25} /> : "ВОЙТИ"}
  </Button>  
  )
}