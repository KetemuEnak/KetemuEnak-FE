import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Profilebar from "./Profilebar";

export default function UserNavbar() {
  return (
    <Navbar fluid rounded border className="px-9">
      <Navbar.Brand as={Link} href="#">
        <h1 className="text-2xl font-ke-brand">Ketemu Enak</h1>
      </Navbar.Brand>
      <div className="flex gap-x-5 items-center h-full">
        <Searchbar />
        <Profilebar />
      </div>
    </Navbar>
  );
}
