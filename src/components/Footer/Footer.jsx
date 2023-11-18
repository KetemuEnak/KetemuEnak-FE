import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";
import { CustomTheme } from "../../themes/theme";

export default function FooterComponent() {
  return (
    <Footer theme={CustomTheme.footer} container>
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
