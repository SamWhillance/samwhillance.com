import { Github, Linkedin, createLucideIcon } from "lucide-react";

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

export default function Footer() {
    return (
        <footer className="bg-background/80 backdrop-blur-md border-t border-card-border py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-text-muted text-sm">
                            © {new Date().getFullYear()} Samuel Whillance. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a 
                            href="https://github.com/samwhillance" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-primary transition-colors duration-300"
                        >
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/samwhillance" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-primary transition-colors duration-300"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                            href="https://x.com/swhillance" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-primary transition-colors duration-300"
                        >
                            <span className="sr-only">X (Twitter)</span>
                            <XIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}