import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
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
        <Link href="#" aria-current="page">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
         Customers
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <Button as={Link} className="text-white font-semibold  bg-blue-600" href="#" variant="flat">
          Get in touch
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  )
}

export default NavBar