import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            {/* Outlet */}
            <div>
                <Outlet />
            </div>

            <div>
                <Toaster />
            </div>

        </div>
    );
};

export default MainLayout;