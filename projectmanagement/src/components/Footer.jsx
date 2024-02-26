import logo from "../assets/my-logo.png";

export default function Footer() {
  return (
    <footer className="-mt-12 pr-8 h-40 w-full flex gap-8 items-center justify-end bg-[#3e122c] text-slate-50">
      <div className="w-3/4 flex gap-12 justify-end items-center">
        <div className="flex gap-4 items-center">
          <img src={logo} />
          <p>
            Developed by:<span className="font-bold pl-2">wfanni</span>
          </p>
        </div>
        <div className="flex gap-8">
          <ul className="flex flex-wrap flex-col gap-2">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/fanni-wihl/">
                <i className="fa-brands fa-linkedin mr-4"></i>
                Fanni Wihl
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:fanniwihl@gmail.com">
                <i className="fa-regular fa-envelope mr-4"></i>
                fanniwihl@gmail.com
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/wfanni">
                <i className="fa-brands fa-github mr-4"></i>
                wfanni
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/lovelydkl/">
                <i className="fa-brands fa-instagram mr-4"></i>
                lovelydkl
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
