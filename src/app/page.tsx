import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Home as HomeIcon, Bell, UserRound } from "lucide-react";
import { HiHome } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import HeaderTweet from "./components/HeaderTweet";
import CardWhoToFollow from "./components/CardWhoToFollow";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4">
        <section className="mt-5 grid grid-cols-5">
          {/* SIDEBAR */}
          <div className="flex flex-col justify-start gap-4">
            <Button variant="ghost" className="justify-normal">
              <HiHome /> Home
            </Button>
            <Button variant="ghost" className="justify-normal">
              <IoIosNotifications />
              Notification
            </Button>
            <Button variant="ghost" className="justify-normal">
              <BiSolidMessageDetail />
              Message
            </Button>
            <Button variant="ghost" className="justify-normal">
              <UserRound />
              Profile
            </Button>
          </div>
          {/* END SIDEBAR */}

          {/* TWEET LIST */}
          <h1 className="col-span-3">
            <HeaderTweet />
          </h1>
          {/* END TWEET LIST */}

          {/* FOLLOW LIST */}

          <div></div>
          {/* ENF FOLLOW LIST */}
        </section>
      </main>
    </>
  );
}
