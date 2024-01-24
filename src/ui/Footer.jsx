import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 lg:h-[400px] sm:h-[380px]">
      <div className="mx-auto w-full max-w-screen-xl lg:py-8 pl-5">
        <div className="md:flex md:justify-between py-11">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/logoWhite.png"
                className="h-[70px] w-[200px]"
                alt="rest in protein Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://reactrouter.com/en/main"
                    className="hover:underline"
                  >
                    React Router
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/owenzzhang"
                    className="hover:underline "
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/owen-thompson-ab1ba0141/"
                    className="hover:underline"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between sm:pr-4 sm:pb-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Rest In Protein. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
