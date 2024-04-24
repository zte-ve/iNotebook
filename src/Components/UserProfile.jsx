import React from 'react'

function UserProfile() {
    return (
        <div>
            <div className="mx-2" id="userAvatar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><i class="fa-regular fa-user"></i></div>
            {/* <button id="userProfileBtn" className="btn btn-primary" type="button" >Toggle right offcanvas</button> */}

            <div className="offcanvas offcanvas-end h-50 my-5" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    )
}

export default UserProfile
