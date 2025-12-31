import img from "/chef-claude-icon.png"

export default function Header() {
    
    return(
        <header>
            <img src={img} alt="Chef Claude Icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}