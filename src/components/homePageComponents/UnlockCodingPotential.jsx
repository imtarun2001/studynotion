import UnlockCodingNStartCoding from "./UnlockCodingNStartCoding";


const UnlockCodingPotential = () => {

    const typingText = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n<a href="/one">One</a>\n<a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>`;
    
    const totalLines = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  return (
    <div>
        <UnlockCodingNStartCoding color={"coral"} reverse={false} unlockCoding={true} typingText={typingText} totalLines={totalLines}/>
    </div>
  )
}

export default UnlockCodingPotential