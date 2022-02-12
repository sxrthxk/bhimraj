import "../styles/globals.css";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import "animate.css/animate.min.css"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
export default MyApp;
