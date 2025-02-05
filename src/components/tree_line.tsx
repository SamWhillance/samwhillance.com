interface TreeLineProps {
    isFirst?: boolean;
    children: React.ReactNode;
}

export default function TreeLine({ isFirst = false, children }: TreeLineProps) {
    return (
        <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 26 26" fill="none">
                <path
                    d={isFirst ? "M1 13 h25" : "M1 0 v12 M1 12 h25"}
                    stroke="currentColor"
                    strokeWidth="1"
                />
            </svg>
            <span>{children}</span>
        </div>
    );
} 