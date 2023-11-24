/* :root {
  --white: #ffffff;
  --black: #111111;
  --accent: #ff8356;
  --yellow: #ffc107;
  --blue-gradient: linear-gradient(290deg, #419ef1 100%, #9bd0ff 100%);
  --orange-gradient: linear-gradient(290deg, #ff984e 100%, #ffdf48 100%);
  --blue-link: #54adff;
  --light-blue: #cce4fb;
  --green: #00c3ad;
  --red: #f43f5e;
  --grey: #888888;
  --shadow-default: 3px 8px 14px rgba(136, 198, 253, 0.19);
  --shadow-hover: 7px 13px 14px rgba(116, 177, 232, 0.24);
  --transition-regular: 250ms cubic-bezier(0.4, 0, 0.2, 1);
} */
export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#111111",
    accent: "#ff8356",
    yellow: "#FFC107",
    bgColorPage: "#FEF9F9",
    blueGradient: "linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)",
    orangeGradient: "linear-gradient(290deg, #ff984e 0%, #ffdf48 107.89%)",
    blueLink: "#54ADFF",
    lightBlue: "#CCE4FB",
    green: "#00C3AD",
    red: "#F43F5E",
    grey: "#888888",
    backdrop: "rgba(97, 97, 97, 0.6)",
  },

  shadows: {
    shadowDefault: "3px 8px 14px rgba(136, 198, 253, 0.19)",
    shadowHover: "7px 13px 14px rgba(116, 177, 232, 0.24)",
  },

  transitions: {
    transitionRegular: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  fonts: {
    manrope: {
      regular: "Manrope-Regular, sans-serif",
      semiBold: "Manrope-SemiBold, sans-serif",
      bold: "Manrope-Bold, sans-serif",
      medium: "Manrope-Medium, sans-serif",
      extraBold: "Manrope-ExtraBold, sans-serif",
    },

    inter: {
      regular: "Inter-Regular, sans-serif",
      medium: "Inter-Medium, sans-serif",
    },

    poppins: {
      regular: "Poppins-Regular, sans-serif",
    },
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
};
