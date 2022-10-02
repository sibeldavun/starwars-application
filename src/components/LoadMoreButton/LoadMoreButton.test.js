import { render, screen } from '@testing-library/react';
import LoadMoreButton from './index';

describe("load more button test", () => {
    let button;

    test("a", () => {
        render(<LoadMoreButton isFetchingNextPage={true} hasNextPage={true} />);

        button = screen.getByText("Loading more...");
        expect(button).toBeInTheDocument();
    })
    test("a", () => {
        render(<LoadMoreButton isFetchingNextPage={false} hasNextPage={true} />);

        button = screen.getByText("Load More");
        expect(button).toBeInTheDocument();
    })
    test("a", () => {
        render(<LoadMoreButton isFetchingNextPage={false} hasNextPage={false} />);

        button = screen.getByText("Nothing more to load");
        expect(button).toBeInTheDocument();
    })
})