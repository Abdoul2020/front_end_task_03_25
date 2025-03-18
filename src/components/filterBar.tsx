
"use client"; // client rendering
import React from "react";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";

export function FilterControls() {
  const router = useRouter();
  
  const [status, setStatus] = useQueryState("status", {
    defaultValue: "all",
    shallow: false,
  });
  
  const [gender, setGender] = useQueryState("gender", {
    defaultValue: "all",
    shallow: false,
  });

  const handleStatusChange = (value: string) => {
    setStatus(value !== "all" ? value : null);
  };

  const handleGenderChange = (value: string) => {
    setGender(value !== "all" ? value : null);
  };

  const handleResetFilters = () => {
    setStatus(null);
    setGender(null);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="w-full sm:w-1/3">
        <Select value={status ?? "all"} onValueChange={handleStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white">
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="alive">Alive</SelectItem>
            <SelectItem value="dead">Dead</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full sm:w-1/3">
        <Select value={gender ?? "all"} onValueChange={handleGenderChange}>
          <SelectTrigger>
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white">
            <SelectItem value="all">All Genders</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="genderless">Genderless</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button variant="outline" onClick={handleResetFilters} className="w-full sm:w-auto">
        Reset Filters
      </Button>
    </div>
  );
}