import { ChevronRight } from "lucide-react";

interface TreeLineProps {
    children: React.ReactNode;
    isFirst?: boolean;
}

export default function TreeLine({ children, isFirst = false }: TreeLineProps) {
    return (
        <div className={`tree-line group ${isFirst ? 'mt-2' : ''}`}>
            <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-medium">{children}</span>
            </div>
        </div>
    );
} 