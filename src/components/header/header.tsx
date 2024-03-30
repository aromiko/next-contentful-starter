import { Text } from "@/components/ui/text/text";

import ThemeToggle from "../theme/theme-toggle";

const Header = () => {
  return (
    <header className="w-full flex justify-between p-4">
      <Text as="h1" variant="h2">
        Hello, world!
      </Text>
      <ThemeToggle />
    </header>
  );
};

export default Header;
