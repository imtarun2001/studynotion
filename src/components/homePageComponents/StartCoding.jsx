import React from 'react'
import UnlockCodingNStartCoding from './UnlockCodingNStartCoding';

const StartCoding = () => {

    const totalLines = [1,2,3,4,5,6,7,8,9,10,11,12];
    const typingText =`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home`;

  return (
    <div>
        <UnlockCodingNStartCoding color={"lightBlue"} reverse={true} unlockCoding={false} typingText={typingText} totalLines={totalLines}/>
    </div>
  )
}

export default StartCoding