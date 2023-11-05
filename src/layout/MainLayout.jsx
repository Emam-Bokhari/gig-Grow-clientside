import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            {/* Outlet */}
            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;