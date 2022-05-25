
function TestMenu() {
  return (
<div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-default navbar-mobile bootsnav on">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="active"><a href="#" data-hover="Home">Home <span data-hover="Home"></span></a></li>
                            <li><a href="#" data-hover="About">About <span data-hover="About"></span></a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="Shortcodes">Shortcodes <span data-hover="Shortcodes"></span></a>
                                <ul class="dropdown-menu animated">
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sub Menu</a>
                                        <ul class="dropdown-menu animated">
                                            <li><a href="#">Custom Menu</a></li>
                                            <li><a href="#">Custom Menu</a></li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sub Menu</a>
                                                <ul class="dropdown-menu multi-dropdown animated">
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Custom Menu</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="Pages">Pages <span data-hover="Pages"></span></a>
                                <ul class="dropdown-menu animated">
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sub Menu</a>
                                        <ul class="dropdown-menu animated">
                                            <li><a href="#">Custom Menu</a></li>
                                            <li><a href="#">Custom Menu</a></li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sub Menu</a>
                                                <ul class="dropdown-menu multi-dropdown animated">
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Custom Menu</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                    <li><a href="#">Custom Menu</a></li>
                                </ul>
                            </li>
                            <li><a href="#" data-hover="Portfolio">Portfolio <span data-hover="Portfolio"></span></a></li>
                            <li class="dropdown megamenu-fw">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="Megamenu">Megamenu <span data-hover="Megamenu"></span></a>
                                <ul class="dropdown-menu megamenu-content animated" role="menu">
                                    <li>
                                        <div class="row">
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Title Menu One</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Title Menu Two</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Title Menu Three</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Title Menu Four</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                        <li><a href="#">Custom Menu</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#" data-hover="Contact">Contact <span data-hover="Contact"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>
  );
}

export default TestMenu;
