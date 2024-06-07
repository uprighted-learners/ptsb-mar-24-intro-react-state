// Include css file from styling folder
import '../styling/Header.css'

// External functional component
function Header() {

    // Output for this header component
    return (
        <div>
            <h1 className='header'>Header</h1>
            <p>First thing you want users to see</p>
        </div>
    )
}

// Export the component so it can be used in other files
export default Header;