'use client';

import ReactPlayer from 'react-player'

export default function VideoPlayer({ url }: { url: string }) {
    return (
        <div className="relative w-full aspect-video mt-4">
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls={true}
                className="rounded-lg"
            />
        </div>
    );
} 