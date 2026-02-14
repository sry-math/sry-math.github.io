
interface YouTubeVideoProps {
    videoId: string;
    title: string;
}

export function YouTubeVideo({ videoId, title }: YouTubeVideoProps) {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
