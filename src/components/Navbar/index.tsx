import { JSX } from "solid-js";
import NavbarButton from "./Button";
import IconButton from "~/components/IconButton";
import NavSearchbar from "./Searchbar";

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <div class="flex items-center justify-center md:justify-between w-full sm:px-16 md:px-20 lg:px-32 shadow-2xl">
        <div class="flex gap-5 py-5">
          <a href="/" title="Don-T Games">
            <img
              src="/icons/transparent.png"
              alt="Don-T Games"
              class="h-6"
            ></img>
          </a>
          <NavbarButton href="/" text="Home" icon="fa-home" />
          <NavbarButton href="/games" text="Games" icon="fa-gamepad-modern" />
          <NavbarButton href="/web" text="Proxy" icon="fa-server" />
        </div>
        <div class="hidden md:flex gap-5 items-center justify-center">
          <NavSearchbar />
          <IconButton
            href="https://discord.gg/aura-development-websites-974005828086550568"
            text="Discord"
            type="fa-brands"
            icon="fa-discord"
          />
          <IconButton
            href="https://github.com/alphaotuken"
            text="Github"
            type="fa-brands"
            icon="fa-github"
          />
          />
          <IconButton
            href="https://github.com/codewithcodyy"
            text="Github"
            type="fa-brands"
            icon="fa-github"
          />
          <IconButton href="/options" text="Options" icon="fa-gear" />
        </div>
      </div>
    </nav>
  );
}
