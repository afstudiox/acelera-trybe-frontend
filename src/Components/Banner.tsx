interface BannerProps {
    src: string;
    alt: string;
}

function Banner({ src, alt }: BannerProps) {
    return <img src={src} alt={alt} />;
}

export default Banner;

