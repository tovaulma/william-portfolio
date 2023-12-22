import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">
            About
        </h3>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">My name is {" "}
            <span className="underline decoration-[#F7AB0A]/50">William Park</span>
            .
            </h4>
            <p className="text-lg">
            I am a computer science student at the University of Washington. Having lived and studied in four of the biggest cities around the world (Seoul, Beijing, Shanghai, and Seattle), I am deeply engaged with the grand challenges of our world and passionate to tackle them using technology. I am also interested in the universe, researching habitable exoplanets and finding solutions to mega-constellations.
            </p>
        </div>
    </motion.div>
  )
}

export default About