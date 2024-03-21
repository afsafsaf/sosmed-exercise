"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HeaderTweet: React.FC = () => {
  const [tweet, setTweet] = useState();
  return (
    <section>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="Type your tweet here."
          style={{ resize: "none" }}
          maxLength={200}
        />
      </div>

      <p className="my-1 text-right text-xs">200</p>
      <div className="flex justify-end">
        <Button>Tweet</Button>
      </div>
      <Separator />
    </section>
  );
};

export default HeaderTweet;
