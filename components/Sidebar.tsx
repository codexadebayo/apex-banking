"use client"

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathName = usePathname()
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo.svg"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Apex</h1>
        </Link>
        {sidebarLinks.map((item)=>{
            const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
            return(
                <Link href = {item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                    <div className="relative size-6">
                        <Image src={item.imgURL} alt={item.label} fill
                        className={cn({
                            'brightness-[3] invert-0':isActive
                        })}
                        />
                    </div>
                    <p className={cn('sidebar-label', {'!white-text': isActive})}>
                        {item.label}
                    </p>
                
                </Link>
            )
        })}
        User
      </nav>
      Footer
    </section>
  );
};

export default Sidebar;
