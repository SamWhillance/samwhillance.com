import { Github, Linkedin } from "lucide-react";

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
                    </div>
                </div>
            </div>
        </footer>
    );
}