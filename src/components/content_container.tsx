export default function ContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <div id="content-container" className="flex flex-col bg-black h-full m-2 rounded-xl p-8 text-white">
            <div id="content">
                {children}
            </div>
        </div>
    )
}