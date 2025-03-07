interface ContentContainerProps {
    children: React.ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
    return (
        <div id="content-container" className="p-6 sm:p-8 md:p-10 animate-fade-in">
            {children}
        </div>
    );
}