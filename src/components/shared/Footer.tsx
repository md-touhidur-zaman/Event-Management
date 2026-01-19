import React from "react";
import Logo from "../../../public/assets/logo/Logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-[#000000] p-2 md:p-0">
      <div className="container mx-auto py-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2">
        <div className="space-y-5">
          <Link
            className="text-primary hover:text-primary/90 flex items-center space-x-2"
            href="/"
          >
            <Logo />
            <h1 className="text-xl font-bold text-[#DC143C] hidden lg:inline-block">
              <span className="text-white">Event</span> Management
            </h1>
          </Link>

          <p>
            Connecting people through <br />
            unforgettable experiences. Discover, <br />
            book, and host events seamlessly.
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Discover</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/explore-events">Explore Events</Link>
            <Link href="/profile">Profile</Link>
            
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Company</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="flex space-x-5">
            <div className="h-10 w-10 bg-muted-foreground/60 flex justify-center items-center rounded-full">
              <a href="https://www.facebook.com"><Facebook/></a>
            </div>
            <div className="h-10 w-10 bg-muted-foreground/60 flex justify-center items-center rounded-full">
              <a href="https://x.com"><Twitter/></a>
            </div>
            <div className="h-10 w-10 bg-muted-foreground/60 flex justify-center items-center rounded-full">
              <a href="https://www.instagram.com"><Instagram/></a>
            </div>
            <div className="h-10 w-10 bg-muted-foreground/60 flex justify-center items-center rounded-full">
              <a href="https://www.linkedin.com"><Linkedin/></a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-muted-foreground/80">Subscribe to our newsletter for updates.</p>
            <Input placeholder="Enter your email"/>
            <Button className="bg-[#DC143C]">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <hr />
      </div>

      <div className="container mx-auto text-muted-foreground/80 flex justify-between pt-2 align-text-bottom">
        <div>
          <small>© 2024 EventPulse Inc. All rights reserved.</small>
        </div>
        <div className="flex space-x-2">
          <small>Privacy Policy</small>
          <small>Terms of Service</small>
        </div>
      </div>
    </div>
  );
}
