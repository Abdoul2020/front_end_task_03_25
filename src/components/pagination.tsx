import React from "react";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const [page, setPage] = useQueryState("page", {
    defaultValue: "1",
    shallow: false,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage.toString());
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-6">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous Page</span>
      </Button>
      
      <div className="flex items-center">
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next Page</span>
      </Button>
    </div>
  );
}