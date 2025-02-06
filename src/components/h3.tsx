
export default function H3({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`text-xl font-bold mb-4 ${className}`}>{children}</h3>
    )
}
