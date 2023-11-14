import { Banner, Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";

const ProfileAlert = () => {
  return (
    <Banner>
      <div className="flex w-full flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://flowbite.com/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
            <span className="self-center whitespace-nowrap text-lg font-semibold font-ke-brand dark:text-white">
              Ketemu Enak
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Profile yang menarik akan meningkatkan peluang bisnis kamu
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <Button
            href="/create-profile"
            size="sm"
            theme={CustomTheme.button}
            color={"primary"}>
            Lengkapi Profile
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default ProfileAlert;
