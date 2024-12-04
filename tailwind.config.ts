import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");


const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ['Satoshi', "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        featurebox:'0px 4px 12px rgba(0, 0, 0, 0.08)',
        logobox:'0px 3.49439px 4.89215px rgba(0, 0, 0, 0.14), inset 0px 2.79551px 0.698878px #FFFFFF',
        faqbox:'0px 30px 59.5px rgba(62, 55, 0, 0.25)',
      }
    },
  },
  plugins: [],
});
export default config;

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./pages/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });