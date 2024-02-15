import React from 'react'

// import { BsJournalCheck } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci'
import { AiFillYoutube, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
// import { AiFillYoutubeAiOutlineTwitter } from 'react-icons/ai'
import { FaSnapchat } from 'react-icons/fa'
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className=''>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className='py-2 text-center'>
                            <span className="d-inline-block mx-2">
                                <CiLinkedin size={'24px'} />
                            </span>
                            <span className="d-inline-block mx-2">
                                <FaSnapchat size={'24px'} />
                            </span>
                            <span className="d-inline-block mx-2">
                                <AiOutlineTwitter size={'24px'} />
                            </span>
                            <span className="d-inline-block mx-2">
                                <AiFillGithub size={'24px'} />
                            </span>
                            <span className="d-inline-block mx-2">
                                <AiFillYoutube size={'24px'} />
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="mb-0 py-2 text-center">&copy;{year}. All rights are reserved. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
