#!/usr/bin/env node

function logDetails() {
    const message = "I am Devarshi, the founder of PrismLink, software engineer passionate about open-source and building amazing projects. I combine my development and DevOps expertise to create production-ready applications and share my knowledge on social media to empower developers of all levels.";
    const websiteLink = "https://devarshi.dev";
    const twitterLink = "https://twitter.com/devarshishimpi";
    const linkedinLink = "https://www.linkedin.com/in/devarshi-shimpi";
    const githubLink = "https://github.com/devarshishimpi";

    const colorfulBox = `
\x1b[38;5;51m---------------------------------------------------------------
\x1b[38;5;105m${message}\x1b[38;5;51m
---------------------------------------------------------------
\x1b[38;5;93mPortfolio: \x1b[0m\x1b[4m\x1b[38;5;39m${websiteLink}\x1b[0m        
\x1b[38;5;93mTwitter: \x1b[0m\x1b[4m\x1b[38;5;39m${twitterLink}\x1b[0m                     
\x1b[38;5;93mLinkedIn: \x1b[0m\x1b[4m\x1b[38;5;39m${linkedinLink}\x1b[0m
\x1b[38;5;93mGitHub: \x1b[0m\x1b[4m\x1b[38;5;39m${githubLink}\x1b[0m                                
\x1b[38;5;51m----------------------------------------------------------------\x1b[0m
`;

    console.log(colorfulBox);
}

logDetails();
