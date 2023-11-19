import { Banner, Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";
import { useNavigate } from "react-router-dom";

const ProfileAlertEo = () => {
  const navigate = useNavigate();
  return (
    <Banner>
      <div className="flex w-full flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="/"
            className=" flex items-center border-gray-200 dark:border-gray-600 md:mr-4 md:border-r md:pr-4">
            <span className="self-center whitespace-nowrap text-lg font-semibold font-ke-brand dark:text-white">
              Ketemu Enak
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400 mr-4">
            Profile yang menarik akan meningkatkan peluang bisnis kamu
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <Button
            size="sm"
            theme={CustomTheme.button}
            href="/create-profile"
            color={"primary"}>
            Lengkapi Profile
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default ProfileAlertEo;
