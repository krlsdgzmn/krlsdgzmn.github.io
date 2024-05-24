import { BorderBeam } from "@/components/magicui/border-beam";
import WordRotate from "./components/magicui/word-rotate";
import RetroGrid from "./components/magicui/retro-grid";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
  PiNumberCircleFourLight,
  PiNumberCircleFiveLight,
  PiNumberCircleSixLight,
  PiNumberCircleSevenLight,
  PiNumberCircleEightLight,
} from "react-icons/pi";

const fl301 = [
  {
    Icon: PiNumberCircleOneLight,
    name: "Hanzi Writing",
    description: "Activity 01",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity1.MOV",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleTwoLight,
    name: "Listening and Speaking",
    description: "Activity 02",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity2.mp3",
    mediaType: "audio",
  },
  {
    Icon: PiNumberCircleThreeLight,
    name: "Introduce Yourself in Mandarin",
    description: "Activity 03",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity3.mp4",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleFourLight,
    name: "Getting to Know My Best Friend",
    description: "Activity 04",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity4.mp4",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleFiveLight,
    name: "My Family Tree",
    description: "Activity 05 ",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity5.mp4",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleSixLight,
    name: "Ordering Food at McDonald's",
    description: "Activity 06",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL301_Activity6.mp4",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleSevenLight,
    name: "Workplace Role Play",
    description: "Final Project",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    source: "https://www.youtube.com/embed/mtPkdsMwjXc",
    mediaType: "iframe",
  },
];

const fl302 = [
  {
    Icon: PiNumberCircleOneLight,
    name: "Organizational Chart",
    description: "Activity 01",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    source: "DeGuzmanJohnKarlosBSIT3AG1_FL302_Activity01.png",
    mediaType: "image",
  },
  {
    Icon: PiNumberCircleTwoLight,
    name: "Binondo Bliss China Town",
    description: "Activity 02",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    source: "https://www.youtube.com/embed/hCd34KlYdes?si=pN-WYN6e8wqX8ep9",
    mediaType: "iframe",
  },
  {
    Icon: PiNumberCircleThreeLight,
    name: "My Daily Routine",
    description: "Activity 03",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    source: "my_daily_routine.mp4",
    mediaType: "video",
  },
  {
    Icon: PiNumberCircleFourLight,
    name: "50 Hanzi Characters",
    description: "Activity 04",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    source: "hanzi-writing.png",
    mediaType: "image",
  },
  {
    Icon: PiNumberCircleFiveLight,
    name: "Virtual Conversation",
    description: "Activity 05 ",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    source: "https://www.youtube.com/embed/HJB-sToa7Iw?si=c1T6yiMWtOl1o3bF",
    mediaType: "iframe",
  },
  {
    Icon: PiNumberCircleSixLight,
    name: "Cooking Vlog",
    description: "Activity 06",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2",
    source: "https://www.youtube.com/embed/6-HXDpyQpyE?si=99AD1jqfFKTEho2l",
    mediaType: "iframe",
  },
  {
    Icon: PiNumberCircleSevenLight,
    name: "Alamat ng Pinya",
    description: "Activity 07",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    source: "https://www.youtube.com/embed/vobMCMV2k-E",
    mediaType: "iframe",
  },
  {
    Icon: PiNumberCircleEightLight,
    name: "Capstone Presentation",
    description: "Final Project",
    cta: "View",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    source: "https://www.youtube.com/embed/i5HOQ6dYIq4",
    mediaType: "iframe",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="flex min-h-[90vh] w-full flex-col items-center overflow-hidden p-20 ">
        <div className="relative grid h-full w-full max-w-screen-lg gap-8 overflow-hidden rounded-xl border bg-black/10 py-10 backdrop-blur md:grid-cols-2">
          <div className="col-span-1 flex flex-col pl-14 pt-10">
            <div className="flex h-[200px] items-center ">
              <WordRotate
                className="rounded-l-2xl rounded-t-2xl border p-4 text-justify text-base"
                words={[
                  "Hey! I'm excited to share my experience of learning Mandarin with you. It's been an amazing journey so far, adjusting to the tones, getting to know the characters more deeply, and immersing myself in the culture. Join me as I explore the ins and outs of this fascinating language. Let's study and enjoy this learning adventure together!",
                  "嘿！ 我很高兴与您分享我学习普通话的经验。 到目前为止，这是一次奇妙的旅程，适应了语气，更深入地了解了角色，并使自己沉浸在文化中。 和我一起探索这门迷人语言的来龙去脉。 让我们一起学习并享受这次学习冒险吧！",
                  "Hēi! Wǒ hěn gāoxìng yǔ nín fēnxiǎng wǒ xuéxí pǔtōnghuà de jīngyàn. Dào mùqián wéizhǐ, zhè shì yīcì qímiào de lǚchéng, shìyìngle yǔqì, gēng shēnrù dì liǎojiěle juésè, bìng shǐ zìjǐ chénjìn zài wénhuà zhōng. Hé wǒ yīqǐ tànsuǒ zhè mén mírén yǔyán de láilóngqùmài. Ràng wǒmen yīqǐ xuéxí bìng xiǎngshòu zhè cì xuéxí màoxiǎn ba!",
                ]}
                duration={10000}
              />
            </div>

            <div className="text-foreground/80 mt-4 border-t pt-4 text-right text-sm font-light leading-5">
              <h2>&mdash; John Karlos De Guzman</h2>
              <p>BSIT 3AG1</p>
            </div>
          </div>

          <div className=" relative col-span-1 flex h-[450px] w-[400px] justify-center  border-b p-8">
            <img src="mandarin-jeo.svg" alt="Chinese Jeo" />
          </div>
          <BorderBeam size={450} />
        </div>

        <RetroGrid className="-z-10" />
      </section>

      {/* Foreign Language 301 section */}
      <section className="flex w-full flex-col overflow-hidden bg-black p-20">
        <h2 className="w-fit bg-gradient-to-b from-white via-pink-300 to-purple-500 bg-clip-text py-12 text-center text-5xl font-bold text-transparent">
          Foreign Language 301
        </h2>
        <BentoGrid className="lg:grid-rows-3">
          {fl301.map((fl) => (
            <BentoCard key={fl.name} {...fl} />
          ))}
        </BentoGrid>
      </section>

      {/* Foreign Language 302 section */}
      <section className="flex w-full flex-col overflow-hidden bg-black p-20">
        <h2 className="w-fit bg-gradient-to-b from-white via-blue-300 to-purple-500 bg-clip-text py-12 text-center text-5xl font-bold text-transparent">
          Foreign Language 302
        </h2>
        <BentoGrid className="lg:grid-rows-3">
          {fl302.map((fl) => (
            <BentoCard key={fl.name} {...fl} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
