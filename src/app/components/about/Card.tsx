import FSDImage from "@/components/template/ui/FSDImage";

type CardProps = {
    className?: string,
    ref?: any,
    src?: string,
    alt?: string,
}

export default function Card({ className, ref, src, alt = "" }: CardProps) {
    return (
        <div ref={ref} className={`${className} aspect-2/3 absolute top-0 rounded-2xl w-80 overflow-hidden max-h-120`}>
            {src && <FSDImage src={src} alt={alt} fill className="object-cover" />}
        </div>
    );
}
