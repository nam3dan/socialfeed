const NavBar = (Props) => {
    return ( 
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
            <a href="http://localhost:3000/" class="navbar-brand">
                <h1 style={{'margin':'1em'}}>Social<small className='text-muted'>Feed</small></h1>
            </a>
        </div>
    </nav>
        
     );
}
 
export default NavBar;