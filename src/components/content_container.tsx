export default function ContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div id="content-container" className="flex flex-col bg-black h-full m-2 rounded-xl p-1 md:p-4 text-white">
            <div id="content">
                {children}
            </div>
        </div>
    )
}