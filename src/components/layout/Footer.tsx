import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Abhishkek-Verma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/Abhishkek-Verma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:abhi.ups838@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiMail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abhishek Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
