import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function GuestNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-ke-brand">
          Ketemu Enak
        </h1>
      </Navbar.Brand>
      <Button>Daftar</Button>
    </Navbar>
  );
}
