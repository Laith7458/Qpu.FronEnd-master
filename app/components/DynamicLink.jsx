"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DynamicLink() {
  const pathname = usePathname();

  return (
    <Link href={pathname === "/qr" ? "/" : "/qr"} className="text-white">
      {pathname === "/qr" ? "Home" : "My QR"}
    </Link>
  );
}
