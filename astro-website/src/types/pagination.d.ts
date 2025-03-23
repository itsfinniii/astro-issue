interface PaginationProps {
    links: PaginationLinks;
    numbers: PaginationNumbers;
}

interface PaginationLinks {
    firstUrl?: string;
    previousUrl?: string;
    nextUrl?: string;
    lastUrl?: string;
}

interface PaginationNumbers {
    first: number;
    current: number;
    last: number;
}