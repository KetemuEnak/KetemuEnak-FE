export const CustomTheme = {
  card: {
    root: {
      children: "flex h-full flex-col justify-center gap-3 p-6",
    },
  },
  avatar: {
    root: {
      size: {
        base: "w-12 h-12",
      },
    },
  },
  button: {
    color: {
      primary:
        "text-white bg-primary border border-transparent enabled:hover:bg-secondary focus:ring-4 focus:ring-secondary",
    },
  },
  modal: {
    footer: {
      base: "flex items-center justify-between space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    },
  },
  footer: {
    root: {
      base: "w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between",
    },
  },
};
