// import Facebook from "../../../assets/Facebook";
// import Twitter from "../../../assets/Twitter";
// import Instagram from "../../../assets/Instagram";
// import FacebookUncolored from "../../../assets/FacebookUncolored";
// import TwitterUncolored from "../../../assets/TwitterUncolored";
// import InstagramUncolored from "../../../assets/InstagramUncolored";

// const Footer = () => {
//   return (
//     <footer className="flex flex-col bg-gray-200 w-full py-5">
//       <div className="flex items-center justify-center gap-x-5 mb-7">
//         <FacebookUncolored />
//         <TwitterUncolored />
//         <InstagramUncolored />
//       </div>
//       <div className="flex items-center justify-center">
//         <p className="text-gray-400">
//           © 2023. All Rights Reserved. Ketemu Enak
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="All Rights Reserved. Ketemu Enak."
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
