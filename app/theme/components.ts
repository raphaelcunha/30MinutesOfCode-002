import { Components } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import AreaNormalBold from "~/assets/fonts/AreaNormal-Bold.woff";
import AreaNormalMedium from "~/assets/fonts/AreaNormal-Medium.woff";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Area Normal';
        font-style: normal;
        font-weight: 500;
        src: local('Area Normal'), url(${AreaNormalMedium}) format('woff');
      }
      @font-face {
        font-family: 'Area Normal';
        font-style: normal;
        font-weight: 700;
        src: local('Area Normal'), url(${AreaNormalBold}) format('woff');
      }
    `,
  },
  MuiButton: {
    styleOverrides: {
      containedSecondary: {
        backgroundColor: palette.secondary.dark,
        color: palette.primary.main,
        boxShadow: shadows[2],
        textTransform: "capitalize",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      outlined: {
        minHeight: 22,
        height: "auto",
        borderRadius: 8,
      },
      label: {
        ...(typography as TypographyOptions).caption,
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontFamily: "Area Normal",
        fontSize: "12px",
        borderRadius: "50px",
        padding: "2px 10px",
        backgroundColor: "#444444",
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        "& label": {
          color: palette.primary.dark,
        },
        "& label.Mui-focused": {
          color: palette.primary.dark,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: palette.secondary.dark,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: palette.secondary.dark,
          },
          "&.Mui-focused fieldset": {
            borderColor: palette.secondary.dark,
          },
        },
      },
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: {
        "& label": {
          color: palette.primary.dark,
        },
        "& label.Mui-focused": {
          color: palette.primary.dark,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: palette.secondary.dark,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: palette.secondary.dark,
          },
          "&.Mui-focused fieldset": {
            borderColor: palette.secondary.dark,
          },
        },
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        "& label": {
          color: palette.primary.dark,
        },
        "& label.Mui-focused": {
          color: palette.primary.dark,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: palette.secondary.dark,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: palette.secondary.dark,
          },
          "&.Mui-focused fieldset": {
            borderColor: palette.secondary.dark,
          },
        },
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        "&.Mui-error": {
          color: palette.text.primary,
        },
        "&.MuiFormLabel-asterisk": {
          color: palette.text.primary,
        },
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        textTransform: "initial",
        fontSize: "12px",
      },
    },
  },
};

export default components;
