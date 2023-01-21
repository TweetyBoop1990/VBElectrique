import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const MaterialUiSwitchConfig = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        content: '"FR"',
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#9f1223",
    color: theme.palette.mode === "dark" ? "#000" : "#fff",
    width: 32,
    height: 32,
    "&:before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 4,
      padding: "0 5px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      content: '"EN"',
      fontWeight: 900,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default MaterialUiSwitchConfig;
