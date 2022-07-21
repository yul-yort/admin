import { VFC } from "react";
import { Button, CircularProgress } from "@mui/material";
import { IFormButton } from "../types";

const FormButton: VFC<IFormButton> = ({ disabled, loading }) => {
  return (
    <Button
      type="submit"
      size="large"
      disabled={disabled}
      fullWidth
      variant="outlined"
      aria-label="login"
    >
      {loading ? <CircularProgress size={25} /> : "ВОЙТИ"}
    </Button>
  );
};

export default FormButton;
