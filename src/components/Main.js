import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Main = () => {
    const [text, count] = useTypewriter({
        words: [
            "\"Hi, my name is William.\"",
            "\"I am passionate about technology.\""
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden">
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Computer Science Student
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span>cout&lt;&lt;</span>
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB8A" />
            </h1>
        </div>
        <div>
            <a href="#about">
                <button className="mainButton">About</button>
            </a>
            <a href="#experience">
                <button className="mainButton">Experience</button>
            </a>
            <a href="#skills">
                <button className="mainButton">Skills</button>
            </a>
            <a href="#contact">
                <button className="mainButton">Contact</button>
            </a>
        </div>
    </div>
  )
}

export default Main