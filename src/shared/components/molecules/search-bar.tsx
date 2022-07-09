import { Menu } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";

interface PropTypes {
  keyword: any;
  setkeyWord(e: any): void;
  suggestions: string[];
  submit(e: any): void;
}

export default function SearchBar(props: PropTypes) {
  return (
    <div className="bg-primary px-4 md:px-24 py-3 ">
      <div className="bg-white md:p-2  relative shadow w-full flex items-center justify-between">
        <form action=""></form>
        <input
          className=" p-2 md:p-2 flex-grow outline-none text-base font-med text-gray-800"
          type="text"
          value={props.keyword}
          onChange={(e) => props.setkeyWord(e.target.value)}
          placeholder="Search gifs here ..."
          onKeyPress={props.submit}
        />
        <button
          onClick={() => props.submit("origin")}
          className="outline-none px-2"
        >
          <IoSearch size={20} />
        </button>
        {/* <Menu className="bg-white absolute p-3 w-full top-14 border border-gray-200 rounded shadow-md">
          <Menu.Items static>
            <Menu.Item>
              <p>Hello</p>
            </Menu.Item>
            <Menu.Item>
              <p>Hello</p>
            </Menu.Item>
            <Menu.Item>
              <p>Hello</p>
            </Menu.Item>
          </Menu.Items>
        </Menu> */}
      </div>
    </div>
  );
}
