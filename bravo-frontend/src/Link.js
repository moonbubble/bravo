const Link = ({src, displayText}) => {
    return <a className="hover:bg-yellow-100 hover:rounded-sm px-1 bg-blend-color-screen" href={src}>{displayText}</a>;
}

export default Link;