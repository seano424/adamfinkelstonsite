import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLogo() {
  const { pathname } = useRouter();

  return (
    <Link href="/">
      <a className="text-3xl text-gray-900 font-black uppercase ">
        Adam Finkelston
        <span className="block relative text-xs font-medium text-gray-300 tracking-wider text-center">
          {pathname.includes("/prints") && "Prints"}
          {pathname.includes("/photography") && "Photography"}
        </span>
      </a>
    </Link>
  );
}
