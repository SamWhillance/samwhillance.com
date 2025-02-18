export default function ContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div id="content-container" 
            className="
                flex 
                flex-col 
                h-full 
                m-2 
                rounded-xl 
                bg-white/50
                border border-white/30
                p-1 md:p-4 
                text-black 
                backdrop-blur-md
                shadow-lg">
            <div id="content">
                {children}
            </div>
        </div>
    )
}