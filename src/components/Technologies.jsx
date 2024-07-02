import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine, RiNodejsLine, RiGitBranchFill} from "react-icons/ri"
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-[#DD4B25]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-[#2D53E5]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-[#F7E025]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-[#08E1FF]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-[#58A149]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiGitBranchFill className="text-7xl text-[#E84E31]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-[#1AAD57]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#08668E]"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies