
import Link from "next/link"

import { projects } from "../../data/projects.json"

const MEDIUM_URL = "https://medium.com/@singhgurnoor080"

function Projects() {

    return (
        <div className={`projectCont w-full h-auto relative top-[50px] p-10px flex flex-col items-center justify-center mb-[50px]`}>
            <div className={`w-full flex flex-row items-center justify-center`}>
                <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                <p data-aos="fade-up" className={`text-white-200 text-[15px]`}>Latest Works</p>
                <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>


                <Link href="/projects">
                    <a data-aos="zoom-in-up" className={`text-center text-green-200 underline absolute top-[50px] text-[14px]`}>All Projects</a>
                </Link>
            </div>

            <div className={`projects w-full h-auto p-3 flex flex-row flex-wrap items-center justify-between mb-[50px]`}>
                {
                    projects.length > 0 ?
                        projects.slice(0, 6).map((list, i) => {
                            return (
                                <div data-aos="zoom-in" key={i} className={`box w-full h-auto bg-dark-200 rounded-[5px] relative top-[50px] transition-all mb-[50px] mr-[5px] opacity-[.7] md:w-[250px] hover:opacity-[1]`} key={list}>
                                    <div className="imgCont"></div>
                                    <style jsx>{`
                                .imgCont{
                                    width: 100%;
                                    height: 190px;
                                    background-image: url(${list.imageUrl === "" || list.imageUrl === null ? "https://www.wallpapertip.com/wmimgs/136-1369543_laptop-coding.jpg" : list.imageUrl});
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    // box-shadow: 0px 0px 3px #000;
                                    border-radius: 5px;
                                }
                            `}</style>
                                    <div className={`w-full p-[10px] bottom-[5px]`}>
                                        <div className="w-full h-auto">
                                            <p className={`text-[15px] text-white-200`}>{list.title === "" ? "Project Title" : list.title}</p>
                                            <br />
                                            <small>{list.description === "" ? "some dummy description" : list.description}</small>
                                        </div>
                                        <br />
                                        <div className={` bottom-[5px] left-[5px] p-0 flex items-start justify-start`}>
                                            {
                                                list.tags.length > 0 ?
                                                    list.tags.slice(0, 3).map((tag, i) => {
                                                        return (
                                                            <span key={i} className={`text-[10px] py-[3px] px-[9px] bg-dark-100 mr-[2px] rounded-[2px] text-white-100`}>{tag}</span>
                                                        )
                                                    })
                                                    :
                                                    ""
                                            }
                                        </div>
                                        <span className={`absolute  my-[-20px] right-[10px] text-[12px] flex items-center justify-start`}>
                                            {
                                                list.project_url !== "" ?
                                                    <>
                                                        <a href={list.project_url} className={`text-white-200 mr-[10px] hover:underline hover:text-white-100`}>
                                                            View
                                                        </a>
                                                        <ion-icon name="arrow-forward-outline" className={`ml-[10px] p-[10px]`}></ion-icon>
                                                    </>
                                                    :
                                                    ""
                                            }
                                        </span>

                                    </div>
                                </div>
                            )
                        })
                        :
                        ""
                }
            </div>

            <div data-aos="zoom-in-up" className="w-full h-auto mt-4 mb-2 flex flex-row items-center justify-center">
                <a
                    href={MEDIUM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="border-[2px] border-solid border-green-200 px-6 py-3 bg-dark-100 rounded-[30px] text-green-200 scale-[.90] hover:scale-[.95] hover:bg-dark-200 transition-all"
                >
                    Read My Technical Writing →
                </a>
            </div>
        </div>
    )
}

export default Projects
