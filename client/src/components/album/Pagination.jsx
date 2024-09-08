import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { observer } from "mobx-react-lite";
import { useStores } from "../../lib/useStores";

export const Pagination = observer(() => {
  const { gallery } = useStores();
  const pages = [...Array(gallery.totalPage + 1).keys()].slice(1);
  return (
    <div>
      <nav
        aria-label="Pagination"
        className="isolate inline-flex -space-x-px rounded-md shadow-sm text-sm font-semibold text-gray-900"
      >
        <button
          aria-current="page"
          disabled={gallery.currentPage === 1}
          onClick={() => gallery.navigatePrev()}
          className="relative inline-flex items-center px-4 py-2 ring-1 ring-inset disabled:text-white focus:outline-offset-0"
        >
          <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
        </button>
        {pages.map((item) => (
          <button
            key={item + "page"}
            disabled={item === gallery.currentPage}
            onClick={() => gallery.setCurrentPage(item)}
            className="relative inline-flex items-center px-4 py-2 ring-1 ring-inset disabled:bg-indigo-600 disabled:text-white focus:outline-offset-0"
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => gallery.navigateNext()}
          disabled={gallery.currentPage === gallery.totalPage}
          className="relative inline-flex items-center px-4 py-2 ring-1 ring-inset disabled:text-white focus:outline-offset-0"
        >
          <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
});
