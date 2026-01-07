"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        params.set("searchTerm", searchTerm);
      } else {
        params.delete("searchTerm");
      }
      startTransition(() => {
        router.push(`?${params.toString()}`, { scroll: false });
      });
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, router, searchParams]);

  const handelReset = () => {
    setSearchTerm("");
    setStatus("");
    setSortBy("");

    router.replace("?", { scroll: false });
  };

  return (
    <div className="border p-8 shadow-lg rounded-lg flex flex-col md:flex-row justify-center items-center gap-3">
      <div className="relative min-w-1/2">
        <Search className="absolute top-3 left-2" size={16} />
        <Input
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="searchTerm"
          className="pl-7"
          placeholder="Search"
        />
      </div>

      <div className="flex-1 flex md:justify-between gap-3">
        <div className="w-full md:w-1/2">
          <Select
            name="status"
            defaultValue={status}
            onValueChange={(value) => {
              if (value) {
                params.set("status", value);
                router.push(`?${params.toString()}`, { scroll: false });
                setStatus(value);
              } else {
                params.delete("status");
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup className="w-full">
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="OPEN">Open</SelectItem>
                <SelectItem value="FULL">Full</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
                <SelectItem value="COMPLETED">Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/2">
          <Select
            name="sortBy"
            defaultValue={sortBy}
            onValueChange={(value) => {
              if (value) {
                params.set("sortBy", value);
                router.push(`?${params.toString()}`, { scroll: false });
                setSortBy(value);
              } else {
                params.delete("sortBy");
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup className="w-full">
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="dsc">Descending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button
            onClick={handelReset}
            variant="outline"
            className="cursor-pointer bg-[#DC143C] text-white"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
