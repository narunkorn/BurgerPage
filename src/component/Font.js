import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
     
    /* latin-ext */
    @font-face {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Red Hat Display';
      font-style: italic;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/redhatdisplay/v7/8vIh7wUr0m80wwYf0QCXZzYzUoTg-CSvZX4Vlf1fe6TVMwwD9F-Yo3w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Red Hat Display';
      font-style: italic;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/redhatdisplay/v7/8vIh7wUr0m80wwYf0QCXZzYzUoTg-CSvZX4Vlf1fe6TVMwwD-l-Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvWyNL4U.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjtGyNL4U.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvGyNL4U.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjs2yNL4U.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvmyNL4U.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjsGyN.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
      
      `}
  />
);

export default Fonts;