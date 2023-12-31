import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>

        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
         <a href="#1">Features</a>
           
          
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#2">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} className="text-white font-semibold  bg-blue-600" href="/register" variant="flat">
            <Button className="text-white font-semibold  bg-blue-600" href="/register" radius="sm" variant="flat">Register</Button>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white font-semibold  bg-blue-600" href="/login" variant="flat">
            <Button className="text-white font-semibold  bg-blue-600" href="/login" radius="sm" variant="flat">Login</Button>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar