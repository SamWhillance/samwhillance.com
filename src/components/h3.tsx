
export default function H3({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`text-xl font-bold mt-4 mb-2 ${className}`}>{children}</h3>
    )
}
