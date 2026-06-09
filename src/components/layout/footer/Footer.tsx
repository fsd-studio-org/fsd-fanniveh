import FooterSVG from "@/components/layout/footer/FooterSVG";
import Section from "@/components/template/ui/Section";
import { NAV_ITEMS } from "@/constants/navigation";

type FooterProps = {
    logo?: string,
    name?: string,
    sections?: string[],
    socialMedia?: Partial<Record<SocialPlatform, string>>
}

type SocialPlatform = "twitter" | "facebook" | "instagram" | "linkedin" | "x";

function Footer({
    name = "Fanni Véh",
    sections = NAV_ITEMS,
}: FooterProps) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <Section innerClassName="space-y-2" outerClassName="overflow-auto! bg-secondary relative! !pb-6">
            <div className="flex justify-between md:-mt-11">
                <div className="flex flex-col h-fit">
                    <h2 className="text-3xl text-primary md:text-[70px] italic font-primary">
                        {name}
                    </h2>
                    {/* <div className="gap-4 text-lg hidden md:flex">
                        {socialEntries.map(([platform, link], index) => (
                            <a key={index} href={link} className="w-10 h-10">
                                {icons[platform]}
                            </a>
                        ))}
                    </div> */}
                </div>


                <div className="flex flex-col gap-2 text-end font-primary font-light text-xl md:text-2xl">
                    {sections.map((section, index) => (
                        <a key={index} href={`#${section}`}>{section}</a>
                    ))}
                </div>
            </div>


            {/* <div className="flex gap-4 text-lg justify-center mt-4 md:hidden">
                {socialEntries.map(([social, link], index) => (
                    <a key={index} href={link} className="w-10 h-10">
                        {icons[social]}
                    </a>
                ))}
            </div> */}


            <div className="text-center text-xs md:text-md md:flex justify-between mt-10">
                <p className="text-center">© {currentYear} Fanni Véh. All rights reserved.</p>
                <a target="_blank" href="https://fsd-studio.com">Developed by: <span className="underline underline-offset-2">FSD Studio</span></a>
            </div>

            <div className="absolute hidden lg:block max-w-[1560px] -top-[1px] right-1/2 translate-x-1/2 w-full">
                <FooterSVG />
            </div>
        </Section>
    );
}

export default Footer;