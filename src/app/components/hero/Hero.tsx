import Photo from "@/app/components/hero/Photo";
import Text from "@/app/components/hero/Text";
import Section from "@/components/template/ui/Section";

export default function Hero() {
    return (
        <Section outerClassName='flex items-center !pt-42 lg:pt-50! min-h-[max(100dvh,750px)] min-h-[max(100dvh,750px)] bg-orange-50'>
            <div className='mx-auto flex flex-col max-w-90 md:max-w-max md:flex-row gap-6 md:gap-8 lg:gap-20 justify-center'>
                <Photo />

                <Text />
            </div>
        </Section>
    );
};
