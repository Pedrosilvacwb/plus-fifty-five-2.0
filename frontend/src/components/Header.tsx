"use client";
import Image from "next/image";
import logo from "../../public/logo/_LOGO_ROUND_PLUS_FIFTY_FIVE 1.svg";
import Cart from "./Cart/Cart";
import Container from "./Container";
import { Drawer, DrawerTrigger } from "./ui/drawer";

import { LogIn, ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";
import { CartProducts, User } from "@/types";

interface HeaderProps {
  user: User;
}
const Header = ({ user }: HeaderProps) => {
  return (
    <header className="bg-sand z-50">
      <Drawer direction="right">
        <Container>
          <div className="flex items-center justify-between pt-6 bg-none">
            <Image
              width={160}
              height={160}
              src={logo}
              alt="Plus Fifty Five logo"
            />
            <nav className="md:block hidden">
              <ul className="flex items-center justify-between gap-8 font-semibold text-lg">
                <li className="text-land">
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Products</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
              </ul>
            </nav>
            <div>
              {user.ok ? (
                <ul className="flex items-center justify-between gap-4 font-semibold sm:text-lg text-sm">
                  <li>
                    <User2 />
                  </li>
                  <li>|</li>
                  <li>
                    <DrawerTrigger asChild onClick={() => console.log("abriu")}>
                      <ShoppingCart className="cursor-pointer" />
                    </DrawerTrigger>
                  </li>
                </ul>
              ) : (
                <ul className="flex items-center justify-between gap-4 font-semibold sm:text-lg text-sm">
                  <li>
                    <Link className="flex items-center gap-3" href="sign-in">
                      <span>Sign in</span>
                    </Link>
                  </li>
                  <li>|</li>
                  <li>
                    <Link className="flex items-center gap-3" href="sign-up">
                      <span>Sign up</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </Container>
        <Cart userId={user?.data?.id} />
      </Drawer>
    </header>
  );
};

export default Header;
