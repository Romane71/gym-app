import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } 
from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {

    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Our spacious, air-conditioned gymnasiums are fully equipped With a comprehensive range of cardio equipments such as treadmills, steppers and elipticals per club, and over 3 tons of free weight equipment as well as the stretch area, we can provide you with all the encouragement you need to achieve your goals."
}, 
{

    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Our studio programs offer an exciting range of classes including world renowned Les Mills programs such as BODYCOMBAT™, BODYPUMP™, BODYBALANCE™, BODYVIVE™, RPM™ and Yoga, Tai Chi and everything in-between. The studio is built on a fully sprung floor for your safety and the programs have been designed specifically to cater for the needs of all ages and abilities as well as at times that will suit you."
},
{

    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Personal Training is not just for movie stars! Now you can get affordable personal training to help you achieve your fitness goals. Maximize results with minimum time! For more information on how we can help you achieve your goals, please speak to our Fitness Manager or any of our Personal Trainers."
}
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
       
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (

    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20 ">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
             { /* HEADER */}
            <motion.div className="md:my-5 md:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{once: true, amount: 0.5}}
             transition={{  duration: 0.5}}
             variants={{
               hidden: { opacity: 0, x:-50},
               visible: { opacity: 1, x: 0}
             }}>

            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you
                to you to your ultimate fitness goals with ease. We provide true care
                into each and every member.
            </p>
            </motion.div>

            { /* BENEFITS */}
            <motion.div 
            className=" md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
 
        { /* GRAPHICS AND DESCRIPTION */}


        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

            {/* GRAPHIC */}

            <img className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            />
            { /* DESCRIPTION */}
            <div>
                { /* TITLE */}
                <div className="relative">
                    <div className="before:absolute before-top-20 
                    before:-left-20 before:z-[1] before:content-abstractwaves">
                      
           <motion.div 
           
           initial="hidden"
           whileInView="visible"
           viewport={{once: true, amount: 0.5}}
           transition={{  duration: 0.5}}
           variants={{
             hidden: { opacity: 0, x: 50},
             visible: { opacity: 1, x: 0}
           }}>

            <HText>
                            THOUSANDS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                        </motion.div>
                    </div>
                </div>
                { /* DESCRIPTION */}
                <motion.div    initial="hidden"
             whileInView="visible"
             viewport={{once: true, amount: 0.5}}
             transition={{  delay: 0.2,duration: 0.5}}
             variants={{
               hidden: { opacity: 0, x:50},
               visible: { opacity: 1, x: 0}
             }}>
                    <p className="my-5"></p>
                    <p className="mb-5">JOIN A WORLWIDE COMMUNITY, WITH ACCESS TO ONLINE COACHING</p>
                </motion.div>
                { /* BUTTON */}

                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20
                    before:right-40 before:z-[1] before:content-sparkles
                    ">
                     <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                        </ActionButton>   
                    </div>
                  
                </div>
            </div>
        </div>

        </motion.div>
    </section>
  )
}

export default Benefits